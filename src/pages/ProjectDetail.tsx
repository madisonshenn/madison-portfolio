// src/components/ProjectDetail.tsx

import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * This version supports BOTH:
 * 1) New tabbed data model (project.tabs with blocks: text/figures/links)
 * 2) Legacy fields (overview/data/approach/results/techStack/links)
 *
 * For legacy projects, tabs will be:
 *  - Problem (overview + data)
 *  - Approach and Workflow (approach)
 *  - Tech Stack (techStack)
 *  - Impact (results + links)
 *
 * Each tab can render inline figures/links when present in the new model.
 */

type ProjectLink = { label: string; url: string };
type ProjectFigure = { src: string; caption?: string; alt?: string };
type ProjectBlock =
  | { type: "text"; text: string }
  | { type: "figures"; figures: ProjectFigure[] }
  | { type: "links"; links: ProjectLink[] };
type ProjectTab = { id: string; label: string; blocks: ProjectBlock[] };

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const tabs = normalizeTabs(project);
  const defaultValue = tabs[0]?.id ?? "problem";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <Link to="/projects">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                {project.title}
              </h1>
              {project.intro ? (
                <p className="text-lg text-muted-foreground mb-6 animate-fade-in">
                  {project.intro}
                </p>
              ) : null}

              {project.skills?.length ? (
                <div className="flex flex-wrap gap-2 animate-fade-in">
                  {project.skills.map((skill: string, i: number) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue={defaultValue} className="w-full">
                <TabsList className={`grid w-full grid-cols-${tabs.length} mb-8`}>
                  {tabs.map((t) => (
                    <TabsTrigger key={t.id} value={t.id}>
                      {t.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {tabs.map((t) => (
                  <TabsContent key={t.id} value={t.id} className="space-y-8 animate-fade-in">
                    <Card>
                      <CardContent className="p-6 space-y-6">
                        {t.blocks.map((b, idx) => (
                          <Block key={idx} block={b} projectTitle={project.title} />
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

/* ----------------- Helpers ----------------- */

function Block({ block, projectTitle }: { block: ProjectBlock; projectTitle: string }) {
  if (block.type === "text") {
    // Preserve simple line breaks as paragraphs
    return (
      <>
        {block.text.split("\n").map((para, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {para}
          </p>
        ))}
      </>
    );
  }

  if (block.type === "figures" && block.figures?.length) {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {block.figures.map((f, i) => (
          <figure key={i} className="rounded-lg border p-3">
            <img
              src={f.src}
              alt={f.alt ?? f.caption ?? projectTitle}
              className="w-full h-auto rounded"
              loading="lazy"
            />
            {f.caption ? (
              <figcaption className="text-sm text-muted-foreground mt-2">{f.caption}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    );
  }

  if (block.type === "links" && block.links?.length) {
    return (
      <div className="space-y-3">
        {block.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-4 bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="font-medium">{link.label}</span>
          </a>
        ))}
      </div>
    );
  }

  return null;
}

/**
 * Build tabs from the new model if present (project.tabs). Otherwise,
 * construct tabs from legacy fields so the page never renders blank.
 */
function normalizeTabs(project: any): ProjectTab[] {
  if (Array.isArray(project.tabs) && project.tabs.length) {
    return project.tabs;
  }

  const tabs: ProjectTab[] = [];

  // Problem: overview + data
  if (project.overview || project.data) {
    const blocks: ProjectBlock[] = [];
    if (project.overview) blocks.push({ type: "text", text: project.overview });
    if (project.data) blocks.push({ type: "text", text: project.data });
    tabs.push({ id: "problem", label: "Problem", blocks });
  }

  // Approach and Workflow: approach
  if (project.approach) {
    tabs.push({
      id: "approach",
      label: "Approach and Workflow",
      blocks: [{ type: "text", text: project.approach }],
    });
  }

  // Tech Stack
  if (Array.isArray(project.techStack) && project.techStack.length) {
    tabs.push({
      id: "tech",
      label: "Tech Stack",
      blocks: [{ type: "text", text: project.techStack.join(", ") }],
    });
  }

  // Impact: results + links
  if (project.results || (Array.isArray(project.links) && project.links.length)) {
    const blocks: ProjectBlock[] = [];
    if (project.results) blocks.push({ type: "text", text: project.results });
    if (project.links?.length) blocks.push({ type: "links", links: project.links });
    tabs.push({ id: "impact", label: "Impact", blocks });
  }

  // Ensure at least one tab exists
  if (!tabs.length) {
    tabs.push({
      id: "problem",
      label: "Problem",
      blocks: [{ type: "text", text: "Details coming soon." }],
    });
  }

  return tabs;
}
