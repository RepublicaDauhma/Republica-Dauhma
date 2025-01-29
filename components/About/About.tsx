import React from "react";
import { Users, Calendar, PartyPopper } from "lucide-react";
import Link from "next/link";

export default function About() {
  const sections = [
    {
      title: "Moradores",
      description: "Conheça nossos moradores, nossa segunda",
      icon: Users,
      color: "text-blue-600",
      hoverColor: "group-hover:text-blue-700",
      link: "https://www.instagram.com/p/C7dLj8UgRgz/",
    },
    {
      title: "Eventos",
      description: "Fique por dentro dos eventos que nós produzimos.",
      icon: Calendar,
      color: "text-green-600",
      hoverColor: "group-hover:text-green-700",
      link: "https://www.instagram.com/p/DDiAm4Yhs0x/",
    },
    {
      title: "Festas",
      description: "Veja as festas que nossa casa fez, e também as que participamos.",
      icon: PartyPopper,
      color: "text-purple-600",
      hoverColor: "group-hover:text-purple-700",
      link: "https://www.instagram.com/p/ClMu15MgrDi/",
    },
  ];

  return (
    <section id="sobre-nos" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Nós</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
            <Link href={section.link}>
              <div
                key={index}
                className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-6 ${section.color}`}>
                    <Icon
                      size={48}
                      className={`transition-colors duration-300 ${section.hoverColor}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-gray-900">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    {section.description}
                  </p>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}