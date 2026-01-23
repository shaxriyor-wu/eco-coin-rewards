import { motion } from "framer-motion";
import { Brain, Camera, Cpu, Database, Shield, Zap, Eye, BarChart3 } from "lucide-react";

const aiFeatures = [
  {
    icon: Eye,
    title: "Ob'ekt aniqlash",
    description: "AI 50+ turdagi chiqindilarni avtomatik taniydi: plastik, metall, qog'oz, shisha, organik va boshqalar",
  },
  {
    icon: BarChart3,
    title: "Hajm hisoblash",
    description: "Rasmdan chiqindi hajmini 95% aniqlik bilan hisoblaydi (kg va litr hisobida)",
  },
  {
    icon: Brain,
    title: "Sifat tahlili",
    description: "Chiqindining tozalik darajasi va qayta ishlashga yaroqliligini baholaydi",
  },
  {
    icon: Zap,
    title: "Real vaqt",
    description: "Tahlil 2-3 soniya ichida yakunlanadi - foydalanuvchi darhol natija oladi",
  },
];

const techStack = [
  { name: "TensorFlow", description: "Asosiy AI framework", icon: "🧠" },
  { name: "OpenCV", description: "Rasm tahlili", icon: "📷" },
  { name: "PostgreSQL", description: "Ma'lumotlar bazasi", icon: "💾" },
  { name: "Redis", description: "Kesh tizimi", icon: "⚡" },
  { name: "Kubernetes", description: "Infrastruktura", icon: "☁️" },
  { name: "Blockchain", description: "EcoCoin xavfsizligi", icon: "🔗" },
];

const securityFeatures = [
  "256-bit AES shifrlash",
  "GDPR va mahalliy qonunlarga muvofiqlik",
  "Ikki bosqichli autentifikatsiya",
  "Doimiy xavfsizlik auditi",
];

const TechnologySection = () => {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--eco-green))_25%,hsl(var(--eco-green))_50%,transparent_50%,transparent_75%,hsl(var(--eco-green))_75%)] bg-[length:60px_60px]" />
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-background/20 text-background text-sm font-medium mb-4">
            🤖 Texnologiya
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sun'iy Intellekt <span className="text-eco-gold">Kuchi</span>
          </h2>
          <p className="text-xl text-background/80 max-w-3xl mx-auto">
            EcoCash zamonaviy AI texnologiyalari asosida qurilgan. Bizning algoritmlar 
            chiqindilarni aniqlash va tahlil qilishda jahon standartlariga mos keladi.
          </p>
        </motion.div>

        {/* AI Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-background/10 border border-background/20 backdrop-blur-sm text-center hover:bg-background/15 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-eco-gold-dark" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-background/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How AI works visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">AI qanday ishlaydi?</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { icon: Camera, label: "Rasm yuklash", step: "1" },
              { icon: Cpu, label: "AI tahlil", step: "2" },
              { icon: Database, label: "Ma'lumot saqlash", step: "3" },
              { icon: BarChart3, label: "Natija", step: "4" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center">
                    <item.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-eco-gold text-eco-gold-dark flex items-center justify-center text-xs font-bold">
                    {item.step}
                  </div>
                </div>
                <span className="mt-3 font-medium">{item.label}</span>
                {index < 3 && (
                  <div className="hidden md:block absolute mt-10 ml-32">
                    <div className="w-8 h-0.5 bg-background/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack and security */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-background/10 border border-background/20"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Cpu className="w-6 h-6 text-eco-gold" />
              Texnologiya steki
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-background/10"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <div>
                    <div className="font-semibold">{tech.name}</div>
                    <div className="text-xs text-background/60">{tech.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-gradient-gold text-eco-gold-dark"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6" />
              Xavfsizlik
            </h3>
            <p className="mb-6 text-eco-gold-dark/80">
              Foydalanuvchilar ma'lumotlari va EcoCoin tranzaksiyalari eng yuqori 
              xavfsizlik standartlari bilan himoyalangan.
            </p>
            <div className="space-y-3">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-eco-gold-dark/20 flex items-center justify-center">
                    <Shield className="w-3 h-3" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
