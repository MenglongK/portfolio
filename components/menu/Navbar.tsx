"use client";
import { menuData } from "@/data/menuData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    // Give DOM a small tick to ensure all sections are rendered
    setTimeout(() => {
      menuData.forEach((menu) => {
        const id = menu.target.substring(1);
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => observer.disconnect();
  }, [pathname]); // re-run if pathname changes (though it shouldn't for one-page)

  if (pathname === "/resume") return null;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-2xl border-b border-foreground/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-widest">
            MENGLONG<span className="text-orange-500">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuData.map((menu, index) => (
              <Link
                key={index}
                href={menu.target}
                onClick={() => setActiveSection(menu.target)}
                className={`hover:text-orange-500 transition font-medium relative ${
                  activeSection === menu.target ? "text-orange-500" : ""
                }`}
              >
                {menu.title}
                {activeSection === menu.target && (
                  <motion.div
                    layoutId="desktop-underline"
                    className="absolute left-0 top-full h-[2px] w-full bg-orange-500 mt-1"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            {mounted && (
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="p-2 rounded-full hover:bg-foreground/5 text-orange-500"
              >
                {resolvedTheme === "dark" ? (
                  <Sun size={20} />
                ) : (
                  <Moon size={20} />
                )}
              </button>
            )}
            <button 
              onClick={() => window.dispatchEvent(new Event('openHireMe'))}
              className="px-6 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-500/20">
              Hire Me
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            {mounted && (
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="p-2 rounded-full hover:bg-foreground/5 text-orange-500"
              >
                {resolvedTheme === "dark" ? (
                  <Sun size={20} />
                ) : (
                  <Moon size={20} />
                )}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-background border-b border-foreground/10 py-6 px-6 lg:hidden flex flex-col gap-4 shadow-xl"
            >
              {menuData.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.target}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection(menu.target);
                  }}
                  className={`text-lg font-medium hover:text-orange-500 relative inline-block w-max ${
                    activeSection === menu.target ? "text-orange-500" : ""
                  }`}
                >
                  {menu.title}
                  {activeSection === menu.target && (
                    <motion.div
                      layoutId="mobile-underline"
                      className="absolute left-0 top-full h-[2px] w-full bg-orange-500 mt-1"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new Event('openHireMe'));
                }}
                className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold">
                Hire Me
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
