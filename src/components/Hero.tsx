import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import heroBackground from "@/assets/hero-background.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <Avatar className="w-40 h-40 mx-auto border-4 border-primary shadow-2xl">
          <AvatarImage src={profilePhoto} alt="Lavanya Yogendra Lahane" />
          <AvatarFallback className="text-4xl bg-primary text-primary-foreground">LL</AvatarFallback>
        </Avatar>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Lavanya Yogendra Lahane
          </h1>
          <p className="text-xl md:text-2xl font-medium text-accent">
            Quantitative Researcher
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Aspiring Quantitative Researcher with expertise in statistical modelling, time series forecasting, 
          machine and reinforcement learning. Proficient in Python, with hands-on experience in derivatives, 
          portfolio optimization, and algo-trading strategies.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Button 
            variant="default"
            size="lg"
            className="gap-2"
            asChild
          >
            <a href="#contact">
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="gap-2"
            asChild
          >
            <a href="https://github.com/lahanelavanya" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="gap-2"
            asChild
          >
            <a href="https://linkedin.com/in/Lavanyaiitrpr" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
