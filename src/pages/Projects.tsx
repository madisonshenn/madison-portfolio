import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  const professionalProjects = projects.filter(p => p.category === "professional");
  const selectedProjects = projects.filter(p => p.category === "selected");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Projects</h1>
              <p className="text-lg text-muted-foreground animate-fade-in">
                A showcase of professional ML work and selected personal projects.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Projects Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Professional Experience Projects</h2>
            <div className="space-y-6">
              {professionalProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Projects Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Selected Projects</h2>
            <div className="space-y-6">
              {selectedProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
