import { motion } from "framer-motion";

const stats = [
  { value: "50,000+", label: "Faol foydalanuvchilar", suffix: "" },
  { value: "1.2M", label: "To'plangan ahlat (kg)", suffix: "kg" },
  { value: "500K+", label: "Berilgan EcoCoin", suffix: "" },
  { value: "85%", label: "Foydalanuvchilar roziligi", suffix: "" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-eco-green blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-eco-gold blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Raqamlarda <span className="text-eco-gold">EcoCash</span>
          </h2>
          <p className="text-background/70 text-lg">
            Bir yil ichida erishilgan natijalar
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-background/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
