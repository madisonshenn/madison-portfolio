import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

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

  const imageSrc = `/src/assets/${project.thumbnail}`;

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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-6 animate-fade-in">{project.intro}</p>
              
              <div className="flex flex-wrap gap-2 animate-fade-in">
                {project.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="figures">Figures</TabsTrigger>
                  <TabsTrigger value="code">Tech Stack</TabsTrigger>
                  <TabsTrigger value="links">Links</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8 animate-fade-in">
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-3">Overview</h2>
                        <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
                      </div>

                      {project.data && (
                        <div>
                          <h2 className="text-2xl font-bold mb-3">Data</h2>
                          <p className="text-muted-foreground leading-relaxed">{project.data}</p>
                        </div>
                      )}

                      <div>
                        <h2 className="text-2xl font-bold mb-3">Approach</h2>
                        <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold mb-3">Results</h2>
                        <p className="text-muted-foreground leading-relaxed">{project.results}</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="figures" className="animate-fade-in">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-6">Project Visualization</h2>
                      <img
                        src={imageSrc}
                        alt={project.title}
                        className="w-full rounded-lg shadow-md"
                      />
                      <p className="text-sm text-muted-foreground mt-4 text-center">
                        Key visualization representing the {project.title} project
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="code" className="animate-fade-in">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {project.techStack.map((tech, i) => (
                          <div
                            key={i}
                            className="p-3 bg-secondary rounded-md text-center font-medium text-sm"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="links" className="animate-fade-in">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-6">External Links</h2>
                      {project.links && project.links.length > 0 ? (
                        <div className="space-y-3">
                          {project.links.map((link, i) => (
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
                      ) : (
                        <p className="text-muted-foreground">No external links available for this project.</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
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
