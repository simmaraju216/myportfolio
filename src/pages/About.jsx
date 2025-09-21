import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="relative bg-black min-h-screen px-6 py-20 overflow-hidden text-gray-200">
      {/* Galaxy blobs */}
      <div className="absolute w-[900px] h-[900px] bg-purple-800/40 rounded-full blur-[200px] top-[-200px] left-[-200px] -z-20"></div>
      <div className="absolute w-[700px] h-[700px] bg-blue-800/30 rounded-full blur-[180px] bottom-[-150px] right-[-150px] -z-20"></div>
      <div className="absolute w-[600px] h-[600px] bg-pink-700/30 rounded-full blur-[160px] top-[40%] left-[30%] -z-20"></div>

      {/* Twinkling stars */}
      <div className="absolute inset-0 -z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Image + About Content */}
        <div
          className="flex flex-col md:flex-row items-center md:items-start gap-10"
          data-aos="fade-up"
        >
          {/* Profile Image */}
          <img
            src="/Raju.jpg"
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl shadow-2xl border-4 border-purple-500/50 transform transition duration-500 hover:scale-105 hover:rotate-2"
          />

          {/* About Text */}
          <div
            className="flex-1 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/10 transition transform hover:scale-105"
            data-aos="fade-left"
          >
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-text">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-pink-400">Full Stack Developer</span> with strong skills in both front-end and back-end technologies.
              I love building dynamic, responsive, and accessible web applications.
              <br /><br />
              With a Computer Science background, I’ve honed my skills in multiple programming languages and frameworks.
              I’m always eager to learn new technologies and improve my craft.
              <br /><br />
              In my free time, I enjoy contributing to open-source projects and exploring new tech 🚀.
            </p>
          </div>
        </div>

        {/* Skills & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Skills */}
          <div
            className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-6 border border-white/10 transition transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Skills</h3>
            <ul className="grid grid-cols-2 gap-3 text-gray-200">
              <li>C</li>
              <li>Python</li>
              <li>Java</li>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>

          {/* Education */}
          <div
            className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-6 border border-white/10 transition transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Education</h3>
            <ul className="space-y-3 text-gray-200">
              <li>
                <span className="font-semibold text-pink-400">2026</span> – B-Tech from Avanthi Engineering College
              </li>
              <li>
                <span className="font-semibold text-pink-400">2020 - 2022</span> – Intermediate from Sri Sampath Sai Junior College
              </li>
              <li>
                <span className="font-semibold text-pink-400">2019</span> – SSC from Z.P.H.School (Budithi)
              </li>
            </ul>
          </div>
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

        /* Gradient shimmer for headings */
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
  );
}
