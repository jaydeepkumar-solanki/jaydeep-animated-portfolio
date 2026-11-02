import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: .2 }}
      transition={{ duration: .55, delay: index * .08 }}
      className="group overflow-hidden rounded-3xl border border-white/8 bg-white/[.025]"
    >
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-emerald-500/15 via-blue-500/10 to-purple-500/15">
        <div>
          <img src={project.image} />
        </div>
        <motion.div
          className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [.4, .8, .4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs font-semibold backdrop-blur">
          {project.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <ArrowUpRight className="shrink-0 text-emerald-400 transition group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-black hover:bg-emerald-300">
            Live Demo <ArrowUpRight size={15} />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold hover:bg-white/5">
            <Github size={15} /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}