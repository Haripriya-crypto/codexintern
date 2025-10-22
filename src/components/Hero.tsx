import { Button } from "@/components/ui/button";
import { Code2, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
          <Code2 className="h-8 w-8 text-primary" />
          <Sparkles className="h-6 w-6 text-secondary" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
          Turn Screen Time Into<br />Skill Time
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Where kids learn to code by building video games, apps, and more. Join thousands of young ninjas mastering the digital world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
            Start Your Journey
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
            Find a Location
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: "400+", label: "Locations" },
            { number: "50K+", label: "Students" },
            { number: "1M+", label: "Games Created" },
            { number: "96%", label: "Parent Satisfaction" },
          ].map((stat, idx) => (
            <div key={idx} className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
