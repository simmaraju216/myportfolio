import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const text = "Hi, I'm Raju";
    let i = 0;
    const t = setInterval(() => {
      setTypedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(t);
    }, 90);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 text-center bg-black text-white">
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          {typedText}
          <span className="inline-block ml-1 animate-blink">|</span>
        </h1>

        <p className="mt-6 text-gray-300 text-base sm:text-lg">
          A <span className="text-pink-400 font-semibold">Full Stack Developer</span> exploring modern web technologies ✨
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow hover:scale-105 transition"
          >
            🚀 View My Work
          </Link>
          <a
            href="/resume (2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-medium shadow hover:scale-105 transition"
          >
            📄 Download CV
          </a>
        </div>
      </div>

      {/* background decorative elements (reduced on small screens for perf) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hidden md:block absolute -left-20 -top-20 w-72 h-72 rounded-full bg-purple-600 opacity-20 blur-3xl animate-float" />
        <div className="hidden md:block absolute right-10 bottom-10 w-56 h-56 rounded-full bg-pink-500 opacity-20 blur-2xl animate-float-slow" />
      </div>
    </main>
  );
}
