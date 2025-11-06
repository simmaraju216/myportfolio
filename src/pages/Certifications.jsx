import { useEffect } from "react";
import { Award } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Certifications() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }, []);

  const certifications = [
    { id: 1, title: "Web Development", issuer: "Code with swaroop", year: "2025", link: "https://drive.google.com/file/d/1ixdLxHBOlUf97Cn2FMbefuQzHf8twFeL/view?usp=drive_link" },
    { id: 2, title: "JavaScript", issuer: "HackerRank", year: "2025", link: "https://drive.google.com/file/d/1ch_gwubMUm9cyKjfbV0H9jv3G3bHjU6s/view?usp=drive_link" },
    { id: 3, title: "Python Essential 1", issuer: "Cisco Networking Academy", year: "2025", link: "https://drive.google.com/file/d/1I2CMUlGDyzdiCQxD1L72R2Mu6oM3-qcU/view?usp=drive_link" },
    { id: 4, title: "Machine Learning", issuer: "CODECNZ", year: "2024", link: "https://drive.google.com/file/d/1hITgR2tYRFEABZCWl92jKP6sAofaITaY/view?usp=drive_link" },
    { id: 5, title: "Data Analytics", issuer: "CODECNZ", year: "2024", link: "https://drive.google.com/file/d/1gxnN5hXZ4T20PoOf4ACqwRuRN3wY-rdf/view?usp=drive_link" },
    { id: 6, title: "Data Analytics with Python internship completion", issuer: "CODECNZ", year: "2024", link: "https://drive.google.com/file/d/1LvPSG-Lyduxym3n7tKfk8bBtFVhGFp5G/view?usp=drive_link" },
    { id: 7, title: "Python Essential 2", issuer: "Cisco Networking Academy", year: "2025", link: "https://www.netacad.com/portal/cert/python-essential-2" },
    { id: 8, title: "CSS", issuer: "HackerRank", year: "2025", link: "https://drive.google.com/file/d/1j4SlvmxuCoX6iK7wmBGTIs2teHfYMN3Y/view?usp=drive_link" },
    { id: 9, title: "CSS, JavaScript, and PHP", issuer: "Udemy", year: "2025", link: "https://drive.google.com/file/d/1jtnf5ziHf13VMadfY0l8nV8HU739l9ML/view?usp=drive_link" },
  ];

  return (
    <section
      id="certifications"
      className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white text-center overflow-hidden"
    >
      {/* soft animated gradient ribbon behind title */}
      <div className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-24 max-w-3xl rounded-full opacity-20 blur-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x" />

      <h2
        className="relative text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
        data-aos="fade-down"
      >
        <Award className="inline-block w-8 h-8 mr-2 text-pink-400 animate-spin-slow" />
        Certifications
        <span
          aria-hidden
          className="block mx-auto mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-width-pulse"
        />
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {certifications.map((cert, i) => (
          <div
            key={cert.id}
            data-aos="zoom-in"
            data-aos-delay={i * 80}
            className="group rounded-xl bg-gray-800/40 backdrop-blur-md shadow-lg border border-gray-700/70 p-6 text-left
                       transition-transform duration-300 will-change-transform
                       hover:-translate-y-2 hover:shadow-pink-500/40"
          >
            <h3 className="text-lg font-bold mb-1 group-hover:text-pink-400 transition-colors">
              {cert.title}
            </h3>
            <p className="text-gray-300">{cert.issuer}</p>
            <p className="text-sm text-gray-400">{cert.year}</p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-pink-400 hover:text-pink-300 font-semibold transition-colors"
            >
              View Certificate
              <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* subtle bottom gradient bar that grows on hover */}
            <span
              aria-hidden
              className="mt-4 block h-[2px] w-0 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
