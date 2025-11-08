import { useState } from "react";
import { FaPaperPlane, FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState(null);

  // Small client-side handler that would POST to your backend.
  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = Object.fromEntries(form.entries());

    try {
      // TODO: replace '/api/contact' with your own contact endpoint (Netlify, Formspree, EmailJS, or your server)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("Sent — thank you!");
      e.target.reset();
    } catch (err) {
      // fallback to mailto
      setStatus("Could not send directly. Opening mail client...");
      const mailto = `mailto:simmaraju216@gmail.com?subject=${encodeURIComponent("Contact from portfolio")}&body=${encodeURIComponent(payload.message || "")}`;
      window.location.href = mailto;
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-gray-200 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Contact Me</h2>
          <p className="text-gray-300 mb-4"><FaPaperPlane className="inline mr-2 text-pink-400" /> simmaraju216@gmail.com</p>
          <p className="text-gray-300 mb-6"><FaPhone className="inline mr-2 text-blue-300" /> 7337301752</p>

          <div className="flex gap-4 text-2xl">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500"> <FaFacebook/> </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500"> <FaInstagram/> </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400"> <FaLinkedin/> </a>
            <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white"> <FaGithub/> </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 p-6 rounded-lg border border-white/10">
          <label className="block mb-3">
            <span className="text-sm text-gray-300">Name</span>
            <input name="name" required className="mt-1 block w-full rounded-md bg-black/40 p-3 text-gray-200" />
          </label>

          <label className="block mb-3">
            <span className="text-sm text-gray-300">Email</span>
            <input name="email" type="email" required className="mt-1 block w-full rounded-md bg-black/40 p-3 text-gray-200" />
          </label>

          <label className="block mb-4">
            <span className="text-sm text-gray-300">Message</span>
            <textarea name="message" rows="5" required className="mt-1 block w-full rounded-md bg-black/40 p-3 text-gray-200" />
          </label>

          <button type="submit" className="w-full py-3 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold">
            Send Message
          </button>

          {status && <p className="mt-3 text-sm text-green-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}
