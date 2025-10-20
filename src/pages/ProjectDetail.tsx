// src/pages/ProjectDetail.tsx

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
 * Supports BOTH:
 * 1) New tabbed data model (project.tabs with blocks: text/figures/links)
 * 2) Legacy fields (overview/data/approach/results/techStack/links)
 *
 * Images are kept under src/assets/** and resolved at runtime via import.meta.glob.
 */

type ProjectLink = { label: string; url: string };
type ProjectFigure = { src: string; caption?: string; alt?: string };
type ProjectBlock =
  | { type: "text"; text: string }
  | { type: "figures"; figures: ProjectFigure[] }
  | { type: "links"; links: ProjectLink[] };
type ProjectTab = { id: string; label: string; blocks: ProjectBlock[] };

/* ---------- Asset resolver for src/assets/** ---------- */
// This maps every file under src/assets/** to its built URL (Vite).
const imageModules = import.meta.glob("../assets/**/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function resolveAsset(rel: string): string {
  if (!rel) return rel;
  // Pass through absolute URLs or data URIs
  if (/^(https?:)?\/\//i.test(rel) || rel.startsWith("data:")) return rel;

  // Normalize leading slashes and stray ./ segments
  const clean = rel.replace(/^\/+/, "").replace(/^\.\//, "");

  // Common candidates (allow callers to provide "figures/...", "assets/...", or plain filename)
  const candidates = [
    `../assets/${clean}`,
    `../assets/${clean.replace(/^assets\//, "")}`,
    `../assets/figures/${clean.replace(/^figures\//, "")}`,
  ];

  for (const key of candidates) {
    if (imageModules[key]) return imageModules[key];
  }
  // Fallback: if caller accidentally passed a relative path that already matches a key
  if (imageModules[clean]) return imageModules[clean];

  // Last resort: return the input (will 404 if invalid, but won't crash the app)
  return rel;
}
/* ------------------------------------------------------ */

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
  const tabCols = Math.min(tabs.length || 1, 4); // for grid template

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
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
              {project.intro && (
                <p className="text-lg text-muted-foreground mb-6 animate-fade-in">
                  {project.intro}
                </p>
              )}
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

        {/* Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue={defaultValue} className="w-full">
                {/* Inline grid template avoids Tailwind purge problems */}
                <TabsList
                  className="grid w-full mb-8"
                  style={{ gridTemplateColumns: `repeat(${tabCols}, minmax(0, 1fr))` }}
                >
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

/* ---------- Helpers ---------- */

function Block({ block, projectTitle }: { block: ProjectBlock; projectTitle: string }) {
  if (block.type === "text") {
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
        {block.figures.map((f, i) => {
          const url = resolveAsset(f.src);
          return (
            <figure key={i} className="rounded-lg border p-3">
              <img
                src={url}
                alt={f.alt ?? f.caption ?? projectTitle}
                className="w-full h-auto rounded"
                loading="lazy"
              />
              {f.caption ? (
                <figcaption className="text-sm text-muted-foreground mt-2">{f.caption}</figcaption>
              ) : null}
            </figure>
          );
        })}
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

function normalizeTabs(project: any): ProjectTab[] {
  if (Array.isArray(project.tabs) && project.tabs.length) return project.tabs;

  const tabs: ProjectTab[] = [];

  if (project.overview || project.data) {
    const blocks: ProjectBlock[] = [];
    if (project.overview) blocks.push({ type: "text", text: project.overview });
    if (project.data) blocks.push({ type: "text", text: project.data });
    tabs.push({ id: "problem", label: "Problem", blocks });
  }

  if (project.approach) {
    tabs.push({
      id: "approach",
      label: "Approach and Workflow",
      blocks: [{ type: "text", text: project.approach }],
    });
  }

  if (Array.isArray(project.techStack) && project.techStack.length) {
    tabs.push({
      id: "tech",
      label: "Tech Stack",
      blocks: [{ type: "text", text: project.techStack.join(", ") }],
    });
  }

  if (project.results || (Array.isArray(project.links) && project.links.length)) {
    const blocks: ProjectBlock[] = [];
    if (project.results) blocks.push({ type: "text", text: project.results });
    if (project.links?.length) blocks.push({ type: "links", links: project.links });
    tabs.push({ id: "impact", label: "Impact", blocks });
  }

  if (!tabs.length) {
    tabs.push({
      id: "problem",
      label: "Problem",
      blocks: [{ type: "text", text: "Details coming soon." }],
    });
  }

  return tabs;
}
