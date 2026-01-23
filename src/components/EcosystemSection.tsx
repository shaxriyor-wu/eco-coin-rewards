import { motion } from "framer-motion";
import { 
  Users, 
  Truck, 
  Factory, 
  Building2, 
  Smartphone, 
  Coins, 
  ArrowRight,
  Recycle,
  Leaf
} from "lucide-react";

const ecosystemParties = [
  {
    icon: Users,
    title: "Foydalanuvchilar",
    subtitle: "Oddiy fuqarolar",
    description: "Ahlat rasmini yuklaydi, EcoCoin oladi, kommunal to'lovlarini qoplaydi",
    color: "bg-gradient-hero",
    benefits: ["Daromad olish", "Kommunal to'lovlar", "Ekologik hissa"],
  },
  {
    icon: Truck,
    title: "Kuryerlar",
    subtitle: "Ahlat yig'uvchilar",
    description: "Ahlatni manzildan olib, qayta ishlash zavodlariga yetkazadi",
    color: "bg-eco-sky",
    benefits: ["Doimiy ish", "Moslashuvchan grafik", "Yaxshi maosh"],
  },
  {
    icon: Factory,
    title: "Zavodlar",
    subtitle: "Qayta ishlash kompaniyalari",
    description: "Chiqindilarni qayta ishlab, yangi mahsulotlar ishlab chiqaradi",
    color: "bg-eco-earth",
    benefits: ["Doimiy xom ashyo", "Sifatli chiqindi", "Arzon logistika"],
  },
  {
    icon: Building2,
    title: "Davlat",
    subtitle: "Hokimiyat va tashkilotlar",
    description: "Shahar tozaligini nazorat qiladi, subsidiyalar ajratadi",
    color: "bg-primary",
    benefits: ["Toza shaharlar", "Ekologik maqsadlar", "Fuqarolar roziligi"],
  },
];

const flowSteps = [
  { from: "Foydalanuvchi", action: "Rasm yuklaydi", to: "Platforma" },
  { from: "Platforma", action: "AI tahlil + joylashuv", to: "Kuryer" },
  { from: "Kuryer", action: "Chiqindini olib ketadi", to: "Zavod" },
  { from: "Zavod", action: "Qayta ishlaydi", to: "Yangi mahsulot" },
  { from: "Platforma", action: "EcoCoin beradi", to: "Foydalanuvchi" },
];

const EcosystemSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-border" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-border" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-border" />
      </div>

      <div className="container px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            🔄 Ekotizim
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            To'liq <span className="text-gradient-hero">Ekotizim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            EcoCash bir necha tomonlarni birlashtiruvchi yagona platforma. 
            Har bir ishtirokchi o'z foydasi va hissasiga ega.
          </p>
        </motion.div>

        {/* Ecosystem parties */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {ecosystemParties.map((party, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-eco hover:shadow-eco-lg transition-all"
            >
              <div className={`w-14 h-14 rounded-xl ${party.color} flex items-center justify-center mb-4`}>
                <party.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">{party.title}</h3>
              <p className="text-sm text-primary font-medium mb-3">{party.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-4">{party.description}</p>
              <div className="space-y-2">
                {party.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-eco-gold" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-10">
            Qiymat oqimi
          </h3>

          <div className="space-y-4">
            {flowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary"
              >
                <div className="w-24 text-right">
                  <span className="font-semibold text-foreground text-sm">{step.from}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1 text-center px-4 py-2 rounded-lg bg-card border border-border">
                  <span className="text-muted-foreground text-sm">{step.action}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="w-24">
                  <span className="font-semibold text-foreground text-sm">{step.to}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Central platform visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-hero text-primary-foreground max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Smartphone className="w-8 h-8" />
            <Coins className="w-8 h-8 text-eco-gold" />
            <Recycle className="w-8 h-8" />
            <Leaf className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-4">EcoCash - Markaziy platforma</h3>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Barcha ishtirokchilarni birlashtiradi, tranzaksiyalarni boshqaradi, 
            AI tahlilini amalga oshiradi va EcoCoin ekotizimini ishlaydi
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;
