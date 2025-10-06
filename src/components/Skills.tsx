import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Brain, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL']
  },
  {
    title: 'AI/ML Technologies',
    icon: Brain,
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLO', 'OpenAI API', 'Scikit-learn']
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: ['React', 'Node.js', 'FastAPI', 'Docker', 'REST APIs', 'PostgreSQL']
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'Linux', 'MariaDB', 'CUDA', 'Jupyter', 'VS Code']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 gradient-card border-border hover:border-primary/50 transition-smooth"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="bg-secondary hover:bg-primary/20 border-primary/30 text-foreground px-4 py-2 text-sm transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
