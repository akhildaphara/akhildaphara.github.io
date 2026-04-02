import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Server, Mail, User } from 'lucide-react';

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

interface GlitchTextProps { text: string; className?: string; }
const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute top-0 left-[2px] -z-10 text-cyan-400 opacity-70"
        animate={{ x: [-2, 2, -1, 0], y: [1, -1, 0, 0] }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "mirror", repeatDelay: Math.random() * 2 }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 -left-[2px] -z-10 text-pink-400 opacity-70"
        animate={{ x: [2, -2, 1, 0], y: [-1, 1, 0, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, repeatType: "mirror", repeatDelay: Math.random() * 2 }}
      >
        {text}
      </motion.span>
    </div>
  );
};

interface SectionHeadingProps { children: ReactNode; number: string; }
const SectionHeading = ({ children, number }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex items-end gap-4 mb-12 border-b border-slate-800 pb-4"
  >
    <span className="text-lime-400 font-mono text-xl sm:text-2xl leading-none">[{number}]</span>
    <h2 className="font-sans font-bold text-3xl sm:text-5xl uppercase tracking-tighter text-slate-100 leading-none">
      {children}
    </h2>
  </motion.div>
);

interface TechBadgeProps { children: ReactNode; }
const TechBadge = ({ children }: TechBadgeProps) => (
  <span className="px-3 py-1 text-xs font-mono border border-slate-700 bg-slate-900/50 text-slate-300 rounded-sm uppercase tracking-wider hover:border-lime-400/50 hover:text-lime-400 transition-colors">
    {children}
  </span>
);

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <>
      <div className="crt" />
      <div className="noise" />

      <motion.div
        className="custom-cursor hidden md:block"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "var(--color-accent-lime)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />

      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
        <div className="font-sans font-bold text-xl tracking-tighter uppercase">
          A.D<span className="text-lime-400">_</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono text-sm">
          <a href="#about" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:text-lime-400 transition-colors">[01: About]</a>
          <a href="#experience" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:text-lime-400 transition-colors">[02: Experience]</a>
          <a href="#projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:text-lime-400 transition-colors">[03: Projects]</a>
        </div>
      </nav>

      <main className="relative z-10 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto selection:bg-lime-400 selection:text-slate-900">

        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center pt-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="font-mono text-lime-400 text-lg md:text-xl flex items-center gap-2">
              <Terminal size={20} />
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
                  <GlitchText text="Daphara" />
                </motion.div>
              </div>
            </h1>

            <div className="font-mono text-slate-400 text-lg md:text-xl max-w-2xl mt-8">
              <TypewriterText text="> Software Engineer based in Boston, MA." delay={1} />
              <br/>
              <TypewriterText text="> Specializing in scalable backend systems, AWS, and MCP integrations." delay={1.5} />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="flex gap-4 pt-12"
            >
              <a
                href="#experience"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="font-mono text-sm bg-lime-400 text-slate-900 px-6 py-3 uppercase font-bold tracking-wider hover:bg-white transition-colors"
              >
                View Logs //
              </a>
              <a
                href="mailto:akhildaphara@gmail.com"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-32 relative">
          <SectionHeading number="01">Experience</SectionHeading>

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
                <div className="text-slate-500 uppercase tracking-widest text-xs mb-4">Genesys, USA</div>
              </div>
              <div className="space-y-6">
                <h3 className="font-sans font-bold text-3xl uppercase tracking-tight text-slate-200 group-hover:text-cyan-400 transition-colors">
                  Software Engineer
                </h3>
                <ul className="font-mono text-slate-400 space-y-4 text-sm md:text-base border-l-2 border-slate-800 pl-6">
                  <li className="relative before:content-['>'] before:absolute before:-left-10 before:text-lime-400">
                    Piloted <span className="text-slate-200">Cursor AI</span> to increase team productivity, successfully scaling the tool to 100% of the organization.
                  </li>
                  <li className="relative before:content-['>'] before:absolute before:-left-10 before:text-lime-400">
                    Won internal hackathon prize for building a <span className="text-slate-200">Model Context Protocol (MCP) server</span> that integrated public APIs with IDEs and Amazon Bedrock.
                  </li>
                  <li className="relative before:content-['>'] before:absolute before:-left-10 before:text-lime-400">
                    Designed and implemented <span className="text-slate-200">AWS Step Function workflow</span> for distributed computing, reducing compute time from hours to under 18 minutes.
                  </li>
                  <li className="relative before:content-['>'] before:absolute before:-left-10 before:text-lime-400">
                    Developed a core <span className="text-slate-200">Node.js utility library</span> adopted by multiple teams to standardize external integrations (HTTP, Database, S3).
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
                <div className="text-slate-500 uppercase tracking-widest text-xs mb-4">Genesys, USA</div>
              </div>
              <div className="space-y-6">
                <h3 className="font-sans font-bold text-3xl uppercase tracking-tight text-slate-200 group-hover:text-pink-400 transition-colors">
                  Software Engineer Intern
                </h3>
                <ul className="font-mono text-slate-400 space-y-4 text-sm md:text-base border-l-2 border-slate-800 pl-6">
                  <li className="relative before:content-['>'] before:absolute before:-left-10 before:text-lime-400">
                    Led the successful migration of microservices from <span className="text-slate-200">Hystrix to Resilience4j</span>, ensuring fault tolerance without disrupting production.
                  </li>
                  <li className="relative before:content-['>'] before:absolute before:-left-10 before:text-lime-400">
                    Decoupled testing architecture by enforcing strict separation of concerns, resulting in a more maintainable unit testing suite.
                  </li>
                  <li className="relative before:content-['>'] before:absolute before:-left-10 before:text-lime-400">
                    Streamlined a <span className="text-slate-200">Kotlin library</span> to accommodate new features and introduce an efficient code reuse path.
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
                <div className="text-slate-500 uppercase tracking-widest text-xs mb-4">Credence Analytics, India</div>
              </div>
              <div className="space-y-6">
                <h3 className="font-sans font-bold text-3xl uppercase tracking-tight text-slate-200 group-hover:text-cyan-400 transition-colors">
                  Trainee Asst Consultant - Software
                </h3>
                <ul className="font-mono text-slate-400 space-y-4 text-sm md:text-base border-l-2 border-slate-800 pl-6">
                  <li className="relative before:content-['>'] before:absolute before:-left-10 before:text-lime-400">
                    Collaborated with the CEO in building ERP system using <span className="text-slate-200">Python, JavaScript, HTML, CSS, and SQL</span>.
                  </li>
                  <li className="relative before:content-['>'] before:absolute before:-left-10 before:text-lime-400">
                    Deployed Application Monitoring System on Linux Instance using <span className="text-slate-200">Elasticsearch</span> for effortless monitoring.
                  </li>
                  <li className="relative before:content-['>'] before:absolute before:-left-10 before:text-lime-400">
                    Programmed support of Docker and Oracle database in existing CLI tool, cutting manual work by &gt;50%.
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

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-32 relative">
          <SectionHeading number="02">Projects / Education</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group border border-slate-800 bg-slate-900/30 p-8 hover:border-lime-400/50 transition-colors relative overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
              <div className="font-mono text-lime-400 mb-4 flex justify-between items-center">
                <Database size={24} />
                <span className="text-xs tracking-widest uppercase">Project</span>
              </div>
              <h3 className="font-sans font-bold text-2xl uppercase mb-4 text-slate-100 group-hover:text-lime-400 transition-colors">
                Algorithm Management System
              </h3>
              <p className="font-mono text-slate-400 text-sm mb-6 line-clamp-3">
                Created algorithm repository web application as part of grad course using Java lambda functions as backend. Hosted on AWS ecosystem (S3, API Gateway, RDS, Cognito).
              </p>
              <div className="flex flex-wrap gap-2">
                <TechBadge>Java</TechBadge>
                <TechBadge>AWS S3</TechBadge>
                <TechBadge>Lambda</TechBadge>
                <TechBadge>MySQL</TechBadge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group border border-slate-800 bg-slate-900/30 p-8 hover:border-pink-400/50 transition-colors relative overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
              <div className="font-mono text-pink-400 mb-4 flex justify-between items-center">
                <Server size={24} />
                <span className="text-xs tracking-widest uppercase">Project</span>
              </div>
              <h3 className="font-sans font-bold text-2xl uppercase mb-4 text-slate-100 group-hover:text-pink-400 transition-colors">
                CREDCLI & Parsifier
              </h3>
              <p className="font-mono text-slate-400 text-sm mb-6 line-clamp-3">
                Created a NodeJS CLI tool to automate version control with extensive unit testing. Published "Parsifier" NPM package to modify config files, eliminating manual work.
              </p>
              <div className="flex flex-wrap gap-2">
                <TechBadge>NodeJS</TechBadge>
                <TechBadge>Git</TechBadge>
                <TechBadge>Unit Tests</TechBadge>
                <TechBadge>NPM</TechBadge>
              </div>
            </motion.div>

            {/* Education Blocks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="border-l-2 border-slate-800 pl-6 relative before:content-[''] before:absolute before:-left-[9px] before:top-0 before:w-4 before:h-4 before:bg-slate-900 before:border-2 before:border-lime-400">
                <div className="font-mono text-lime-400 text-sm mb-1">May 2023</div>
                <h4 className="font-sans font-bold text-xl uppercase text-slate-200">MS in Computer Science</h4>
                <div className="font-mono text-slate-500 text-sm">Worcester Polytechnic Institute</div>
              </div>

              <div className="border-l-2 border-slate-800 pl-6 relative before:content-[''] before:absolute before:-left-[9px] before:top-0 before:w-4 before:h-4 before:bg-slate-900 before:border-2 before:border-cyan-400">
                <div className="font-mono text-cyan-400 text-sm mb-1">Oct 2020</div>
                <h4 className="font-sans font-bold text-xl uppercase text-slate-200">BE in Information Technology</h4>
                <div className="font-mono text-slate-500 text-sm">University of Mumbai</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-24 border-t border-slate-800 mt-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-sans font-bold text-2xl uppercase tracking-tighter">
            <GlitchText text="Akhil Daphara" />
          </div>

          <div className="flex gap-6">
            <a href="https://linkedin.com/in/akhildaphara" target="_blank" rel="noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-slate-400 hover:text-lime-400 transition-colors">
              <User size={24} />
            </a>
            <a href="mailto:akhildaphara@gmail.com" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:7744189117" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="font-mono text-slate-400 hover:text-pink-400 transition-colors">
              774-418-9117
            </a>
          </div>

          <div className="font-mono text-xs text-slate-600 uppercase tracking-widest text-center md:text-right">
            <div>© {new Date().getFullYear()} Akhil Daphara</div>
            <div>Built for the command line</div>
          </div>
        </footer>

      </main>
    </>
  );
}
