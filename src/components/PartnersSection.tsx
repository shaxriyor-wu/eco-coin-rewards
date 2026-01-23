import { motion } from "framer-motion";
import { Factory, Handshake, FileCheck, TrendingUp, Recycle, Truck } from "lucide-react";

const partners = [
  {
    name: "MaxPro Recycling",
    type: "Plastik qayta ishlash",
    description: "O'zbekistondagi eng yirik plastik qayta ishlash zavodi. Yiliga 50,000 tonna plastikni qayta ishlash quvvatiga ega.",
    benefits: "EcoCash orqali xom ashyo ta'minoti 40% ga oshdi",
    logo: "♻️",
  },
  {
    name: "GreenPaper UZ",
    type: "Qog'oz qayta ishlash",
    description: "Qog'oz va karton qayta ishlashga ixtisoslashgan kompaniya. 15 yillik tajriba.",
    benefits: "Sifatli qog'oz chiqindisi olish imkoniyati yaratildi",
    logo: "📄",
  },
  {
    name: "MetalTech Solutions",
    type: "Metall qayta ishlash",
    description: "Alyuminiy va boshqa metallarni qayta ishlash bo'yicha yetakchi kompaniya.",
    benefits: "Mayda metall chiqindilarini to'plash samaradorligi 3 barobar oshdi",
    logo: "🔩",
  },
  {
    name: "EcoGlass Tashkent",
    type: "Shisha qayta ishlash",
    description: "Shisha idishlarni qayta ishlash va yangi mahsulotlar ishlab chiqarish.",
    benefits: "Shahar bo'ylab shisha to'plash tarmog'i kengaydi",
    logo: "🫙",
  },
];

const partnershipBenefits = [
  {
    icon: Recycle,
    title: "Doimiy xom ashyo",
    description: "Qayta ishlash zavodlari uchun barqaror va sifatli chiqindi oqimi ta'minlanadi",
  },
  {
    icon: TrendingUp,
    title: "Xarajatlar kamayadi",
    description: "Chiqindi yig'ish va saralash xarajatlari 35% gacha kamayadi",
  },
  {
    icon: FileCheck,
    title: "Sifat nazorati",
    description: "AI tizimi chiqindilarni avtomatik saralaydi va sifatini tekshiradi",
  },
  {
    icon: Truck,
    title: "Logistika optimizatsiyasi",
    description: "GPS ma'lumotlari asosida eng samarali yetkazib berish yo'llari",
  },
];

const PartnersSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            🤝 Hamkorlar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Qayta Ishlash Kompaniyalari
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Biz O'zbekistonning yetakchi qayta ishlash kompaniyalari bilan strategik hamkorlik qilamiz. 
            Bu hamkorlik orqali chiqindilar qayta ishlanadi va iqtisodiyotga qaytariladi.
          </p>
        </motion.div>

        {/* Partners grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-eco hover:shadow-eco-lg transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center text-3xl">
                  {partner.logo}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">{partner.name}</h3>
                  <span className="text-sm text-primary font-medium">{partner.type}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {partner.description}
              </p>
              <div className="p-3 rounded-lg bg-eco-green-light border border-primary/20">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{partner.benefits}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Hamkorlik afzalliklari
            </h3>
            <p className="text-muted-foreground text-lg">
              Qayta ishlash kompaniyalari uchun EcoCash bilan ishlashning foydali tomonlari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contract info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-8 rounded-3xl bg-secondary border border-border max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Handshake className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Shartnoma shartlari</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">Minimal oylik hajm: 500 kg</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">Sifat kafolati: 95% tozalik</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">Yetkazib berish: 24 soat ichida</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-eco-gold" />
                <span className="text-foreground">To'lov: har hafta</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-eco-gold" />
                <span className="text-foreground">Shartnoma muddati: 1-3 yil</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-eco-gold" />
                <span className="text-foreground">Texnik yordam: 24/7</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
