import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-eco border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">EcoCash</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Bosh sahifa
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Qanday ishlaydi
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Afzalliklar
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Bog'lanish
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-hero text-primary-foreground shadow-glow hover:opacity-90 px-6">
              Boshlash
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-6 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              <a href="#" className="text-foreground/80 hover:text-foreground font-medium py-2">
                Bosh sahifa
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground font-medium py-2">
                Qanday ishlaydi
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground font-medium py-2">
                Afzalliklar
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground font-medium py-2">
                Bog'lanish
              </a>
              <Button className="bg-gradient-hero text-primary-foreground mt-4 w-full">
                Boshlash
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
