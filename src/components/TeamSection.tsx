import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Yarasheva Mashxura",
    role: "1-IDUM",
    avatar: "👩‍💼",
  },
  {
    name: "Ro'zibayeva Nigina",
    role: "1-IDUM",
    avatar: "👩‍💻",
  },
  {
    name: "Sultonova Vasila",
    role: "1-IDUM",
    avatar: "👩‍💼",
  },
  {
    name: "Olimov Umrbek",
    role: "1-IDUM",
    avatar: "👨‍💼",
  },
  {
    name: "Matchonov Kamron",
    role: "1-IDUM",
    avatar: "👨‍💼",
  },
  {
    name: "To'xtaboyeva Zuxra",
    role: "1-IDUM",
    avatar: "👩‍💼",
  },
];

const advisors = [
  { name: "Prof. Alisher Usmanov", role: "Ekologiya maslahatchi", org: "O'zbekiston FA" },
  { name: "Botir Rahmonov", role: "Biznes maslahatchi", org: "IT Park" },
  { name: "Sarah Johnson", role: "Xalqaro rivojlanish", org: "UNDP" },
];

const TeamSection = () => {
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
            👥 Jamoa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Bizning <span className="text-gradient-hero">Jamoa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            EcoCash loyihasi ortida turgan professional va ishtiyoqli jamoa
          </p>
        </motion.div>

        {/* Team members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-eco hover:shadow-eco-lg transition-all text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4 text-5xl">
                {member.avatar}
              </div>
              <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{member.role}</p>

              <div className="flex justify-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Maslahatchilar kengashi</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-secondary text-center"
              >
                <h4 className="font-semibold text-foreground mb-1">{advisor.name}</h4>
                <p className="text-primary text-sm font-medium mb-1">{advisor.role}</p>
                <p className="text-muted-foreground text-xs">{advisor.org}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-card border border-border max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient-hero mb-2">2026</div>
              <p className="text-muted-foreground">Tashkil etilgan</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient-hero mb-2">45+</div>
              <p className="text-muted-foreground">Jamoa a'zolari</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient-hero mb-2">$2M</div>
              <p className="text-muted-foreground">Jalb qilingan sarmoya</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
