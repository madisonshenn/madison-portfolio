import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const imageSrc = `/src/assets/${project.thumbnail}`;
  
  return (
    <Link to={`/projects/${project.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-5 gap-0 h-full">
            {/* Image Section */}
            <div className="md:col-span-2 relative overflow-hidden bg-secondary h-48 md:h-full">
              <img
                src={imageSrc}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            
            {/* Content Section */}
            <div className="md:col-span-3 p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.intro}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.skills.slice(0, 5).map((skill, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {project.skills.length > 5 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.skills.length - 5} more
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
