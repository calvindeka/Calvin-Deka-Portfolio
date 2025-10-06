import { Card } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Teaching Assistant',
    company: 'Kenyon College',
    period: '2024 - Present',
    description: 'Supporting computer science education and student development',
    responsibilities: [
      'Assist students in understanding complex computer science concepts',
      'Provide one-on-one tutoring sessions for programming assignments',
      'Help debug code and explain algorithmic problem-solving approaches',
      'Contribute to creating a collaborative learning environment'
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Professional journey and roles
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-8 gradient-card border-border hover:border-primary/50 transition-smooth"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <Briefcase className="mr-3 h-6 w-6 text-primary" />
                      {exp.role}
                    </h3>
                    <p className="text-xl text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-muted-foreground mt-4 md:mt-0">
                    <Calendar className="mr-2 h-5 w-5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-lg">
                  {exp.description}
                </p>

                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, resIndex) => (
                    <li key={resIndex} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-3 mt-1">▸</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
