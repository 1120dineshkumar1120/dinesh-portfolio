import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";

const categories = [
  {
    icon: Layout,
    title: "Frontend",
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "REST & GraphQL", level: 85 },
      { name: "Socket.io", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-emerald-400 to-cyan-400",
    skills: [
      { name: "MongoDB", level: 92 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Prisma", level: 80 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-orange-400 to-pink-500",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS / Vercel", level: 82 },
      { name: "Figma", level: 78 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-50" aria-hidden />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-sm text-primary mb-3">/ 02 — SKILLS</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-4">
            My <span className="gradient-text">tech arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies I use daily to build modern, scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass rounded-3xl p-6 hover:border-primary/40 transition-all hover:-translate-y-2"
              data-cursor-hover
            >
              <div
                className={`absolute -top-px left-6 right-6 h-px bg-gradient-to-r ${cat.color} opacity-60`}
              />
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <cat.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl mb-5">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1 + j * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
