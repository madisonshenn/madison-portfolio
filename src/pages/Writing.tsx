import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "quantile-regression-forests",
    title: "Understanding Quantile Regression Forests for Uncertainty Estimation",
    excerpt: "A deep dive into how QRF provides calibrated uncertainty bounds for regression tasks, with practical examples from carbon modeling.",
    date: "2024-03-15",
    tags: ["Machine Learning", "Uncertainty", "Random Forests"]
  },
  {
    id: "cold-start-recsys",
    title: "Tackling Cold-Start in Recommendation Systems",
    excerpt: "Exploring feature engineering and model architectures that reduce the cold-start gap in production recommendation systems.",
    date: "2024-02-20",
    tags: ["RecSys", "Feature Engineering", "Production ML"]
  },
  {
    id: "ab-testing-pitfalls",
    title: "Common Pitfalls in A/B Testing for ML Models",
    excerpt: "Lessons learned from running dozens of A/B tests: variance reduction, multiple testing corrections, and heterogeneous treatment effects.",
    date: "2024-01-10",
    tags: ["A/B Testing", "Statistics", "Experimentation"]
  }
];

const Writing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Writing</h1>
              <p className="text-lg text-muted-foreground animate-fade-in">
                Technical notes, experiment logs, and thoughts on machine learning, 
                data science, and building production ML systems.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      
                      <h2 className="text-2xl font-bold hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {post.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mt-12 text-center">
              <p className="text-muted-foreground">
                More articles coming soon. Subscribe to stay updated!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Writing;
