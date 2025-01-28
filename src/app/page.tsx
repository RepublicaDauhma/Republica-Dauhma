"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  HousePlus,
  Handshake,
  PersonStanding,
} from "lucide-react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import './index.css'

const icons = [
  'ArrowRight',
  'ArrowLeft',
  'HousePlus',
  'Handshake',
  'PersonStanding',
];

const dynamicIcons = icons.reduce((acc, icon) => {
  acc[icon] = dynamic(() => import('lucide-react').then((module) => module[icon]), {
    ssr: false,
  });
  return acc;
}, {});

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const rooms = [
    {
      image: "/quartobixos.jpeg",
      title: "Quarto dos Bixos",
      description: "Esse aqui é seu futuro quarto, conta com área de estudos e banheiro.",
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
      <section id="inicio" className="bg-gray-800 text-white py-5">
        <Image
          src="/logo dauhma bata branco.png"
          alt="Logo"
          width={200}
          height={200}
          className="mx-auto mb-6 mt-0"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              O lugar onde tradição e inovação
              <span className="block text-purple-300"> se encontram.</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Enxergue o mundo de outra perspectiva, aproveite sua graduação
              para viver os melhores dias da sua vida.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-purple-200 transition duration-300 flex items-center gap-2">
                Conheça-nos <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por quê nos escolher?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experiencie um ambiente de aprendizado e crescimento, amizade e diversão.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <HousePlus color="black" className="w-6 h-6 " />,
                title: "Espaço grande e organizado.",
                description: "Casa grande com amplo espaço de convívio, próxima à rodoviária e no melhor bairro da cidade para universitários.",
              },
              {
                icon: <Handshake color="black" className="w-6 h-6" />,
                title: "Ambiente inclusivo e diverso.",
                description: "Nossa casa aceita e incentiva a pluralidade cultural, com uma atmosfera acolhedora e inclusiva. Aqui você pode ser você mesmo.",
              },
              {
                icon: <PersonStanding color="black" className="w-6 h-6" />,
                title: "Grande rede de apoio.",
                description: "Temos uma grande rede de ex-moradores e agregados, que nos ajudam a ser um lugar de grande apoio para estudantes, principalmente aos recém-chegados. ",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About the House Section */}
      <section id="sobre-casa" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
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
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Nós</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Moradores</h3>
              <p className="text-gray-600">Conheça nossa família e história.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Eventos</h3>
              <p className="text-gray-600">Descubra nossos eventos tradicionais.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Festas</h3>
              <p className="text-gray-600">Veja nossas celebrações memoráveis.</p>
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
