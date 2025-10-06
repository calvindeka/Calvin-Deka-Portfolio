import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Intelligent Tutoring System',
    description: 'Full-stack AI application providing contextual educational feedback',
    image: '/placeholder.svg',
    tags: ['Python', 'OpenAI API', 'FastAPI', 'React', 'PostgreSQL'],
    achievements: [
      'Developed full-stack AI application using OpenAI API for contextual feedback',
      'Engineered custom markup language for interactive educational content',
      'Built scalable backend supporting 50+ concurrent users with real-time features'
    ],
    github: '#',
    demo: '#'
  },
  {
    title: 'Real-Time Computer Vision Object Detection',
    description: 'High-performance object detection system with GPU acceleration',
    image: '/placeholder.svg',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'CUDA', 'PyTorch'],
    achievements: [
      'Implemented YOLOv8-based object detection achieving 35 FPS with GPU acceleration',
      'Optimized inference pipeline reducing latency by 45% through model quantization',
      'Developed performance benchmarking suite comparing CPU/GPU execution'
    ],
    github: '#',
    demo: '#'
  },
  {
    title: 'Custom Neural Network Development',
    description: 'CNN implementation from scratch with advanced optimization',
    image: '/placeholder.svg',
    tags: ['Python', 'PyTorch', 'NumPy', 'Data Augmentation', 'ML'],
    achievements: [
      'Designed and trained CNN from scratch achieving 98.5% accuracy on MNIST',
      'Implemented data augmentation pipeline improving model robustness by 18%',
      'Created visualization tools for model interpretability and performance analysis'
    ],
    github: '#',
    demo: '#'
  },
  {
    title: 'Cloud-Deployed AI Model Microservice',
    description: 'Scalable REST API for AI model inference with containerization',
    image: '/placeholder.svg',
    tags: ['FastAPI', 'Docker', 'REST API', 'Cloud', 'Monitoring'],
    achievements: [
      'Deployed scalable REST API handling 100+ concurrent requests with FastAPI',
      'Containerized application using Docker with health monitoring and logging',
      'Implemented batch processing reducing overhead by 65% through parallelization'
    ],
    github: '#',
    demo: '#'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Showcasing AI applications and innovative solutions
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden gradient-card border-border hover:border-primary/50 transition-smooth group"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/50 hover:bg-primary/10"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
