import { Button } from "@/components/ui/button";
import { Code2, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Code Ninjas
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">
              Programs
            </a>
            <a href="#why" className="text-foreground hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#locations" className="text-foreground hover:text-primary transition-colors">
              Locations
            </a>
            <Button variant="hero">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#programs" className="block text-foreground hover:text-primary transition-colors">
              Programs
            </a>
            <a href="#why" className="block text-foreground hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#locations" className="block text-foreground hover:text-primary transition-colors">
              Locations
            </a>
            <Button variant="hero" className="w-full">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
};
