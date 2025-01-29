import react, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, House } from "lucide-react";

export default function Carousel() {
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
        <div className="relative mx-auto px-4">
        <div className="text-2xl text-center mx-center my-auto mb-14 mt-2">Quartos</div>
        <div className="overflow-hidden rounded-lg">
        
          <Image
            src={rooms[currentSlide].image}
            alt={rooms[currentSlide].title}
            width={800}
            height={400}
            className="mx-auto w-full h-[400px] md:h-[400px] object-cover"
          />
          <div className="bg-black bg-opacity-50 text-white p-4">
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
    );
  }
