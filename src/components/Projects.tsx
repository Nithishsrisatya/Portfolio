import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Efficient Timetable Organizer",
    year: "2025",
    description: "Automated university timetable generation with role-based login. Built using React.js, Node.js, Express, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    live: null,
  },
  {
    title: "MediBuddy Clone – Health Consultation App",
    year: "2025",
    description: "Full-stack healthcare app simulating MediBuddy. Includes secure authentication, doctor profiles, and appointment management.",
    tags: ["React", "Node.js", "MongoDB", "Authentication"],
    github: "#",
    live: "#",
  },
  {
    title: "Musical Instrument Website",
    year: "2024",
    description: "Interactive piano and drum kit app built using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="h-8 w-8 text-accent" />
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-border bg-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.year}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-foreground/80">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
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
                </div>
                <div className="flex gap-3 mt-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
