import { Button } from '@/components/ui/button';
import { Download, Mail, Github } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Calvin Deka</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
              Aspiring AI Applications Engineer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Building intelligent systems that solve real-world problems
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-green transition-smooth"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-smooth"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="transition-smooth"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://github.com/calvindeka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/calvin-kofi-deka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
