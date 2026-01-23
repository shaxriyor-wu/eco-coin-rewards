import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">EcoCash</span>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md">
              EcoCash - bu ekologik muammolarni hal qilish va foydalanuvchilarga real foyda keltiruvchi innovatsion platforma. 
              Birgalikda toza kelajak yaratamiz!
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Havolalar</h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-eco-gold transition-colors">Bosh sahifa</a></li>
              <li><a href="#" className="hover:text-eco-gold transition-colors">Qanday ishlaydi</a></li>
              <li><a href="#" className="hover:text-eco-gold transition-colors">Afzalliklar</a></li>
              <li><a href="#" className="hover:text-eco-gold transition-colors">Bog'lanish</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Bog'lanish</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-eco-gold" />
                <span>info@ecocash.uz</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-eco-gold" />
                <span>+998 71 123 45 67</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-eco-gold" />
                <span>Toshkent, O'zbekiston</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 EcoCash. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6 text-background/50 text-sm">
            <a href="#" className="hover:text-eco-gold transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-eco-gold transition-colors">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
