import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Intern",
    company: "Main Flow Services",
    duration: "Jun 2024 – Aug 2024",
    highlights: "Developed front-end modules & optimized REST APIs",
  },
  {
    role: "In-House Intern",
    company: "Aditya Engineering College",
    duration: "May 2025 – Jul 2025",
    highlights: 'Built "Efficient Timetable Organizer" improving scheduling efficiency by 40%',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="h-8 w-8 text-accent" />
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="border-border bg-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{exp.role}</CardTitle>
                <CardDescription className="text-lg">{exp.company}</CardDescription>
                <Badge variant="outline" className="w-fit mt-2 border-accent text-accent">
                  {exp.duration}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{exp.highlights}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
