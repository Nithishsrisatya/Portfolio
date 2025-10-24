import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings } from "lucide-react";

const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Java", "Python"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "VS Code", "Postman"],
  },
  {
    category: "Operating Systems",
    items: ["Windows", "Linux"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <Settings className="h-8 w-8 text-accent" />
          <h2 className="text-4xl font-bold">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillSet, index) => (
            <Card 
              key={index} 
              className="border-border bg-card hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">{skillSet.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
