import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <nav className="container mx-auto mt-4 px-4">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 font-display font-bold text-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
              <Code2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="gradient-text">Dinesh</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  <span className="text-primary mr-1">0{i + 1}.</span>
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-primary group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden md:inline-flex px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground font-medium text-sm hover:shadow-glow transition-all hover:scale-105"
            >
              Hire Me
            </a>
            <button
              className="md:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-2xl p-6"
            >
              <ul className="flex flex-col gap-4 font-mono">
                {links.map((l, i) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <span className="text-primary mr-2">0{i + 1}.</span>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
