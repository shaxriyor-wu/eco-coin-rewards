import { motion } from "framer-motion";
import { Truck, Clock, MapPin, Wallet, Shield, Star, Users, Route } from "lucide-react";

const courierBenefits = [
  {
    icon: Wallet,
    title: "Barqaror daromad",
    description: "Oyiga 3-8 million so'm gacha daromad imkoniyati. Har bir to'plangan kilogram uchun to'lov.",
    highlight: "O'rtacha: 5M so'm/oy",
  },
  {
    icon: Clock,
    title: "Erkin ish grafigi",
    description: "O'zingizga qulay vaqtda ishlang. Hech qanday qat'iy jadval yo'q.",
    highlight: "24/7 ishlash imkoni",
  },
  {
    icon: MapPin,
    title: "Yaqin hududlar",
    description: "AI tizimi sizga eng yaqin va qulay manzillarni taklif qiladi.",
    highlight: "GPS optimizatsiya",
  },
  {
    icon: Shield,
    title: "Sug'urta va himoya",
    description: "Barcha kuryerlar sug'urtalangan. Tibbiy yordam va jihozlar ta'minlanadi.",
    highlight: "To'liq sug'urta",
  },
];

const courierStats = [
  { value: "2,500+", label: "Faol kuryerlar" },
  { value: "15 daqiqa", label: "O'rtacha javob vaqti" },
  { value: "4.8/5", label: "Kuryer reytingi" },
  { value: "98%", label: "Muvaffaqiyatli yig'ish" },
];

const workProcess = [
  {
    step: "1",
    title: "Bildirishnoma olish",
    description: "Foydalanuvchi ahlat rasmini yuklashi bilan, yaqin atrofdagi kuryerlarga bildirishnoma keladi",
  },
  {
    step: "2",
    title: "Buyurtmani qabul qilish",
    description: "Kuryer o'ziga qulay buyurtmani tanlaydi va qabul qiladi",
  },
  {
    step: "3",
    title: "Manzilga borish",
    description: "GPS navigatsiya orqali eng qisqa yo'l ko'rsatiladi",
  },
  {
    step: "4",
    title: "Chiqindini yig'ish",
    description: "Ahlat yig'iladi, tortiladi va ilovada tasdiqlanadi",
  },
  {
    step: "5",
    title: "Qayta ishlash punktiga",
    description: "Chiqindilar saralanib, qayta ishlash zavodiga yetkaziladi",
  },
  {
    step: "6",
    title: "To'lov olish",
    description: "Ish yakunlangach, kuryer hisobiga pul o'tkaziladi",
  },
];

const CouriersSection = () => {
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
            🚚 Ahlat Kuryerlari
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            EcoCash Kuryerlari Tarmog'i
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Minglab kuryerlar butun O'zbekiston bo'ylab ahlat yig'ish va qayta ishlash punktlariga 
            yetkazish bilan shug'ullanadi. Har bir kuryer - ekologik qahramon!
          </p>
        </motion.div>

        {/* Courier stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {courierStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-eco text-center"
            >
              <div className="text-3xl font-extrabold text-gradient-hero mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {courierBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-eco hover:shadow-eco-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-3">{benefit.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-eco-gold-light text-eco-gold-dark text-sm font-semibold">
                    <Star className="w-4 h-4" />
                    {benefit.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Work process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Kuryer ish jarayoni
            </h3>
            <p className="text-muted-foreground text-lg">
              Sodda va tushunarli jarayon - har kim kuryer bo'lishi mumkin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-card border border-border"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {process.step}
                </div>
                <h4 className="font-semibold text-lg text-card-foreground mb-2 mt-2">
                  {process.title}
                </h4>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-hero text-primary-foreground max-w-3xl mx-auto text-center"
        >
          <Users className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Kuryer bo'lishni xohlaysizmi?</h3>
          <p className="text-primary-foreground/80 mb-6">
            Hoziroq ro'yxatdan o'ting va ekologiyani tozalashdan daromad toping!
          </p>
          <button className="px-8 py-3 rounded-xl bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-all">
            Kuryer sifatida ro'yxatdan o'tish
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CouriersSection;
