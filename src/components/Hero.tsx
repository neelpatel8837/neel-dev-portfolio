import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-start/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 glass-card rounded-full">
              <p className="text-sm font-medium gradient-text">Available for new opportunities</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Neel</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              Full Stack Developer
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              I build fast, modern and scalable web applications with cutting-edge technologies.
            </p>

            <div className="flex flex-wrap gap-4">
            <a href="/Neel_Patel_Resume_WD.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
            <a href="mailto:patelneel0742@gmail.com">
              <Button size="lg" variant="outline" className="glass-card border-2 hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-in-up lg:block" style={{ animationDelay: "3s" }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Developer workspace illustration" 
                className="w-full h-auto rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
