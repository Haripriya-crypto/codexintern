import { Trophy, Users, Target, Lightbulb } from "lucide-react";

export const WhyChoose = () => {
  const reasons = [
    {
      icon: Trophy,
      title: "Build Real Skills",
      description: "Not just coding - problem-solving, logic, creativity, and confidence that lasts a lifetime.",
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Trained instructors guide students through projects, providing personalized support every step.",
    },
    {
      icon: Target,
      title: "Self-Paced Learning",
      description: "Advance through our belt system at your own speed. No rushing, no falling behind.",
    },
    {
      icon: Lightbulb,
      title: "Fun & Engaging",
      description: "Kids stay motivated by building games they actually want to play and projects they're proud of.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Code Ninjas?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We make coding fun, accessible, and rewarding for kids of all skill levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform group-hover:shadow-[0_0_30px_hsl(263_70%_50%/0.3)]">
                <reason.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
