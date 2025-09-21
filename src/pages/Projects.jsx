import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      link: "#",
    },
    {
      title: "UI/UX Design",
      description: "Create a Figma page using React Vite project.",
      link: "https://project-jade-six-94.vercel.app/",
    },
    {
      title: "Calendar App",
      description: "A calendar application with event scheduling and reminders.",
      link: "https://calendar-pro-two.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
    <section className="relative bg-black px-6 py-20 overflow-hidden text-gray-200">
      {/* Galaxy blobs */}
      <div className="absolute w-[900px] h-[900px] bg-purple-800/40 rounded-full blur-[200px] top-[-200px] left-[-200px] -z-20"></div>
      <div className="absolute w-[700px] h-[700px] bg-blue-800/30 rounded-full blur-[180px] bottom-[-150px] right-[-150px] -z-20"></div>
      <div className="absolute w-[600px] h-[600px] bg-pink-700/30 rounded-full blur-[160px] top-[40%] left-[30%] -z-20"></div>

      {/* Stars */}
      <div className="absolute inset-0 -z-10">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          className="text-4xl md:text-5xl font-bold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-text drop-shadow-lg"
          data-aos="fade-down"
        >
          My Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-lg hover:shadow-purple-500/30 transition transform hover:-translate-y-3 hover:scale-105 p-6"
            >
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">
                {p.title}
              </h3>
              <p className="text-gray-300 mb-6">{p.description}</p>
              <a
                href={p.link}
                className="text-pink-400 hover:text-pink-300 font-medium transition"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        /* Stars twinkle */
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle 3s infinite ease-in-out;
        }

        /* Gradient shimmer for heading */
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 6s ease infinite;
        }
      `}</style>
    </section>
    </div>
  );
}
