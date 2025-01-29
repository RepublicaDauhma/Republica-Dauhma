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

const mapUrls = {
  rodoviaria:
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1849.5628171448734!2d-47.888502361080235!3d-22.006496658186308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94b8772bc3d82bad%3A0x3b0757318990e3c6!2sRua%20Alfredo%20Lopes%2C%201310%20-%20Jardim%20Macarengo%2C%20S%C3%A3o%20Carlos%20-%20SP!3m2!1d-22.0079912!2d-47.8857941!4m5!1s0x94b87768bc7e1353%3A0x5701161b8d0c0d41!2sRodovi%C3%A1ria%20-%20S%C3%A3o%20Carlos%20-%20Rua%20Jacinto%20Favoreto%20-%20Jardim%20Lutfalla%2C%20S%C3%A3o%20Carlos%20-%20SP!3m2!1d-22.0052468!2d-47.8893567!5e0!3m2!1spt-BR!2sbr!4v1738100914445!5m2!1spt-BR!2sbr",
  jau: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1849.5645203753968!2d-47.88931411108014!3d-22.00636610818406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94b8772bc3d82bad%3A0x3b0757318990e3c6!2sRua%20Alfredo%20Lopes%2C%201310%20-%20Jardim%20Macarengo%2C%20S%C3%A3o%20Carlos%20-%20SP!3m2!1d-22.0079912!2d-47.8857941!4m5!1s0x94b870d2bf3370fd%3A0xef20e7c616e0d79f!2sJa%C3%BA%20Serve%20Supermercados%20-%20Avenida%20S%C3%A3o%20Carlos%20-%20Centro%2C%20S%C3%A3o%20Carlos%20-%20SP!3m2!1d-22.004745999999997!2d-47.8904675!5e0!3m2!1spt-BR!2sbr!4v1738101403881!5m2!1spt-BR!2sbr",
  ufscar:
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14797.600726287637!2d-47.89447778084596!3d-21.99597248263735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94b8772bc3d82bad%3A0x3b0757318990e3c6!2sRua%20Alfredo%20Lopes%2C%201310%20-%20Jardim%20Macarengo%2C%20S%C3%A3o%20Carlos%20-%20SP!3m2!1d-22.0079912!2d-47.8857941!4m5!1s0x94b870d8899b96c5%3A0x26db4c677a5af1d4!2sUFSCar%20-%20Universidade%20Federal%20de%20S%C3%A3o%20Carlos%20-%20Rodovia%20Washington%20Lu%C3%ADs%20-%20Monjolinho%2C%20S%C3%A3o%20Carlos%20-%20SP!3m2!1d-21.983994199999998!2d-47.881537099999996!5e0!3m2!1spt-BR!2sbr!4v1738101602968!5m2!1spt-BR!2sbr",
  USP: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7398.32524248084!2d-47.896539703360844!3d-22.005079122328993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94b8772bc3d82bad%3A0x3b0757318990e3c6!2sRua%20Alfredo%20Lopes%2C%201310%20-%20Jardim%20Macarengo%2C%20S%C3%A3o%20Carlos%20-%20SP!3m2!1d-22.0079912!2d-47.8857941!4m5!1s0x94b870cccdcf09dd%3A0x9fd71af8a6c23c26!2sUSP%20S%C3%A3o%20Carlos%20-%20Avenida%20Trabalhador%20S%C3%A3o%20Carlense%20-%20Parque%20Arnold%20Schimidt%2C%20S%C3%A3o%20Carlos%20-%20SP!3m2!1d-22.0041141!2d-47.8984947!5e0!3m2!1spt-BR!2sbr!4v1738101553509!5m2!1spt-BR!2sbr",
};

export default function Pitch() {
  const [selectedDestination, setSelectedDestination] = useState("rodoviaria");

  return (
    <div className="flex-auto">
      <div className="relative">
        <select
          className="max-w-xl mx-auto block p-3 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={selectedDestination}
          onChange={(e) => setSelectedDestination(e.target.value)}
        >
          <option value="rodoviaria">Rodoviária</option>
          <option value="jau">Supermercado Jaú</option>
          <option value="ufscar">UFSCAR</option>
          <option value="USP">USP</option>
        </select>
        <div className="w-full max-w-4xl mx-auto h-[300px] md:h-[450px] rounded-lg overflow-hidden">
          <iframe
            src={mapUrls[selectedDestination]}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="flex-initial"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
