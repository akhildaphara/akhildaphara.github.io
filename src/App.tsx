import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, GraduationCap, SpellCheck, CreditCard, Terminal, Package } from 'lucide-react';

interface TypewriterTextProps { text: string; delay?: number; className?: string; }
const TypewriterText = ({ text, delay = 0, className = "" }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Speed of typing
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={className}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-5 bg-lime-400 ml-1 align-middle"
      />
    </motion.span>
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
    <h2 className="font-sans font-bold text-3xl sm:text-5xl uppercase tracking-tighter text-slate-100">
      {children}
    </h2>
  </motion.div>
);

interface TechBadgeProps { children: ReactNode; }
const TechBadge = ({ children }: TechBadgeProps) => (
  <motion.span 
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="px-3 py-1 text-xs font-mono border border-slate-700 bg-slate-900/50 text-slate-300 rounded-sm uppercase tracking-wider hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/5 transition-all cursor-default"
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

      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
        <a href="#about" className="font-sans font-bold text-xl tracking-tighter uppercase">
          A.D<span className="text-lime-400">_</span>
        </a>
        <div className="hidden md:flex gap-8 font-mono text-sm">
          <a href="#about" className="hover:text-cyan-400 transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-cyan)]">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-cyan)]">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-cyan)]">Experience</a>
          <a href="https://akhildaphara.hashnode.dev/" target='_blank' rel="noreferrer" className="hover:text-cyan-400 transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-cyan)]">Blog</a>
        </div>
      </nav>

      <main className="relative z-10 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto selection:bg-lime-400 selection:text-white">

        {/* HERO SECTION */}
        <section id="about" className="min-h-screen flex flex-col justify-center pt-20 relative">
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

            <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tighter leading-[0.85]">
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

            <div className="font-mono text-slate-300 text-lg md:text-xl max-w-2xl mt-8 whitespace-pre-wrap">
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
                                                className="font-mono text-sm bg-lime-400 text-black px-6 py-3 uppercase font-bold tracking-wider hover:bg-white transition-colors"
              >
                View Logs //
              </a>
              <a
                href="#connect"
                                                className="font-mono text-sm border border-slate-700 text-slate-300 px-6 py-3 uppercase tracking-wider hover:border-lime-400 hover:text-lime-400 transition-colors flex items-center gap-2"
              >
                <Mail size={16} /> Connect
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
        <section id="projects" className="py-32 relative">
          <SectionHeading>Projects</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="https://endless-scrabble-13a74.web.app/" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="group border border-primary-light/50 bg-primary-base/50 p-8 hover:border-pink-400/50 transition-colors relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="font-mono text-pink-400 mb-4 flex justify-between items-center">
                  <SpellCheck size={24} />
                  <span className="text-xs tracking-widest uppercase flex items-center gap-2">
                    Project <ExternalLink size={16} />
                  </span>
                </div>
                <h3 className="font-sans font-bold text-2xl uppercase mb-4 text-slate-100 group-hover:text-pink-400 transition-colors">
                  Endless Scrabble
                </h3>
                <p className="font-mono text-slate-300 text-sm mb-6 line-clamp-3">
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

            <a href="https://monet-3d69d.web.app/" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="group border border-primary-light/50 bg-primary-base/50 p-8 hover:border-lime-400/50 transition-colors relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="font-mono text-lime-400 mb-4 flex justify-between items-center">
                  <CreditCard size={24} />
                  <span className="text-xs tracking-widest uppercase flex items-center gap-2">
                    Project <ExternalLink size={16} />
                  </span>
                </div>
                <h3 className="font-sans font-bold text-2xl uppercase mb-4 text-slate-100 group-hover:text-lime-400 transition-colors">
                  Monet
                </h3>
                <p className="font-mono text-slate-300 text-sm mb-6 line-clamp-3">
                  The mathematically perfect way to play the credit cards points game.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge>React</TechBadge>
                  <TechBadge>Firebase</TechBadge>
                  <TechBadge>Material UI</TechBadge>
                </div>
              </motion.div>
            </a>


            <a href="https://credence-docs.gitlab.io/credcli/" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="group border border-primary-light/50 bg-primary-base/50 p-8 hover:border-cyan-400/50 transition-colors relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="font-mono text-cyan-400 mb-4 flex justify-between items-center">
                  <Terminal size={24} />
                  <span className="text-xs tracking-widest uppercase flex items-center gap-2">
                    Project <ExternalLink size={16} />
                  </span>
                </div>
                <h3 className="font-sans font-bold text-2xl uppercase mb-4 text-slate-100 group-hover:text-cyan-400 transition-colors">
                  CLI App for Version Control
                </h3>
                <p className="font-mono text-slate-300 text-sm mb-6 line-clamp-3">
                  A NodeJS CLI tool to automate version control with extensive unit testing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge>NodeJS</TechBadge>
                  <TechBadge>Git</TechBadge>
                  <TechBadge>Unit Tests</TechBadge>
                </div>
              </motion.div>
            </a>

            <a href="https://www.npmjs.com/package/@credenceanalytics/parsifier" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="group border border-primary-light/50 bg-primary-base/50 p-8 hover:border-pink-400/50 transition-colors relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="font-mono text-pink-400 mb-4 flex justify-between items-center">
                  <Package size={24} />
                  <span className="text-xs tracking-widest uppercase flex items-center gap-2">
                    Project <ExternalLink size={16} />
                  </span>
                </div>
                <h3 className="font-sans font-bold text-2xl uppercase mb-4 text-slate-100 group-hover:text-pink-400 transition-colors">
                  Parsifier
                </h3>
                <p className="font-mono text-slate-300 text-sm mb-6 line-clamp-3">
                  Published "Parsifier" NPM package to modify config files, eliminating manual work.
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
        <section id="experience" className="py-32 relative">
          <SectionHeading>Experience</SectionHeading>

          <div className="space-y-24">
            {/* Job 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 group"
            >
              <div className="font-mono">
                <div className="text-lime-400 mb-2">May 2023 — Present</div>
                <div className="text-slate-400 uppercase tracking-widest text-xs mb-4">Genesys, USA</div>
              </div>
              <div className="space-y-6">
                <h3 className="font-sans font-bold text-3xl uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  Software Engineer
                </h3>
                <ul className="font-mono text-slate-300 space-y-4 text-sm md:text-base">
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
              <div className="font-mono">
                <div className="text-lime-400 mb-2">May 2022 — May 2023</div>
                <div className="text-slate-400 uppercase tracking-widest text-xs mb-4">Genesys, USA</div>
              </div>
              <div className="space-y-6">
                <h3 className="font-sans font-bold text-3xl uppercase tracking-tight text-white group-hover:text-pink-400 transition-colors">
                  Software Engineer Intern
                </h3>
                <ul className="font-mono text-slate-300 space-y-4 text-sm md:text-base">
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
              <div className="font-mono">
                <div className="text-lime-400 mb-2">Mar 2021 — Jun 2021</div>
                <div className="text-slate-400 uppercase tracking-widest text-xs mb-4">Credence Analytics, India</div>
              </div>
              <div className="space-y-6">
                <h3 className="font-sans font-bold text-3xl uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  Backend Developer
                </h3>
                <ul className="font-mono text-slate-300 space-y-4 text-sm md:text-base">
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
        <section id="education" className="py-32 relative">
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
        <footer id="connect" className="py-24 border-t border-slate-800 mt-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-sans font-bold text-2xl uppercase tracking-tighter">
            Akhil Daphara
          </div>

          <div className="flex gap-6 items-center">
            <a href="https://linkedin.com/in/akhildaphara" target="_blank" rel="noreferrer"  className="text-slate-300 hover:text-lime-400 transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-lime)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/akhildaphara" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-pink-400 transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-pink)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="mailto:akhildaphara@gmail.com"  className="text-slate-300 hover:text-cyan-400 transition-colors hover:[text-shadow:0_0_8px_var(--color-accent-cyan)]">
              <Mail size={24} />
            </a>
            <a href="tel:7744189117"  className="font-mono text-slate-300 hover:text-pink-400 transition-colors">
              774-418-9117
            </a>
          </div>
        </footer>

      </main>
    </>
  );
}
