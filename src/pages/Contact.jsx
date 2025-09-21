import { FaPaperPlane, FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black py-20 overflow-hidden text-gray-200"
    >
      {/* Galaxy blobs */}
      <div className="absolute w-[800px] h-[800px] bg-purple-800/40 rounded-full blur-[200px] top-[-200px] left-[-200px] -z-20"></div>
      <div className="absolute w-[700px] h-[700px] bg-blue-700/30 rounded-full blur-[180px] bottom-[-150px] right-[-150px] -z-20"></div>
      <div className="absolute w-[600px] h-[600px] bg-pink-700/30 rounded-full blur-[160px] top-[40%] left-[30%] -z-20"></div>

      {/* Stars */}
      <div className="absolute inset-0 -z-10">
        {[...Array(50)].map((_, i) => (
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

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Section */}
        <div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-text drop-shadow-lg"
          >
            Contact Me
          </h1>
          <p className="flex items-center gap-3 text-gray-300 mb-3">
            <FaPaperPlane className="text-pink-400" /> simmaraju216@gmail.com
          </p>
          <p className="flex items-center gap-3 text-gray-300 mb-6">
            <FaPhone className="text-blue-400" /> 7337301752
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mb-6 text-3xl">
            <a
              href="https://www.facebook.com/share/1K4iSwpREa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 hover:drop-shadow-[0_0_10px_#3b82f6] transform hover:scale-125 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/selfish_boy____007?igsh=MWN3OGp6dmI5aHFzdA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 hover:drop-shadow-[0_0_10px_#ec4899] transform hover:scale-125 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/simma-raju-827aa6377"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 hover:drop-shadow-[0_0_10px_#60a5fa] transform hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/simmaraju216"  // 🔹 Replace with your actual GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 hover:drop-shadow-[0_0_10px_#ffffff] transform hover:scale-125 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-xl hover:shadow-purple-500/30 transition transform hover:scale-[1.02]">
          <form
            action="mailto:simmaraju216@gmail.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 mb-4 bg-black/40 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 mb-4 bg-black/40 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 mb-4 bg-black/40 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition"
            >
              Submit
            </button>
          </form>
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
  );
}
