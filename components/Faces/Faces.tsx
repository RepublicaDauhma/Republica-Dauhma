import React from "react";
import Link from "next/link";
import Image from "next/image";
import { JSX } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";

interface Feature {
  image: string;
  title: string;
  link: string;
}
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const features: Feature[] = [
  {
    image: `${basePath}/scot.jpeg`,
    title: "Scot",
    link: "https://wa.me/5519998305570/",
  },
  {
    image: `${basePath}/scot.jpeg`,
    title: "Pomba",
    link: "https://wa.me/5511946826396/",
  },
  {
    image: `${basePath}/coroinha.jpeg`,
    title: "Coroinha",
    link: "https://wa.me/5511971397539/",
  },
];

export default function Faces(): JSX.Element {
  return (
    <section id="faces" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Contate um dos nossos moradores!
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <h2 className="font-sm text-gray-900 text-center">
                {feature.title}
              </h2>
              <div className="py-6 flex justify-center">
                <div className="w-[125px] h-[125px] rounded-full overflow-hidden">
                  <Link href={feature.link}>
                    <Image
                      src={feature.image}
                      alt="imagem do morador"
                      width={125}
                      height={125}
                      className="object-cover w-full h-full"
                    />
                  </Link>
                </div>
                
              </div>
              <Link
                    href={feature.link}
                    className="relative text-white align-center hover:text-purple-200 rounded-md text-sm font-medium hover:bg-purple-700/10 group justify-center" 
                  >
                    <button className="mx-auto bg-indigo-400 justify-center text-black px-6 py-2 rounded-lg font-semibold hover:bg-purple-200 transition duration-300 flex items-center gap-2">
                      Fale conosco! <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
