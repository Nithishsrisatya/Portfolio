import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const certifications = [
  { name: "Java – Certiport IT Specialist", issuer: "Certiport" },
  { name: "RHCSA – Red Hat Certified System Administrator", issuer: "Red Hat" },
  { name: "C++ Essentials", issuer: "Cisco Networking Academy" },
  { name: "Python Essentials", issuer: "Cisco Networking Academy" },
  { name: "NDG Linux Unhatched", issuer: "Cisco Networking Academy" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <Award className="h-8 w-8 text-accent" />
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="border-border bg-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                <Badge variant="outline" className="border-accent text-accent">
                  {cert.issuer}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
