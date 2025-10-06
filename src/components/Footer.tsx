import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                Built with <span className="text-primary">❤️</span> by Calvin Deka
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                © {currentYear} All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/calvindeka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/calvin-kofi-deka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:deka1@kenyon.edu"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Developed and deployed professional portfolio website • 95+ Google PageSpeed score
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
