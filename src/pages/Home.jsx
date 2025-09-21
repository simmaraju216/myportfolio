import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    setShowText(true);

    // Typing effect for name
    const text = "Hi, I'm Raju";
    let index = 0;
    const typing = setInterval(() => {
      setTypedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(typing);
    }, 120);

    return () => clearInterval(typing);
  }, []);

  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden bg-black text-white">
      
      {/* Moving stars background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900 to-black opacity-80"></div>
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Background glowing blobs */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl animate-float top-10 left-10 -z-10"></div>
      <div className="absolute w-56 h-56 bg-pink-400 rounded-full opacity-20 blur-2xl animate-float-slow bottom-20 right-20 -z-10"></div>
      <div className="absolute w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-2xl animate-float top-3/4 left-1/4 -z-10"></div>

      {/* Typing animated heading */}
      <h1
        className={`text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-2xl 
        transition duration-1000 ${showText ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      >
        {typedText}
        <span className="animate-blink">|</span>
      </h1>

      {/* Subheading */}
      <p
        className={`text-lg md:text-2xl text-gray-300 max-w-2xl mb-10 transition duration-1000 delay-300 
        ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        A <span className="text-pink-400 font-semibold">Full Stack Developer</span>  exploring the universe of modern web technologies ✨
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <Link
          to="/projects"
          className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg 
          hover:scale-110 hover:shadow-purple-500/50 transition duration-300 focus:ring-2 focus:ring-purple-400"
        >
          🚀 View My Work
        </Link>

        <a
          href="public/resume (2).pdf"
          target="_blank" rel="noopener noreferrer"
          className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-yellow-500 shadow-lg 
          hover:scale-110 hover:shadow-pink-500/50 transition duration-300 focus:ring-2 focus:ring-pink-400"
        >
          📄 Download CV
        </a>
      </div>

      {/* Tailwind animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle infinite ease-in-out;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink {
          display: inline-block;
          margin-left: 2px;
          width: 1ch;
          animation: blink 1s step-start infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
