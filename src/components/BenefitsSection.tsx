import { motion } from "framer-motion";
import { Users, Building, Leaf, TrendingUp, Shield, Zap } from "lucide-react";

const userBenefits = [
  {
    icon: Zap,
    title: "Tez va oson",
    description: "Bir necha soniyada rasm oling va mukofot yutib oling",
  },
  {
    icon: TrendingUp,
    title: "Daromad manbayi",
    description: "Kunlik faoliyat orqali doimiy EcoCoin to'plang",
  },
  {
    icon: Shield,
    title: "To'lovlarni qoplash",
    description: "Kommunal xizmatlar uchun to'lovlaringizni kamaytiring",
  },
];

const platformBenefits = [
  {
    icon: Leaf,
    title: "Toza muhit",
    description: "Shaharlar va qishloqlar ahlatdan tozalanadi",
  },
  {
    icon: Building,
    title: "Samarali boshqaruv",
    description: "Xodimlar to'g'ri joylarga tezda yuboriladi",
  },
  {
    icon: Users,
    title: "Jamiyat birligi",
    description: "Odamlar ekologik mas'uliyatni his qiladi",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-gradient-card relative overflow-hidden">
      <div className="container px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-gold text-eco-gold-dark text-sm font-semibold mb-4">
            Win-Win Yechim
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hamma g'olib chiqadi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Foydalanuvchilar daromad topadi, ekologiya tozalanadi - hammasi bir platformada!
          </p>
        </motion.div>

        {/* Two column benefits */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* User benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-3xl bg-gradient-hero text-primary-foreground shadow-glow">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Foydalanuvchilar uchun</h3>
              </div>

              <div className="space-y-6">
                {userBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-primary-foreground/80">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Platform benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-3xl bg-card border-2 border-eco-gold shadow-gold">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-eco-gold-dark" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Ekologiya uchun</h3>
              </div>

              <div className="space-y-6">
                {platformBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-card-foreground mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
