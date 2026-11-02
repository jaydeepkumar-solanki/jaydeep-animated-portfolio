import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";
import Navbar from "./components/Navbar";
import SectionHeading from "./components/SectionHeading";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import emailJs from "@emailjs/browser";

const skills = [
  ["🐘", "PHP", "70%"],
  ["🚀", "Laravel", "80%"],
  ["⚛️", "React.js", "65%"],
  ["🟨", "JavaScript", "70%"],
  ["🗄️", "MySQL", "80%"],
  ["🔌", "REST APIs", "85%"],
  ["🔐", "Sanctum", "88%"],
  ["⚡", "Redis", "72%"],
  ["☁️", "AWS", "70%"],
  ["🐳", "Docker", "68%"],
  ["🔧", "Git / GitHub", "90%"],
  ["🎨", "Tailwind CSS", "75%"],
];

const projects = [
  {
    title: "Caravan Platform",
    category: "Laravel Backend + Next.js",
    description:
      "A production-style caravan Listing platform with Admin and Dealer panels, RESTful APIs, image optimization, S3 storage, Redis caching and soft deletes.",
    stack: ["Laravel", "Next.js", "MySQL", "Redis", "AWS S3", "REST API"],
    image: "/public/images/caravan.png",
    demo: "https://letsgoleisure.com/home",
    github: "#contact",
  },
  {
    title: "Cloud Racing",
    category: "Web + Mobile Platform",
    description:
      "Laravel-powered platform with multilingual support, subscription modules and Stripe payment integration for a connected web and mobile experience.",
    stack: ["Laravel", "WebSocket", "Stripe", "MySQL", "REST API"],
    image: "/public/images/cloudRacing.png",
    demo: "https://cloudracing.svaapta.com/en/login",
    github: "#contact",
  },
  {
    title: "Expense Tracker",
    category: "React Application",
    description:
      "Responsive expense management application built with React, focused on clean component architecture, state handling and a simple user experience.",
    stack: ["React", "JavaScript", "CSS", "Vercel"],
    image: "/public/images/expenseTracker.png",
    demo: "https://expense-trackerjd.vercel.app/",
    github: "https://github.com/jaydeepkumar-solanki/expense-tracker",
  },
  {
    title: "Movie Explorer",
    category: "React Application",
    description:
      "A movie discovery interface built with React featuring API-driven content, responsive layouts and reusable UI components.",
    stack: ["React", "REST API", "JavaScript", "Vercel"],
    image: "/public/images/movieExplorer.png",
    demo: "https://movie-explorerjd.vercel.app/",
    github: "https://github.com/jaydeepkumar-solanki/movie-explorer.jd",
  },
];

const experience = [
  {
    period: "Jan 2024 — June 2026",
    role: "Software Developer",
    company: "Svaapta-it-ally Solutions Pvt. Ltd.",
    points: [
      "Developing Laravel backends and RESTful APIs for web and mobile platforms.",
      "Working with MySQL, Eloquent ORM, Sanctum authentication, queues, jobs and cron jobs.",
      "Implementing Redis caching, AWS S3 storage, image optimization and performance improvements.",
      "Integrating third-party services including Stripe and building multilingual features.",
    ],
  },
  {
    period: "Earlier Experience",
    role: "Software Developer Trainee",
    company: "Professional Internship & Training",
    points: [
      "Built responsive interfaces using HTML, CSS, JavaScript, jQuery, AJAX and Bootstrap.",
      "Worked with PHP and Laravel MVC patterns, database operations and Git workflows.",
    ],
  },
];

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    emailJs
      .sendForm("service_8mt0h64", "template_4qcz7wi", form.current, {
        publicKey: "LLUJbWBCQ9nfEO9s4",
      })
      .then(() => {
        setSuccess("Message sent successfully!");
        form.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setError("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-gray-100">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400"
      />
      <Navbar />

      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center px-5 pt-24"
        >
          <div className="grid-bg absolute inset-0 opacity-30" />
          <motion.div
            style={{ y }}
            className="pointer-events-none absolute left-[8%] top-[22%] h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]"
          />
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-[10%] top-[28%] h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-bold text-emerald-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  AVAILABLE FOR NEW OPPORTUNITIES
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-lg text-gray-400"
              >
                Hi, I'm{" "}
                <span className="font-semibold text-white">
                  Jaydeepkumar Solanki
                </span>{" "}
                👋
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-3 max-w-4xl text-5xl font-black leading-[.98] tracking-[-.06em] sm:text-7xl"
              >
                Full Stack
                <br />
                <span className="text-gradient">Developer.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg"
              >
                I build scalable web applications, REST APIs and reliable
                backend systems with Laravel — while bringing modern frontend
                skills with React.js.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black transition hover:bg-emerald-300"
                >
                  Explore My Work{" "}
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="/resume.pdf"
                  download="Jaydeepkumar-Solanki-Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-bold transition hover:border-emerald-400/30 hover:bg-white/5"
                >
                  Download Resume <ArrowDown size={18} />
                </a>
              </motion.div>

              <div className="mt-10 flex items-center gap-5 text-gray-500">
                <a
                  href="https://github.com/jaydeepkumar-solanki"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/jaydeepkumar-solanki-343071250/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  <Linkedin />
                </a>
                <a
                  href="mailto:jdashiyer@gmail.com"
                  className="transition hover:text-white"
                >
                  <Mail />
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              className="relative hidden lg:block"
            >
              <div className="glow glass relative mx-auto aspect-square max-w-[420px] rounded-[2.5rem] p-7">
                <div className="absolute inset-5 rounded-[2rem] border border-white/5" />
                <div className="flex h-full flex-col justify-between rounded-[1.8rem] bg-black/30 p-7">
                  <div className="flex items-center justify-between">
                    <Terminal className="text-emerald-400" size={34} />
                    <span className="font-mono text-xs text-gray-600">
                      developer.ts
                    </span>
                  </div>
                  <pre className="overflow-hidden font-mono text-sm leading-7 text-gray-400">
                    {`const developer = {
  name: "Jaydeep",
  role: "Full stack Developer",
  experience: "2+ years",
  backend: [
    "PHP", "Laravel",
    "REST APIs", "MySQL"
  ],
  cloud: ["AWS", "Redis"],
  frontend: ["React", "JS"],
  status: "building..."
};`}
                  </pre>
                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <Sparkles size={14} /> Clean code. Real products. Continuous
                    learning.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 text-gray-600 hover:text-white"
          >
            <ArrowDown />
          </motion.a>
        </section>

        <section id="about" className="px-5 py-15">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="01 — About"
              title="Backend-minded. Product-focused."
              description="I enjoy turning business requirements into maintainable Laravel applications and APIs, with a strong focus on performance, clean architecture and practical user experiences."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                [
                  Code2,
                  "Clean Architecture",
                  "MVC, Eloquent ORM, reusable services and maintainable code.",
                ],
                [
                  Server,
                  "API Development",
                  "RESTful APIs, Sanctum authentication, integrations and backend logic.",
                ],
                [
                  Globe,
                  "Production Ready",
                  "AWS deployment, S3, Redis, queues, cron jobs and performance optimization.",
                ],
              ].map(([Icon, title, text], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-3xl p-7"
                >
                  <Icon className="mb-6 text-emerald-400" size={30} />
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-5 py-15">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="02 — Skills"
              title="My technical toolkit."
              description="A practical stack built around Laravel backend development, APIs, databases, cloud infrastructure and modern frontend development."
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {skills.map(([icon, name, level], i) => (
                <SkillCard
                  key={name}
                  icon={icon}
                  name={name}
                  level={level}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-5 py-15">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="03 — Experience"
              title="Where I've been building."
            />
            <div className="relative ml-2 border-l border-white/10 pl-8 sm:ml-6 sm:pl-12">
              {experience.map((item, i) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative mb-14 last:mb-0"
                >
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#050505] bg-emerald-400 sm:-left-[57px]" />
                  <p className="text-sm font-semibold text-emerald-400">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-2xl font-black">{item.role}</h3>
                  <p className="mt-1 text-gray-500">{item.company}</p>
                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-6 text-gray-400"
                      >
                        <CheckCircle2
                          className="mt-1 shrink-0 text-emerald-500"
                          size={16}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-5 py-15">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="04 — Projects"
              title="Things I've built."
              description="Selected projects showing my experience across Laravel, APIs, React, payments, cloud services and performance."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-15">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass glow mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 sm:p-14"
          >
            <div className="grid gap-12 lg:grid-cols-[1fr_.8fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[.25em] text-emerald-400">
                  05 — Contact
                </p>
                <h2 className="mt-4 max-w-xl text-4xl font-black tracking-[-.04em] sm:text-6xl">
                  Let's build something useful.
                </h2>
                <p className="mt-6 max-w-xl leading-7 text-gray-400">
                  Looking for a Full stack Developer someone who can bridge
                  backend and frontend? Let's talk about your next project.
                </p>
                <div className="mt-8 space-y-4 text-sm text-gray-300">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-emerald-400" /> Vadodara,
                    Gujarat, India
                  </div>
                  <a
                    href="mailto:your-email@example.com"
                    className="flex items-center gap-3 hover:text-emerald-400"
                  >
                    <Mail size={18} className="text-emerald-400" />{" "}
                    jdashiyer@gmail.com
                  </a>
                </div>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none placeholder:text-gray-600 focus:border-emerald-400/40"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none placeholder:text-gray-600 focus:border-emerald-400/40"
                  placeholder="Email address"
                />
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none placeholder:text-gray-600 focus:border-emerald-400/40"
                  placeholder="Tell me about your project..."
                />

                {success && (
                  <p className="text-sm text-emerald-400">{success}</p>
                )}

                {error && <p className="text-sm text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-black text-black transition hover:bg-emerald-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowRight size={18} />}
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-600 sm:flex-row">
          <p>© 2025 Jaydeepkumar Solanki. Built with React.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/jaydeepkumar-solanki"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jaydeepkumar-solanki-343071250/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
