import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <MessageSquare className="h-8 w-8 text-accent" />
          <h2 className="text-4xl font-bold">Get In Touch</h2>
        </div>

        <Card className="border-border bg-card shadow-glow">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:korlapatinithishsrisatya@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Mail className="h-6 w-6 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">korlapatinithishsrisatya@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+916305882467"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Phone className="h-6 w-6 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">+91 63058 82467</p>
                </div>
              </a>

              <Button
                variant="outline"
                className="flex items-center gap-3 p-6 h-auto border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/Nithishsrisatya" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-sm font-medium">View Profile</p>
                  </div>
                </a>
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-3 p-6 h-auto border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/nithish-srisatya-k-901098258/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-sm font-medium">Connect</p>
                  </div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
