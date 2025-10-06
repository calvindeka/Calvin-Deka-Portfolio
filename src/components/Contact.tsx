import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'deka1@kenyon.edu',
    href: 'mailto:deka1@kenyon.edu',
    color: 'text-primary'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'calvin-kofi-deka',
    href: 'https://www.linkedin.com/in/calvin-kofi-deka',
    color: 'text-blue-500'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'calvindeka',
    href: 'https://github.com/calvindeka',
    color: 'text-purple-500'
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Let's connect and discuss opportunities
          </p>

          <Card className="p-8 md:p-12 gradient-card border-border text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6">
                I'm actively seeking opportunities to contribute to innovative AI projects
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you have a question, want to discuss a project, or just want to say hi, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="p-6 bg-secondary/50 border-border hover:border-primary/50 transition-smooth cursor-pointer">
                        <Icon className={`h-8 w-8 mx-auto mb-3 ${method.color} group-hover:scale-110 transition-smooth`} />
                        <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                        <p className="text-sm font-medium break-all">{method.value}</p>
                      </Card>
                    </a>
                  );
                })}
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-green transition-smooth"
                onClick={() => window.location.href = 'mailto:deka1@kenyon.edu'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
