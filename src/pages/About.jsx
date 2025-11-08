import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true, offset: 80 });
  }, []);

  const skills = [
    { name: "HTML / CSS", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "React", level: 82 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 },
    { name: "Git & GitHub", level: 78 },
  ];

  const facts = [
    { label: "Projects", value: "10+" },
    { label: "Certifications", value: "9" },
    { label: "Tech Stack", value: "8+" },
    { label: "Hackathon / Courses", value: "5+" },
  ];

  const timeline = [
    { year: "2026", title: "B-Tech", place: "Avanthi Engineering College" },
    { year: "2020–2022", title: "Intermediate", place: "Sri Sampath Sai Junior College" },
    { year: "2019-2020", title: "SSC", place: "Z.P.H. School (Budithi)" },
  ];

  return (
    <section className="relative min-h-screen bg-slate-950 text-slate-100">
      {/* ambient background */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-600/25 via-violet-600/20 to-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-600/20 via-violet-600/20 to-indigo-600/20 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">
            About Me
          </h1>
          <p className="mt-3 text-slate-300 max-w-3xl mx-auto">
            I’m <span className="text-fuchsia-300 font-medium">Simma Raju</span>, a Full-Stack Developer focused on
            building fast, accessible, and delightful web experiences. I care about clean code, smooth UX, and
            maintainable systems.
          </p>
        </header>

        {/* Top grid: Profile + Summary */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile card */}
          <div
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-4">
              <img
                src="/Raju.jpg" /* keep this image in /public */
                alt="Raju profile"
                loading="lazy"
                className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover shadow-lg"
              />
              <div>
                <h2 className="text-xl font-semibold text-indigo-300">Simma Raju</h2>
                <p className="text-sm text-slate-300">Full-Stack Developer • React • Node.js</p>
                <div className="mt-3 flex gap-2">
                  <a
                    href="/resume (2).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-md text-xs font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition"
                  >
                    Download CV
                  </a>
                  <a
                    href="/contact"
                    className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-100 bg-slate-800/70 border border-white/10 hover:bg-slate-800/90 transition"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-slate-300 leading-relaxed">
              I enjoy turning complex ideas into simple, usable interfaces. My work blends solid engineering practices
              with thoughtful design — keeping performance, accessibility, and developer experience front and center.
            </p>

            {/* Quick facts */}
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {facts.map((f) => (
                <li
                  key={f.label}
                  className="rounded-lg bg-slate-900/60 border border-white/10 p-3 text-center"
                >
                  <div className="text-lg font-semibold text-fuchsia-300">{f.value}</div>
                  <div className="text-[11px] uppercase tracking-wide text-slate-400">{f.label}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* What I do / Value */}
          <div
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-lg font-semibold text-indigo-300">What I Do</h3>
            <ul className="mt-3 space-y-3 text-slate-300">
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Build responsive, accessible UIs in React with clean component architectures.
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Design APIs, integrate services, and ship maintainable Node.js backends.
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Optimize performance, reduce bundle size, and improve DX via tooling.
              </li>
            </ul>

            {/* Skills bars */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-slate-300">Core Skills</h4>
              <div className="mt-4 space-y-4">
                {skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800/70 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 animate-grow"
                        style={{ width: `${s.level}%`, animationDelay: `${i * 100}ms` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="/projects"
                className="px-3 py-1.5 rounded-md text-xs font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition"
              >
                View Projects
              </a>
              <a
                href="/certifications"
                className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-100 bg-slate-800/70 border border-white/10 hover:bg-slate-800/90 transition"
              >
                Certifications
              </a>
            </div>
          </div>
        </div>

        {/* Timeline + Values */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Education timeline */}
          <div
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
            data-aos="fade-up"
          >
            <h3 className="text-lg font-semibold text-violet-300">Education</h3>
            <ol className="mt-4 relative border-s border-slate-700/60 pl-5">
              {timeline.map((e, i) => (
                <li key={e.year} className="mb-5 relative">
                  <span className="absolute -left-[9px] mt-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                  <div className="text-xs text-slate-400">{e.year}</div>
                  <div className="text-sm font-medium text-slate-200">{e.title}</div>
                  <div className="text-sm text-slate-400">{e.place}</div>
                </li>
              ))}
            </ol>
          </div>

          {/* Principles / How I work */}
          <div
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-lg font-semibold text-indigo-300">How I Work</h3>
            <ul className="mt-3 space-y-3 text-slate-300">
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Ship iteratively: deliver value early, refine with feedback.
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Write readable code, document decisions, and automate where it helps.
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Respect accessibility, performance budgets, and UX standards.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
