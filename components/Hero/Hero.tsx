import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // assuming the ArrowRight component is in the same directory

const Hero = () => {
  return (
    <section id="inicio" className="bg-gray-800 text-white py-24">
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
            Enxergue o mundo de outra perspectiva, aproveite sua graduação para
            viver os melhores dias da sua vida.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href={"#pq-nois"}
              className="relative text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700/10 group"
            >
              <button className="bg-indigo-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-purple-200 transition duration-300 flex items-center gap-2">
                Conheça-nos <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Hero;
