import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import appIcon from "@/assets/app-icon.png";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

/**
 * Smart Unified Navigation Bar
 * Hides on scroll down, reveals on scroll up.
 * Resets visibility on page navigation.
 */
const Navbar = () => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Reset navbar state when changing pages or refresh
  useEffect(() => {
    setHidden(false);
    setIsScrolled(window.scrollY > 50);
  }, [location.key]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Safety check: never hide when near the very top of any page
    if (latest < 100) {
      setHidden(false);
      setIsScrolled(false);
      return;
    }

    // Toggle visibility based on scroll direction
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Toggle glass background
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial="visible"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ 
        duration: 0.35, 
        ease: [0.23, 1, 0.32, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/40 backdrop-blur-xl border-b border-white/5 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl">
            <img src={appIcon} alt="Me & You" className="w-9 h-9 transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight hidden xs:inline">Me & You</span>
        </Link>

        {/* Action Button */}
        <button className="h-10 px-5 sm:h-11 sm:px-7 rounded-full font-bold bg-[#FF7F47] text-white text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,127,71,0.3)] flex items-center justify-center gap-2 group active:scale-95 whitespace-nowrap">
          Download <span className="hidden sm:inline">M&U</span>
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
