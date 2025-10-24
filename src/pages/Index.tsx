import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Korlapati Nithish Sri Satya. Built with passion.
        </p>
      </footer>
    </div>
  );
};

export default Index;
