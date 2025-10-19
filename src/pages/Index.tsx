import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Timeline } from "@/components/Timeline";
import { professionalExperience, academicExperience } from "@/data/experience";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${heroBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-32">
            <div className="max-w-3xl space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Madison Shen
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Data Scientist passionate about 
                <span className="text-foreground font-medium"> machine learning engineering</span> and <span className="text-foreground font-medium"> applied AI</span>. 
                Experienced in building and deploying <span className="text-foreground font-medium"> scalable ML pipelines</span> and combining data science with real-world impact.
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg md:text-xl mt-6">
                <p className="text-foreground font-medium">
                  Graduating December 2025 | Seeking <span className="font-semibold">Data Scientist / ML Engineer / Data Engineer / Data Analyst</span> Full-time Opportunity
                </p>
              </div>

              
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/madison-s-0a2523198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/madisonshenn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="mailto:madisonshenn@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <Timeline items={professionalExperience} title="Professional Experience" />
              </div>
              <div>
                <Timeline items={academicExperience} title="Academic Experience" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
