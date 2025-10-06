import { Card } from '@/components/ui/card';
import { GraduationCap, Target, Lightbulb } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Passionate about AI and building the future
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 gradient-card border-border hover:border-primary/50 transition-smooth">
              <GraduationCap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">
                Computer Science Student at Kenyon College '28
              </p>
            </Card>

            <Card className="p-6 gradient-card border-border hover:border-primary/50 transition-smooth">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Goal</h3>
              <p className="text-muted-foreground">
                Seeking Summer 2026 AI Applications Internship at NVIDIA
              </p>
            </Card>

            <Card className="p-6 gradient-card border-border hover:border-primary/50 transition-smooth">
              <Lightbulb className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-muted-foreground">
                Building intelligent systems that solve real-world problems
              </p>
            </Card>
          </div>

          <Card className="p-8 gradient-card border-border">
            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              I'm driven by a passion for artificial intelligence and its potential to transform how we solve complex problems. 
              My journey in computer science has been focused on developing practical AI applications that make a real impact.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From building intelligent tutoring systems to implementing cutting-edge computer vision solutions, 
              I thrive on challenges that push the boundaries of what's possible with AI and machine learning. 
              My goal is to contribute to groundbreaking projects that shape the future of technology.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
