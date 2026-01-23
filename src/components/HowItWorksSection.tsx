import { motion } from "framer-motion";
import { Camera, Brain, MapPin, Coins, CreditCard, Leaf } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Rasmga oling",
    description: "Ahlat yoki chiqindi ko'rsangiz, uni smartfoningiz bilan rasmga oling",
    color: "bg-gradient-hero",
  },
  {
    icon: Brain,
    title: "AI Tahlil",
    description: "Sun'iy intellekt rasmni tahlil qilib, chiqindi miqdorini aniqlaydi",
    color: "bg-eco-sky",
  },
  {
    icon: MapPin,
    title: "Joylashuv",
    description: "GPS orqali aniq joylashuv saqlanadi va xodimlar jo'natiladi",
    color: "bg-eco-earth",
  },
  {
    icon: Coins,
    title: "EcoCoin oling",
    description: "Chiqindi miqdoriga qarab EcoCoin mukofotini qo'lga kiriting",
    color: "bg-gradient-gold",
  },
  {
    icon: CreditCard,
    title: "To'lovga ishlating",
    description: "EcoCoinlarni kommunal to'lovlar uchun sarflang",
    color: "bg-primary",
  },
  {
    icon: Leaf,
    title: "Ekologiya tozalanadi",
    description: "Hammamiz g'olib - siz ham, tabiat ham!",
    color: "bg-eco-green",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--eco-green-light))_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,hsl(var(--eco-gold-light))_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Qanday ishlaydi?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Oddiy 6 ta qadam
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ekologiyani tozalash va pul ishlash hech qachon bunday oson bo'lmagan!
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card shadow-eco border border-border hover:shadow-eco-lg transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-0" />
      </div>
    </section>
  );
};

export default HowItWorksSection;
