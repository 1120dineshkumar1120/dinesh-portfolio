import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target } from "lucide-react";
import portrait from "@/assets/dinesh-portrait.jpg";

const highlights = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    desc: "I break complex problems into elegant, scalable solutions.",
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    desc: "From concept to production in weeks, not months.",
  },
  {
    icon: Target,
    title: "Pixel Perfect",
    desc: "Obsessed with clean code, performance, and UX details.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">/ 01 — ABOUT</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-4">
            Crafting digital <span className="gradient-text">experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden glass p-2 group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity" />
              <img
                src={portrait}
                alt="Dinesh — Full Stack MERN Developer portrait"
                width={768}
                height={896}
                loading="lazy"
                className="relative rounded-2xl w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-xl px-4 py-3 font-mono text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span>$ whoami</span>
                  <span className="text-primary">● online</span>
                </div>
                <div className="text-foreground mt-1">
                  dinesh@dev:~/portfolio
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm a{" "}
              <span className="text-foreground font-semibold">
                Full Stack MERN Developer
              </span>{" "}
              who turns ambitious ideas into production-ready products. With
              deep expertise across the entire JavaScript ecosystem, I architect
              systems that are <span className="text-primary">fast</span>,{" "}
              <span className="text-secondary">scalable</span>, and built to
              last.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've shipped real-world apps used by thousands — from real-time
              platforms to e-commerce systems — and I bring a problem-solving
              mindset to every line of code. My focus: clean architecture,
              smooth UX, and shipping work I'm proud of.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass rounded-2xl p-5 hover:border-primary/40 transition-all group"
                  data-cursor-hover
                >
                  <h.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold mb-1">{h.title}</h3>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              {[
                { num: "20+", label: "Projects Shipped" },
                { num: "3+", label: "Years Experience" },
                { num: "100%", label: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-3xl gradient-text">
                    {s.num}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
