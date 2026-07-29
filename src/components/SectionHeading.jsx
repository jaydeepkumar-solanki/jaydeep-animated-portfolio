import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .3 }}
      transition={{ duration: .6 }}
      className="mb-12"
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[.25em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="section-title text-4xl font-black sm:text-5xl">{title}</h2>
      {description && (
        <p className="mt-5 max-w-2xl text-gray-400 leading-7">{description}</p>
      )}
    </motion.div>
  );
}