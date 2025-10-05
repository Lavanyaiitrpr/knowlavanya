import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      
      <footer className="py-8 px-6 bg-primary text-primary-foreground text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Lavanya Lahane. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
