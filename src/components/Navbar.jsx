import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 shadow-2xl">
        <a href="#home" className="font-black tracking-tight text-xl">
          JS<span className="text-emerald-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm text-gray-300">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-emerald-400">
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-black"
        >
          Let's Talk
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg p-2 text-gray-200"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-emerald-400"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}