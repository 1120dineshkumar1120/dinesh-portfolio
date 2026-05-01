import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "NexusFlow Analytics",
    description:
      "A real-time analytics dashboard processing millions of events with custom charts, role-based auth, and a beautiful glassmorphic UI.",
    image: p1,
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "Vaultly E-Commerce",
    description:
      "A premium shopping experience with Stripe checkout, dynamic product filters, and an admin panel for inventory management.",
    image: p2,
    stack: ["Next.js", "Express", "MongoDB", "Stripe", "Redux"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Pulse Chat",
    description:
      "Real-time messaging app with end-to-end encryption, group chats, typing indicators, and seamless media sharing.",
    image: p3,
    stack: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "TaskAI Workspace",
    description:
      "AI-powered project management tool with smart task suggestions, kanban boards, and team collaboration in real time.",
    image: p4,
    stack: ["MERN", "OpenAI", "Tailwind", "Framer Motion"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <p className="font-mono text-sm text-primary mb-3">
              / 03 — PROJECTS
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl">
              Selected <span className="gradient-text">work</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A few projects I'm proud of — from real-time platforms to
            e-commerce. Each one shipped, tested, and loved.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
              className="group relative glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-2 hover:shadow-elevated"
              data-cursor-hover
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
                <img
                  src={p.image}
                  alt={`${p.title} project screenshot`}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} GitHub`}
                    className="w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:text-primary hover:scale-110 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} live demo`}
                    className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center hover:scale-110 transition-all shadow-glow"
                  >
                    <ExternalLink className="w-4 h-4 text-primary-foreground" />
                  </a>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-bold text-2xl group-hover:gradient-text transition-all">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1 rounded-full bg-muted/50 border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
