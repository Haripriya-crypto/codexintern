import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Code, Cpu, Blocks } from "lucide-react";
import kidsCoding from "@/assets/kids-coding.jpg";
import robotics from "@/assets/robotics.jpg";

export const Programs = () => {
  const programs = [
    {
      icon: Gamepad2,
      title: "CREATE",
      description: "Build video games from scratch using block-based coding and progress to real programming languages.",
      features: ["Ages 7-14", "Game Development", "Progress at Your Pace"],
      color: "from-primary to-primary/80",
    },
    {
      icon: Code,
      title: "CODE",
      description: "Master JavaScript, Python, and other languages while creating real-world applications and websites.",
      features: ["Ages 11+", "Text-Based Coding", "Industry Tools"],
      color: "from-secondary to-secondary/80",
    },
    {
      icon: Cpu,
      title: "ROBOTICS",
      description: "Design, build, and program robots. Learn engineering principles through hands-on challenges.",
      features: ["Ages 8-14", "Physical Computing", "STEM Skills"],
      color: "from-accent to-accent/80",
    },
    {
      icon: Blocks,
      title: "CAMPS",
      description: "Immersive week-long experiences diving deep into game design, app development, and more.",
      features: ["All Ages", "Seasonal Programs", "Intensive Learning"],
      color: "from-primary via-secondary to-accent",
    },
  ];

  return (
    <section className="py-24 px-4 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Programs
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From visual coding to text-based programming, we have the perfect path for every skill level.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {programs.map((program, idx) => (
          <Card 
            key={idx}
            className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(263_70%_50%/0.2)] group"
          >
            <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <program.icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
            <p className="text-muted-foreground mb-4">{program.description}</p>
            <div className="space-y-2 mb-6">
              {program.features.map((feature, i) => (
                <div key={i} className="flex items-center text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                  {feature}
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full">
              Learn More
            </Button>
          </Card>
        ))}
      </div>

      {/* Featured Images */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={kidsCoding} alt="Kids learning to code" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={robotics} alt="Robotics program" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};
