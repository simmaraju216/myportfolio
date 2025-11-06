import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react";


import logoIcon from "../assets/logoicon.avif";
import portfolioImg from "../assets/portfolioimg.png"; // <-- make sure the filename matches exactly
import ai from "../assets/ai.png";
import aiface from "../assets/aiface.png";
import aisignin from "../assets/aisignin.png";
import aisignup from "../assets/aisignup.png";
import cali from "../assets/cali.png";


export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true, offset: 80 });
  }, []);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal site built with React and Tailwind. Animated sections, responsive layout, and optimized assets.",
      link: "https://myportfolio-six-sigma-78.vercel.app/",
      code: "https://github.com/",
      tech: ["React", "Tailwind", "AOS"],
      highlights: ["SPA routing", "Accessibility", "Animations"],
      image: portfolioImg || logoIcon,               // ✅ imported file
      images: [portfolioImg, logoIcon].filter(Boolean), // ✅ array of imported files
    },
    {
      title: "Virtual Assistant",
      description:
        "MERN-stack assistant with auth, protected routes, and a component-driven UI.",
      link: "https://virtual-asst-1.onrender.com/signup",
      code: "",
      tech: ["React", "Auth", "CSS Modules", "MERN"],
      highlights: ["JWT auth", "Reusable components", "Form validation"],
      image: ai, // set to virtualAsst1 when you add it
      images: [aiface, aisignin, aisignup].filter(Boolean),
    },
    {
      title: "Calendar App",
      description:
        "Lightweight planner with events, reminders, and keyboard shortcuts. Delightful micro-interactions.",
      link: "https://calendar-pro-two.vercel.app/",
      code: "",
      tech: ["React", "LocalStorage"],
      highlights: ["Event CRUD", "Keyboard nav", "Responsive grid"],
      image: cali, // set to calendar1 when you add it
      images: [cali],       // [calendar1, calendar2]
    },
  ];

  const openLightbox = (projectIdx, imgIdx = 0) => {
    setActiveIndex(projectIdx);
    setSlideIndex(imgIdx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const imgsOf = (i) => {
    const p = projects[i];
    if (p.images && p.images.length) return p.images;
    if (p.image) return [p.image];
    return [];
  };

  const nextSlide = () => {
    const imgs = imgsOf(activeIndex);
    if (!imgs.length) return;
    setSlideIndex((s) => (s + 1) % imgs.length);
  };
  const prevSlide = () => {
    const imgs = imgsOf(activeIndex);
    if (!imgs.length) return;
    setSlideIndex((s) => (s - 1 + imgs.length) % imgs.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  return (
    <section className="min-h-screen py-20 px-6 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400"
          data-aos="fade-down"
        >
          My Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => {
            const hasImages = (p.images && p.images.length) || p.image;
            const cover = (p.images && p.images[0]) || p.image;

            return (
              <article
                key={p.title}
                data-aos="fade-up"
                data-aos-delay={idx * 110}
                className="rounded-2xl overflow-hidden relative group"
              >
                <div className="p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/70 via-violet-500/70 to-fuchsia-500/70">
                  <div className="h-full rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/5">
                    <button
                      type="button"
                      onClick={() => hasImages && openLightbox(idx, 0)}
                      className="relative h-44 w-full overflow-hidden rounded-t-2xl focus:outline-none"
                      aria-label={`Open preview of ${p.title}`}
                    >
                      {cover ? (
                        <img
                          src={cover}
                          alt={`${p.title} preview`}
                          loading="lazy"
                          className="h-full w-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-indigo-900/70 via-violet-900/60 to-fuchsia-900/60" />
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                      <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                        <span className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-white/10 blur-md animate-shimmer" />
                      </span>
                      <span className="absolute left-3 top-3 text-[11px] tracking-wide rounded-full px-2 py-1 bg-slate-950/60 border border-white/10">
                        Preview
                      </span>
                    </button>

                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-indigo-300">{p.title}</h3>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.description}</p>

                      <ul className="mt-3 flex flex-wrap gap-2">
                        {p.tech?.map((t) => (
                          <li key={t} className="text-[11px] uppercase tracking-wide bg-white/5 border border-white/10 rounded-md px-2 py-1 text-slate-200">
                            {t}
                          </li>
                        ))}
                      </ul>

                      {p.highlights?.length ? (
                        <ul className="mt-3 space-y-1 text-sm text-slate-300">
                          {p.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2">
                              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      <div className="mt-5 flex items-center gap-3">
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white
                                     bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500
                                     shadow hover:shadow-indigo-500/30 transition-transform hover:-translate-y-0.5"
                        >
                          Live <ExternalLink size={16} />
                        </a>

                        {p.code ? (
                          <a
                            href={p.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-100
                                       bg-slate-800/60 border border-white/10 hover:bg-slate-800/80
                                       transition-transform hover:-translate-y-0.5"
                          >
                            Code <Github size={16} />
                          </a>
                        ) : null}

                        <span className="ml-auto pr-1 text-fuchsia-400 translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video bg-slate-900">
              {(() => {
                const imgs = imgsOf(activeIndex);
                const src = imgs[slideIndex];
                return src ? (
                  <img
                    src={src}
                    alt={`${projects[activeIndex].title} screenshot ${slideIndex + 1}`}
                    className="h-full w-full object-contain"
                    loading="eager"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-indigo-900 via-violet-900 to-fuchsia-900" />
                );
              })()}
              <button onClick={closeLightbox} className="absolute right-3 top-3 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white" aria-label="Close">
                <X size={20} />
              </button>
              <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white" aria-label="Previous image">
                <ChevronLeft size={22} />
              </button>
              <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white" aria-label="Next image">
                <ChevronRight size={22} />
              </button>
              <div className="absolute inset-x-0 bottom-0 p-3 text-center text-sm text-slate-200 bg-gradient-to-t from-black/50 to-transparent">
                {projects[activeIndex].title}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
