import { motion } from "framer-motion";

export default function SkillCard({ icon, name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      viewport={{ once: true, amount: .2 }}
      transition={{ duration: .45, delay: index * .05 }}
      className="glass rounded-2xl p-5 transition hover:border-emerald-400/25"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-2xl">{icon}</span>
        <span className="text-xs text-gray-500">{level}</span>
      </div>
      <h3 className="font-bold">{name}</h3>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: level }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: .2 + index * .04 }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-400"
        />
      </div>
    </motion.div>
  );
}