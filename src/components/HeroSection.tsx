import { motion } from "framer-motion";
import { Camera, MapPin, Coins, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-card">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-eco-green-light opacity-60 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-eco-gold-light opacity-40 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-eco-green/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
          >
            <Sparkles className="w-4 h-4 text-eco-gold" />
            <span className="text-sm font-medium text-secondary-foreground">
              Ekologiya + Texnologiya = Kelajak
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-gradient-hero">EcoCash</span>
            <br />
            <span className="text-foreground">Toza Muhit, Real Foyda</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Ahlatni rasmga oling, AI tahlil qilsin, 
            <span className="text-eco-gold font-semibold"> EcoCoin </span> 
            yutib oling va kommunal to'lovlaringizni qoplang!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-gradient-hero text-primary-foreground shadow-glow hover:opacity-90 transition-all px-8 py-6 text-lg rounded-xl">
              Boshlash
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-secondary px-8 py-6 text-lg rounded-xl">
              Batafsil o'rganish
            </Button>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {[
              { icon: Camera, text: "AI Tahlil" },
              { icon: MapPin, text: "Joylashuv" },
              { icon: Coins, text: "EcoCoin" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card shadow-eco border border-border"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-card-foreground">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 hidden lg:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-gold shadow-gold flex items-center justify-center">
            <Coins className="w-8 h-8 text-eco-gold-dark" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-10 hidden lg:block"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-hero shadow-glow flex items-center justify-center">
            <Camera className="w-10 h-10 text-primary-foreground" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
