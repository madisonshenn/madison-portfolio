import { ExperienceItem } from "@/data/experience";
import { Badge } from "@/components/ui/badge";

interface TimelineProps {
  items: ExperienceItem[];
  title: string;
}

export const Timeline = ({ items, title }: TimelineProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="relative border-l-2 border-border pl-8 space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            {/* Timeline dot */}
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
            
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
              </div>
              
              <p className="text-sm font-medium text-accent">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              
              {item.skills && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
