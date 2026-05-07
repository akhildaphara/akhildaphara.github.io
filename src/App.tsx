import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, GraduationCap, SpellCheck, CreditCard, Terminal, Package, Laptop } from 'lucide-react';

interface TypewriterTextProps { text: string; delay?: number; className?: string; }
const TypewriterText = ({ text, delay = 0, className = "" }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // Speed of typing
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, started]);

  return (
    <div className={`grid ${className}`}>
      {/* Invisible layer to preserve space */}
      <span className="invisible pointer-events-none select-none [grid-area:1/1] whitespace-pre-wrap">
        {text}
      </span>
      {/* Visible typing layer */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
        className="[grid-area:1/1] whitespace-pre-wrap"
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-5 bg-lime-400 ml-1 align-middle"
        />
      </motion.span>
    </div>
  );
};


interface SectionHeadingProps { children: ReactNode; }
const SectionHeading = ({ children }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex items-baseline gap-4 mb-12 border-b border-slate-800 pb-4"
  >
    <h2 className="font-sans font-bold text-3xl sm:text-5xl uppercase tracking-wider text-slate-100">
      {children}
    </h2>
  </motion.div>
);

interface TechBadgeProps { children: ReactNode; }
const TechBadge = ({ children }: TechBadgeProps) => (
  <motion.span 
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="px-3 py-1 text-xs font-mono border border-slate-700 bg-slate-900/50 text-slate-300 rounded-sm uppercase tracking-wider hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/5 transition-all cursor-pointer"
  >
    {children}
  </motion.span>
);

// Re-trigger new deployment
export default function App() {
  useEffect(() => {
    console.log(
      "%c> system.init() %c\nWelcome, explorer. I see you're checking the logs. Looking for someone with an eye for detail? Let's connect.",
      "color: #a3e635; font-weight: bold; font-size: 14px;",
      "color: #94a3b8; font-size: 12px;"
    );
  }, []);

  return (
    <>
      <div className="crt" />
      <div className="noise" />

      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-primary-dark/80 backdrop-blur-md border-b border-white/5" role="navigation" aria-label="Main Navigation">
        <a href="#about" className="font-sans font-bold text-xl tracking-wider uppercase focus-visible:outline-2 focus-visible:outline-cyan-400 outline-offset-4" aria-label="Akhil Daphara - Home">
          A.D<span className="text-lime-400">_</span>
        </a>
        <div className="hidden md:flex gap-8 font-mono text-sm">
          <a href="#about" className="hover:text-cyan-400 transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-cyan)] focus-visible:text-cyan-400 outline-none" aria-label="About section">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-cyan)] focus-visible:text-cyan-400 outline-none" aria-label="Projects section">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-cyan)] focus-visible:text-cyan-400 outline-none" aria-label="Experience section">Experience</a>
          <a href="https://akhildaphara.hashnode.dev/" target='_blank' rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-cyan)] focus-visible:text-cyan-400 outline-none" aria-label="Blog (opens in new tab)">Blog</a>
        </div>
      </nav>

      <main className="relative z-10 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto selection:bg-cyan-400 selection:text-white" id="main-content" role="main">

        {/* HERO SECTION */}
        <section id="about" className="min-h-screen flex flex-col justify-center pt-20 relative" role="region" aria-label="About Me">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="font-mono text-lime-400 text-lg md:text-xl flex items-center gap-2">
              <span>&gt;</span>
              <span>system.init()</span>
            </div>

            <h1 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-wider leading-[0.85]">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  Akhil
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-4"
                >
                  Daphara
                </motion.div>
              </div>
            </h1>

            <div className="font-mono text-slate-300 text-lg md:text-xl max-w-2xl mt-8">
              <TypewriterText text={"> Software Engineer based in Boston, MA.\n> Specializing in backend systems, AWS, Node.js, and AI assisted development."} delay={1} />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="flex gap-4 pt-12"
            >
              <a
                href="#projects"
                                                className="font-mono text-sm bg-lime-400 text-black px-6 py-3 uppercase font-bold tracking-wider hover:bg-white focus-visible:bg-white outline-none transition-colors"
                aria-label="View project logs"
              >
                View Logs //
              </a>
              <a
                href="#connect"
                                                className="font-mono text-sm border border-slate-700 text-slate-300 px-6 py-3 uppercase tracking-wider hover:border-lime-400 hover:text-lime-400 focus-visible:text-lime-400 outline-none transition-colors flex items-center gap-2"
                aria-label="Connect with me"
              >
                <Mail size={16} aria-hidden="true" /> Connect
              </a>
            </motion.div>
          </motion.div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 hidden lg:block pointer-events-none">
            <h1 className="font-sans font-bold text-[30rem] leading-none whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
              ENG
            </h1>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-[clamp(4rem,12vh,8rem)] relative" role="region" aria-label="Selected Projects">
          <SectionHeading>Projects</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Project 1 - Large */}
            <a href="https://endless-scrabble-13a74.web.app/" target="_blank" rel="noopener noreferrer" className="sm:col-span-2 lg:col-span-4" aria-label="Endless Scrabble Project (opens in new tab)">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group border border-primary-light/50 bg-primary-base/50 p-8 hover:border-pink-400/50 transition-colors relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-pink-400/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="font-mono text-pink-400 mb-4 flex justify-between items-center">
                  <SpellCheck size={32} />
                  <span className="text-[10px] tracking-widest uppercase flex items-center gap-2">
                    Web-App <ExternalLink size={14} />
                  </span>
                </div>
                <h3 className="font-sans font-bold text-3xl uppercase mb-4 text-slate-100 group-hover:text-pink-400 transition-colors">
                  Endless Scrabble
                </h3>
                <p className="font-mono text-slate-300 text-base mb-6 leading-relaxed max-w-prose">
                  A massively multiplayer infinite Scrabble game on a shared, endless canvas. All players build on the same board in real time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge>Vanilla JS</TechBadge>
                  <TechBadge>HTML Canvas</TechBadge>
                  <TechBadge>Firebase</TechBadge>
                  <TechBadge>Tailwind CSS</TechBadge>
                </div>
              </motion.div>
            </a>

            {/* Project 5 - New project */}
            <a href="https://backend-mystery.web.app" target="_blank" rel="noopener noreferrer" className="sm:col-span-2 lg:col-span-2" aria-label="Backend Mystery Project (opens in new tab)">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group border border-primary-light/50 bg-primary-base/50 p-8 hover:border-lime-400/50 transition-colors relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="font-mono text-lime-400 mb-4 flex justify-between items-center">
                  <Laptop size={24} />
                  <span className="text-[10px] tracking-widest uppercase flex items-center gap-2">
                    Web-App <ExternalLink size={14} />
                  </span>
                </div>
                <h3 className="font-sans font-bold text-2xl uppercase mb-4 text-slate-100 group-hover:text-lime-400 transition-colors">
                  Backend Mystery
                </h3>
                <p className="font-mono text-slate-300 text-sm mb-6 leading-relaxed">
                  An interactive learning platform designed to demystify backend programming fundamentals through flashcards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge>React</TechBadge>
                  <TechBadge>Education</TechBadge>
                </div>
              </motion.div>
            </a>

            {/* Project 2 - Full Row */}
            <a href="https://monet-3d69d.web.app/" target="_blank" rel="noopener noreferrer" className="sm:col-span-2 lg:col-span-6" aria-label="Monet Project (opens in new tab)">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group border border-primary-light/50 bg-primary-base/50 p-8 hover:border-lime-400/50 transition-colors relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="font-mono text-lime-400 mb-4 flex justify-between items-center">
                  <CreditCard size={24} />
                  <span className="text-[10px] uppercase flex items-center gap-2">
                    <span className="lowercase font-bold">i</span><span className="tracking-widest">OS APP</span>
                    <ExternalLink size={14} />
                  </span>
                </div>
                <h3 className="font-sans font-bold text-2xl uppercase mb-4 text-slate-100 group-hover:text-lime-400 transition-colors flex items-center gap-3">
                  Monet
                  <span className="px-2 py-0.5 bg-lime-400 text-black text-[10px] font-bold rounded-sm tracking-normal">
                    COMING SOON
                  </span>
                </h3>
                <p className="font-mono text-slate-300 text-sm mb-6 leading-relaxed max-w-prose">
                  The mathematically perfect way to play the credit cards points game. Optimize your rewards with precision.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge>React</TechBadge>
                  <TechBadge>Firebase</TechBadge>
                  <TechBadge>Material UI</TechBadge>
                </div>
              </motion.div>
            </a>

            {/* Project 3 - Half Row */}
            <a href="https://credence-docs.gitlab.io/credcli/" target="_blank" rel="noopener noreferrer" className="sm:col-span-1 lg:col-span-3" aria-label="CLI App Project (opens in new tab)">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group border border-primary-light/50 bg-primary-base/50 p-8 hover:border-cyan-400/50 transition-colors relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="font-mono text-cyan-400 mb-4 flex justify-between items-center">
                  <Terminal size={28} />
                  <span className="text-[10px] tracking-widest uppercase flex items-center gap-2">
                    Developer Tool <ExternalLink size={14} />
                  </span>
                </div>
                <h3 className="font-sans font-bold text-2xl uppercase mb-4 text-slate-100 group-hover:text-cyan-400 transition-colors">
                  CLI App
                </h3>
                <p className="font-mono text-slate-300 text-sm mb-6 leading-relaxed">
                  A robust NodeJS CLI tool designed to automate complex version control workflows with extensive unit testing coverage.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge>NodeJS</TechBadge>
                  <TechBadge>Git</TechBadge>
                </div>
              </motion.div>
            </a>

            {/* Project 4 - Half Row */}
            <a href="https://www.npmjs.com/package/@credenceanalytics/parsifier" target="_blank" rel="noopener noreferrer" className="sm:col-span-1 lg:col-span-3" aria-label="Parsifier Project (opens in new tab)">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group border border-primary-light/50 bg-primary-base/50 p-8 hover:border-pink-400/50 transition-colors relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="font-mono text-pink-400 mb-4 flex justify-between items-center">
                  <Package size={24} />
                  <span className="text-[10px] tracking-widest uppercase flex items-center gap-2">
                    Library <ExternalLink size={14} />
                  </span>
                </div>
                <h3 className="font-sans font-bold text-2xl uppercase mb-4 text-slate-100 group-hover:text-pink-400 transition-colors">
                  Parsifier
                </h3>
                <p className="font-mono text-slate-300 text-sm mb-6 leading-relaxed">
                  Published NPM package to modify configuration files programmatically, eliminating manual intervention in build pipelines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge>NodeJS</TechBadge>
                  <TechBadge>NPM</TechBadge>
                </div>
              </motion.div>
            </a>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-[clamp(4rem,12vh,8rem)] relative" role="region" aria-label="Professional Experience">
          <SectionHeading>Experience</SectionHeading>

          <div className="space-y-24">
            {/* Job 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 group"
            >
              <div className="font-mono tabular-nums">
                <div className="text-lime-400 mb-2">May 2023 — Present</div>
                <div className="text-slate-400 uppercase tracking-widest text-xs mb-4">Genesys, USA</div>
              </div>
              <div className="space-y-6">
                <h3 className="font-sans font-bold text-3xl uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  Software Engineer
                </h3>
                <ul className="font-mono text-slate-300 space-y-4 text-sm md:text-base leading-relaxed max-w-3xl">
                  <li className="flex gap-4 items-start">
                    <motion.span 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block w-1.5 h-1.5 bg-lime-400/50 mt-2 shrink-0"
                    ></motion.span>
                    <span>Part of <span className="text-white">Cursor AI</span> pilot to increase team productivity, successfully scaling the tool to 100% of the organization.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <motion.span 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block w-1.5 h-1.5 bg-lime-400/50 mt-2 shrink-0"
                    ></motion.span>
                    <span>Won internal hackathon prize for building a <span className="text-white">Model Context Protocol (MCP) server</span> that integrated public APIs with IDEs and Amazon Bedrock.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <motion.span 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block w-1.5 h-1.5 bg-lime-400/50 mt-2 shrink-0"
                    ></motion.span>
                    <span>Designed and implemented <span className="text-white">AWS Step Function workflow</span> for distributed computing, reducing compute time from hours to under 18 minutes.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <motion.span 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block w-1.5 h-1.5 bg-lime-400/50 mt-2 shrink-0"
                    ></motion.span>
                    <span>Developed a core <span className="text-white">Node.js utility library</span> adopted by multiple teams to standardize external integrations (HTTP, Database, S3).</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  <TechBadge>TypeScript</TechBadge>
                  <TechBadge>Node.js</TechBadge>
                  <TechBadge>AWS</TechBadge>
                  <TechBadge>Java</TechBadge>
                  <TechBadge>MCP</TechBadge>
                </div>
              </div>
            </motion.div>

            {/* Job 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 group"
            >
              <div className="font-mono tabular-nums">
                <div className="text-lime-400 mb-2">May 2022 — May 2023</div>
                <div className="text-slate-400 uppercase tracking-widest text-xs mb-4">Genesys, USA</div>
              </div>
              <div className="space-y-6">
                <h3 className="font-sans font-bold text-3xl uppercase tracking-tight text-white group-hover:text-pink-400 transition-colors">
                  Software Engineer Intern
                </h3>
                <ul className="font-mono text-slate-300 space-y-4 text-sm md:text-base leading-relaxed max-w-3xl">
                  <li className="flex gap-4 items-start">
                    <motion.span 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block w-1.5 h-1.5 bg-pink-400/50 mt-2 shrink-0"
                    ></motion.span>
                    <span>Led the successful migration of microservices from <span className="text-white">Hystrix to Resilience4j</span>, ensuring fault tolerance without disrupting production.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <motion.span 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block w-1.5 h-1.5 bg-pink-400/50 mt-2 shrink-0"
                    ></motion.span>
                    <span>Decoupled testing architecture by enforcing strict separation of concerns, resulting in a more maintainable unit testing suite.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <motion.span 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block w-1.5 h-1.5 bg-pink-400/50 mt-2 shrink-0"
                    ></motion.span>
                    <span>Streamlined a <span className="text-white">Kotlin library</span> to accommodate new features and introduce an efficient code reuse path.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  <TechBadge>Clojure</TechBadge>
                  <TechBadge>JavaScript</TechBadge>
                  <TechBadge>Microservices</TechBadge>
                  <TechBadge>AWS</TechBadge>
                  <TechBadge>Resilience4j</TechBadge>
                </div>
              </div>
            </motion.div>

            {/* Job 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 group"
            >
              <div className="font-mono tabular-nums">
                <div className="text-lime-400 mb-2">Mar 2021 — Jun 2021</div>
                <div className="text-slate-400 uppercase tracking-widest text-xs mb-4">Credence Analytics, India</div>
              </div>
              <div className="space-y-6">
                <h3 className="font-sans font-bold text-3xl uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  Backend Developer
                </h3>
                <ul className="font-mono text-slate-300 space-y-4 text-sm md:text-base leading-relaxed max-w-3xl">
                  <li className="flex gap-4 items-start">
                    <motion.span 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block w-1.5 h-1.5 bg-cyan-400/50 mt-2 shrink-0"
                    ></motion.span>
                    <span>Collaborated with the CEO in building ERP system using <span className="text-white">Python, JavaScript, HTML, CSS, and SQL</span>.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <motion.span 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block w-1.5 h-1.5 bg-cyan-400/50 mt-2 shrink-0"
                    ></motion.span>
                    <span>Deployed Application Monitoring System on Linux Instance using <span className="text-white">Elasticsearch</span> for effortless monitoring.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <motion.span 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block w-1.5 h-1.5 bg-cyan-400/50 mt-2 shrink-0"
                    ></motion.span>
                    <span>Programmed support of Docker and Oracle database in existing CLI tool, cutting manual work by &gt;50%.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  <TechBadge>Python</TechBadge>
                  <TechBadge>SQL</TechBadge>
                  <TechBadge>Docker</TechBadge>
                  <TechBadge>Elasticsearch</TechBadge>
                  <TechBadge>Linux</TechBadge>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-[clamp(4rem,12vh,8rem)] relative" role="region" aria-label="Academic Background">
          <SectionHeading>Education</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Blocks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shrink-0">
                  <GraduationCap size={24} className="text-lime-400" />
                </div>
                <div>
                  <div className="font-mono text-lime-400 text-sm mb-1">May 2023</div>
                  <h4 className="font-sans font-bold text-xl uppercase text-white">MS in Computer Science</h4>
                  <div className="font-mono text-slate-400 text-sm">Worcester Polytechnic Institute</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shrink-0">
                  <GraduationCap size={24} className="text-cyan-400" />
                </div>
                <div>
                  <div className="font-mono text-cyan-400 text-sm mb-1">Oct 2020</div>
                  <h4 className="font-sans font-bold text-xl uppercase text-white">BE in Information Technology</h4>
                  <div className="font-mono text-slate-400 text-sm">University of Mumbai</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="connect" className="py-[clamp(3rem,8vh,6rem)] border-t border-slate-800 mt-20 flex flex-col md:flex-row justify-between items-center gap-8" role="contentinfo" aria-label="Connect with me">
          <div className="font-sans font-bold text-2xl uppercase tracking-wider">
            Akhil Daphara
          </div>

          <div className="flex gap-8 items-center">
            <a href="https://linkedin.com/in/akhildaphara" target="_blank" rel="noopener noreferrer"  className="p-2 -m-2 text-slate-300 hover:text-lime-400 focus-visible:text-lime-400 outline-none transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-lime)] active:scale-90" aria-label="LinkedIn Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/akhildaphara" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 text-slate-300 hover:text-pink-400 focus-visible:text-pink-400 outline-none transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-pink)] active:scale-90" aria-label="GitHub Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="mailto:akhildaphara@gmail.com"  className="p-2 -m-2 text-slate-300 hover:text-cyan-400 focus-visible:text-cyan-400 outline-none transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-cyan)] active:scale-90" aria-label="Send Email">
              <Mail size={24} aria-hidden="true" />
            </a>
          </div>
        </footer>

      </main>
    </>
  );
}
