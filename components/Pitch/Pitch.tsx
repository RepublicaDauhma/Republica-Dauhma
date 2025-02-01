// components/PitchSection.tsx
import React from 'react';
import { HousePlus, Handshake, PersonStanding, PawPrint, TvMinimalPlay, ArrowRight } from 'lucide-react'; // assuming icons are in a separate file
import Link from 'next/link';
import Image from 'next/image';
import { JSX } from 'react/jsx-runtime';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <HousePlus color="black" className="w-6 h-6" />,
    title: "Espaço grande e bem localizado.",
    description:
      "Casa grande com amplo espaço de convívio, próxima à rodoviária e no melhor bairro da cidade para universitários.",
  },
  {
    icon: <Handshake color="black" className="w-6 h-6" />,
    title: "Ambiente inclusivo e diverso.",
    description:
      "Nossa casa aceita e incentiva a pluralidade cultural, com uma atmosfera acolhedora e inclusiva. Aqui você pode ser você mesmo. =)",
  },
  {
    icon: <PersonStanding color="black" className="w-6 h-6" />,
    title: "Grande rede de apoio.",
    description:
      "Temos uma grande rede de ex-moradores e estudantes agregados, que nos ajudam a ser um lugar de grande apoio para os universitários, principalmente aos recém-chegados. ",
  },
  {
    icon: <PawPrint color="black" className="w-6 h-6" />,
    title: "Pet-friendly.",
    description:
      `É comum na cultura da casa que os moradores tenham vontade de adotar animais de estimação durante a graduação. Entretanto, na Dauhma cada tutor é responsável pelo seu próprio pet.`,
  },
  {
    icon: <TvMinimalPlay color="black" className="w-6 h-6" />,
    title: "Internet e streaming ilimitados.",
    description:
      "A casa conta com 600mb de internet fibra e também com uma TV com acesso ilimitado ao Netflix, Disney+, HBO Max, Prime Video, Youtube Premium e Spotify.",
  },
];

const PitchSection = () => {
  return (
    <section id="pq-nois" className="bg-gray-50 py-32 mt-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Por que nos escolher?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experiencie um ambiente de aprendizado e crescimento, amizade e
            diversão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
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
        <div className="flex-auto mx-center grid md:grid-cols-2 gap-8 p-4 md:p-8 lg:p-16 justify-center">
          {features.slice(3).map((feature, index) => (
            <div
              key={index}
              className="flex-auto bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="flex-auto text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <Link href={"#sobre-casa"}>
          <button className="mx-auto bg-indigo-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-purple-200 transition duration-300 flex items-center gap-2">
            Ver Mais<ArrowRight className="w-5 h-5" /></button>
            </Link>
        </div>
      </section>
  );
};

export default PitchSection;