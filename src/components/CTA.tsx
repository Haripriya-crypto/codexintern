import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-1 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-xl" />
          <div className="relative bg-background rounded-3xl p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Coding Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find a Code Ninjas location near you and give your child the skills they need for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                Find a Location
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
