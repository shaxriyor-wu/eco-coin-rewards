import { motion } from "framer-motion";
import { Coins, Zap, CreditCard, Gift, ShoppingCart, Home, Droplets, Flame } from "lucide-react";

const earnMethods = [
  { action: "1 kg plastik", coins: "50 EcoCoin", icon: "🥤" },
  { action: "1 kg qog'oz", coins: "30 EcoCoin", icon: "📄" },
  { action: "1 kg metall", coins: "100 EcoCoin", icon: "🔩" },
  { action: "1 kg shisha", coins: "40 EcoCoin", icon: "🫙" },
  { action: "1 kg organik", coins: "20 EcoCoin", icon: "🍂" },
  { action: "Elektron chiqindi", coins: "200 EcoCoin", icon: "📱" },
];

const spendOptions = [
  {
    icon: Zap,
    title: "Elektr energiya",
    description: "Elektr to'lovlarini EcoCoin bilan qoplang",
    rate: "1 EcoCoin = 10 so'm",
  },
  {
    icon: Flame,
    title: "Gaz to'lovi",
    description: "Gaz xizmatlari uchun to'lang",
    rate: "1 EcoCoin = 10 so'm",
  },
  {
    icon: Droplets,
    title: "Suv to'lovi",
    description: "Suv xizmatlari uchun to'lang",
    rate: "1 EcoCoin = 10 so'm",
  },
  {
    icon: Home,
    title: "Uy-joy xizmatlari",
    description: "Kommunal xizmatlar uchun to'lang",
    rate: "1 EcoCoin = 10 so'm",
  },
  {
    icon: ShoppingCart,
    title: "Hamkor do'konlar",
    description: "Ekologik mahsulotlar sotib oling",
    rate: "Chegirmalar mavjud",
  },
  {
    icon: Gift,
    title: "Sovg'alar",
    description: "EcoCoinlarni sovg'a sertifikatlariga aylantiring",
    rate: "Maxsus takliflar",
  },
];

const EcoCoinSection = () => {
  return (
    <section className="py-24 bg-gradient-card relative overflow-hidden">
      {/* Gold decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-eco-gold/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-eco-gold/15 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-gold text-eco-gold-dark text-sm font-semibold mb-4">
            💰 EcoCoin
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient-gold">EcoCoin</span> Valyutasi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            EcoCoin - bu platformaning ichki valyutasi. Ahlat to'plash orqali EcoCoin ishlang 
            va uni real to'lovlarga sarflang!
          </p>
        </motion.div>

        {/* Two columns: Earn and Spend */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Earn section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-3xl bg-card border-2 border-eco-gold shadow-gold h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <Coins className="w-6 h-6 text-eco-gold-dark" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground">EcoCoin ishlash</h3>
                  <p className="text-muted-foreground text-sm">Ahlat turiga qarab</p>
                </div>
              </div>

              <div className="space-y-4">
                {earnMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{method.icon}</span>
                      <span className="font-medium text-foreground">{method.action}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-eco-gold-light text-eco-gold-dark font-semibold text-sm">
                      {method.coins}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-eco-green-light border border-primary/30">
                <p className="text-sm text-primary font-medium text-center">
                  💡 Ko'p to'plasangiz, ko'p ishlaysiz! Bonus tizimi mavjud.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Spend section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-3xl bg-gradient-hero text-primary-foreground h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">EcoCoin sarflash</h3>
                  <p className="text-primary-foreground/70 text-sm">Real to'lovlarga</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {spendOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-all"
                  >
                    <option.icon className="w-6 h-6 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{option.title}</h4>
                    <p className="text-primary-foreground/70 text-xs mb-2">{option.description}</p>
                    <span className="text-xs text-eco-gold font-medium">{option.rate}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-primary-foreground/10">
                <p className="text-sm text-center">
                  🎉 Har oy yangi hamkorlar qo'shilmoqda!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* EcoCoin value explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-card border border-border text-center">
            <div className="text-3xl font-bold text-gradient-gold mb-2">1 EcoCoin</div>
            <div className="text-muted-foreground">=</div>
            <div className="text-2xl font-bold text-foreground mt-2">10 so'm</div>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border text-center">
            <div className="text-3xl font-bold text-gradient-gold mb-2">100 EcoCoin</div>
            <div className="text-muted-foreground">=</div>
            <div className="text-2xl font-bold text-foreground mt-2">1,000 so'm</div>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border text-center">
            <div className="text-3xl font-bold text-gradient-gold mb-2">10,000 EcoCoin</div>
            <div className="text-muted-foreground">=</div>
            <div className="text-2xl font-bold text-foreground mt-2">100,000 so'm</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcoCoinSection;
