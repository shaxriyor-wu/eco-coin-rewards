import { motion } from "framer-motion";
import { TreePine, Droplets, Wind, Fish, Mountain, Flower2 } from "lucide-react";

const impactData = [
  {
    icon: TreePine,
    value: "12,500",
    unit: "ta",
    label: "Daraxt saqlandi",
    description: "Qog'oz qayta ishlash orqali yangi daraxtlar kesilishining oldi olindi",
    color: "text-eco-green",
  },
  {
    icon: Droplets,
    value: "2.8M",
    unit: "litr",
    label: "Suv tejaladi",
    description: "Plastik qayta ishlash orqali toza suv resurslari himoya qilindi",
    color: "text-eco-sky",
  },
  {
    icon: Wind,
    value: "850",
    unit: "tonna",
    label: "CO₂ kamaydi",
    description: "Chiqindilarni to'g'ri boshqarish orqali atmosferaga chiqarilmadi",
    color: "text-muted-foreground",
  },
  {
    icon: Fish,
    value: "15,000",
    unit: "kg",
    label: "Plastik to'plandi",
    description: "Daryo va ko'llarga tushishi mumkin bo'lgan plastik chiqindilar",
    color: "text-eco-sky",
  },
  {
    icon: Mountain,
    value: "340",
    unit: "gektar",
    label: "Yer tozalandi",
    description: "Noqonuniy axlat tashlash joylaridan tozalangan hudud",
    color: "text-eco-earth",
  },
  {
    icon: Flower2,
    value: "98%",
    unit: "",
    label: "Qayta ishlanadi",
    description: "To'plangan chiqindilarning deyarli barchasi qayta ishlanadi",
    color: "text-eco-gold",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-24 bg-eco-green-dark text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-eco-gold blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-eco-green-light blur-3xl" />
        </div>
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
            🌍 Ekologik Ta'sir
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tabiatga <span className="text-eco-gold">Haqiqiy Foyda</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Har bir to'plangan ahlat - bu sayyoramiz uchun qilingan yaxshilik.
            Bir yilda biz qanday natijalarga erishdik:
          </p>
        </motion.div>

        {/* Impact grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-extrabold">{item.value}</span>
                    <span className="text-lg text-primary-foreground/70">{item.unit}</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{item.label}</h4>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional impact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-3xl bg-primary-foreground/10 border border-primary-foreground/20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            🎯 2026 yil maqsadlarimiz
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-eco-gold mb-2">5M kg</div>
              <p className="text-primary-foreground/80">Chiqindi to'plash</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-eco-gold mb-2">100K</div>
              <p className="text-primary-foreground/80">Faol foydalanuvchi</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-eco-gold mb-2">14 ta</div>
              <p className="text-primary-foreground/80">Viloyat qamrovi</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
