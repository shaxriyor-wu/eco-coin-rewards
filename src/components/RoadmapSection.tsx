import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Rocket, Globe, Smartphone, Building, Award } from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q1 2024",
    status: "completed",
    title: "Ishga tushirish",
    items: [
      "Toshkent shahrida beta versiya",
      "50 ta kuryer qo'shilishi",
      "AI modelini sinash",
      "Birinchi hamkorlik shartnomasi",
    ],
  },
  {
    quarter: "Q2 2024",
    status: "completed",
    title: "Kengayish",
    items: [
      "Samarqand va Buxoroda ishga tushirish",
      "500+ kuryer tarmog'i",
      "Mobil ilova (iOS va Android)",
      "EcoCoin to'lov tizimi integratsiyasi",
    ],
  },
  {
    quarter: "Q3 2024",
    status: "current",
    title: "O'sish",
    items: [
      "Barcha viloyat markazlarida",
      "2,500+ kuryer",
      "Davlat hamkorligi shartnomasi",
      "Korporativ mijozlar",
    ],
  },
  {
    quarter: "Q4 2024",
    status: "upcoming",
    title: "Optimallashtirish",
    items: [
      "AI aniqligini 99% ga oshirish",
      "Avtomatlashtirilgan saralash markazlari",
      "Blockchain integratsiyasi",
      "Xalqaro sertifikatlar",
    ],
  },
  {
    quarter: "2025",
    status: "upcoming",
    title: "Xalqaro kengayish",
    items: [
      "Qozog'iston va Qirg'izistonga chiqish",
      "1 million foydalanuvchi",
      "EcoCoin birjasi",
      "Karbon kreditlari savdosi",
    ],
  },
];

const achievements = [
  { icon: Award, label: "Eng yaxshi startup 2024", org: "IT Park" },
  { icon: Globe, label: "Ekologik innovatsiya", org: "UNDP" },
  { icon: Building, label: "Davlat granti", org: "Innovatsiya vazirligi" },
];

const RoadmapSection = () => {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
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
            🚀 Rivojlanish rejasi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Yo'l <span className="text-eco-gold">Xaritasi</span>
          </h2>
          <p className="text-xl text-background/80 max-w-3xl mx-auto">
            EcoCash loyihasining rivojlanish bosqichlari va kelajak rejalari
          </p>
        </motion.div>

        {/* Roadmap timeline */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-background/20 -translate-x-1/2" />

            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    item.status === "completed" 
                      ? "bg-eco-green" 
                      : item.status === "current" 
                      ? "bg-eco-gold" 
                      : "bg-background/30"
                  }`}>
                    {item.status === "completed" ? (
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                    ) : item.status === "current" ? (
                      <Clock className="w-4 h-4 text-eco-gold-dark" />
                    ) : (
                      <Circle className="w-4 h-4 text-background/50" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`p-6 rounded-2xl ${
                    item.status === "current" 
                      ? "bg-eco-gold text-eco-gold-dark" 
                      : "bg-background/10"
                  }`}>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                      item.status === "current" 
                        ? "bg-eco-gold-dark/20 text-eco-gold-dark" 
                        : "bg-background/20"
                    }`}>
                      {item.quarter}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {item.items.map((listItem, i) => (
                        <li key={i} className={`text-sm flex items-center gap-2 ${
                          index % 2 === 0 ? "md:justify-end md:flex-row-reverse" : ""
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            item.status === "current" ? "bg-eco-gold-dark" : "bg-eco-gold"
                          }`} />
                          <span className={item.status === "current" ? "" : "text-background/80"}>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Yutuqlar va mukofotlar</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background/10 text-center"
              >
                <achievement.icon className="w-10 h-10 mx-auto mb-3 text-eco-gold" />
                <h4 className="font-semibold mb-1">{achievement.label}</h4>
                <p className="text-sm text-background/60">{achievement.org}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;
