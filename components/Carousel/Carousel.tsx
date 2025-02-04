import react, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, House } from "lucide-react";
import { useRouter } from 'next/router'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const basePath = router.basePath;

  const rooms = [
    {
      image: `${basePath}/quartobixos.jpg`,
      title: "Quarto dos Bixos",
      description:
        "Esse aqui é seu futuro quarto, conta com área de estudos e banheiro.",
    },
    {
      image: `${basePath}/mesabixos.jpg`,
      title: "Área de estudos do quarto",
      description: "Aqui rola bastante estudo e jogatina!",
    },
    {
      image: `${basePath}/banheirosbixos.jpeg`,
      title: "Banheiro dos bixos",
      description: "Suíte do quarto, compondo 1 dos 4 banheiros da casa.",
    },
    {
      image: `${basePath}/garagem.jpg`,
      title: "Garagem",
      description: "Espaço amplo para carros e armazenamento.",
    },
    {
      image: `${basePath}/garagembaixo.jpg`,
      title: "Garagem Inferior",
      description: "Mais um espaço coberto para veículos.",
    },
    {
      image: `${basePath}/garagemfundo.jpg`,
      title: "Garagem Fundo",
      description: "Vista do fundo da garagem.",
    },
    {
      image: `${basePath}/garagemsinuca.jpg`,
      title: "Área de Lazer na Garagem",
      description: "Mesa de sinuca para diversão da galera.",
    },
    {
      image: `${basePath}/portao.jpg`,
      title: "Portão de Entrada",
      description: "Entrada principal da casa.",
    },
    {
      image: `${basePath}/sala.jpg`,
      title: "Sala de Estar",
      description: "Espaço aconchegante para socializar.",
    },
    {
      image: `${basePath}/sala2.jpg`,
      title: "Sala Alternativa",
      description: "Outro ângulo da sala de estar.",
    },
    {
      image: `${basePath}/sala3.jpg`,
      title: "Sala de TV",
      description: "Ambiente confortável para assistir filmes.",
    },
    {
      image: `${basePath}/varandabosque.jpg`,
      title: "Varanda com Vista para o Bosque",
      description: "Vista tranquila para a área verde.",
    },
    {
      image: `${basePath}/varandabosque2.jpg`,
      title: "Varanda Bosque 2",
      description: "Outro ângulo da varanda com vista.",
    },
    {
      image: `${basePath}/varandasala.jpg`,
      title: "Varanda Integrada com Sala",
      description: "Espaço externo conectado com a sala de estar.",
    },
    {
      image: `${basePath}/varandasala2.jpg`,
      title: "Varanda Sala 2",
      description: "Outro ângulo da varanda conectada à sala.",
    },
    {
      image: `${basePath}/varandasala3.jpg`,
      title: "Varanda Sala 3",
      description: "Mais uma perspectiva da varanda da sala.",
    }
  ];
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % rooms.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  return (
    <div className="relative mx-auto px-4">
      <div className="text-2xl text-center mx-center my-auto mb-14 mt-2">
        Quartos
      </div>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={rooms[currentSlide].image}
          alt={rooms[currentSlide].title}
          width={800}
          height={400}
          className="mx-auto w-full h-[400px] md:h-[400px] object-cover"
        />
        <div className="bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-xl font-bold">{rooms[currentSlide].title}</h3>
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
