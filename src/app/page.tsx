"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  HousePlus,
  Handshake,
  PersonStanding,
  PawPrint,
  TvMinimalPlay,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import "./index.css";
import Hero from "../../components/Hero/Hero";
import PitchSection from "../../components/Pitch/Pitch";

const icons = [
  "ArrowRight",
  "ArrowLeft",
  "HousePlus",
  "Handshake",
  "PersonStanding",
  "PawPrint",
  "TvMinimalPlay",
];

const dynamicIcons = icons.reduce((acc, icon) => {
  acc[icon] = dynamic(
    () => import("lucide-react").then((module) => module[icon]),
    {
      ssr: false,
    }
  );
  return acc;
}, {});

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const rooms = [
    {
      image: "/quartobixos.jpeg",
      title: "Quarto dos Bixos",
      description:
        "Esse aqui é seu futuro quarto, conta com área de estudos e banheiro.",
    },
    {
      image: "/mesabixos.jpeg",
      title: "Área de estudos do quarto",
      description: "Aqui rola bastante estudo e jogatina!",
    },
    {
      image: "/banheirosbixos.jpeg",
      title: "Banheiro dos bixos",
      description: "Suíte do quarto, compondo 1 dos 4 banheiros da casa.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % rooms.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  return (
    <div className="min-h-screen !scroll-smooth">
      {/* Hero Section */}
      <Hero></Hero>
      {/* Features Section */}
      <PitchSection></PitchSection>
      {/* About the House Section */}
      <section id="sobre-casa" className=" bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre a Casa</h2>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={rooms[currentSlide].image}
                alt={rooms[currentSlide].title}
                width={800}
                height={400}
                className="mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-xl font-bold">
                  {rooms[currentSlide].title}
                </h3>
                <p>{rooms[currentSlide].description}</p>
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-r"
            >
              <ArrowLeft className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-l"
            >
              <ArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="sobre-nos" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Nós</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Moradores</h3>
              <p className="text-gray-600">Conheça nossa família e história.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Eventos</h3>
              <p className="text-gray-600">
                Descubra nossos eventos tradicionais.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Festas</h3>
              <p className="text-gray-600">
                Veja nossas celebrações memoráveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Nome</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Idade</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Curso</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Faculdade</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
