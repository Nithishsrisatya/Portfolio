import { Card, CardContent } from "@/components/ui/card";
import { Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Brain className="h-8 w-8 text-accent" />
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>
        
        <Card className="border-border bg-card shadow-card">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a 4th-year IT student at <span className="text-primary font-semibold">Aditya Engineering College</span>, 
              experienced in developing full-stack applications using React, Node.js, Express, and MongoDB.
              I'm passionate about front-end development and always aim to build interfaces that are both 
              functional and visually appealing. Currently exploring how design and usability influence user engagement.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
