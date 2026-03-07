import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import appIcon from "@/assets/app-icon.png";

const footerLinks = {
  Explore: ["Stories", "Collections", "Blog"],
  Company: ["Our Story", "Why Teastack", "Contact Us"],
  Support: ["FAQs", "Privacy Policy", "Terms & Conditions"],
};

const Footer = () => {
  const socials = [
    { icon: Instagram, name: "instagram" },
    { icon: Facebook, name: "facebook" },
    { icon: Twitter, name: "x" },
    { icon: Linkedin, name: "linkedin" },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FF7F47] flex items-center justify-center shadow-[0_0_20px_rgba(255,127,71,0.2)]">
                <img src={appIcon} alt="M&U" className="w-6 h-6 object-contain brightness-0 invert" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">Me & You</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs">
              Lorem ipsum dolor sit amet consectetur. Fames nunc volutpat metus non enim in. Nulla lorem.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#FF7F47] hover:bg-[#FF7F47] hover:text-white transition-all duration-300 group"
                >
                  <social.icon size={18} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase text-[12px]">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-zinc-500 text-sm hover:text-[#FF7F47] transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © 2025 Me & You. All rights reserved.
          </p>
          <div className="flex gap-6 text-zinc-600 text-xs uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
