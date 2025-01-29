import React from 'react';
import { Pin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Pins() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20 px-12">
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center gap-4">
          <Pin className="w-8 h-8 text-gray-600" />
          <p className="text-center">
            Atualmente somos em 15 moradores, um cachorro e um gato.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center gap-4">
          <Pin className="w-8 h-8 text-gray-600" />
          <p className="text-center">
            Nos localizamos na Rua Alfredo Lopes, 1310, Jd.Macarengo, São Carlos,
            Brasil.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center gap-4">
          <Pin className="w-8 h-8 text-gray-600" />
          <p className="text-center">
            Nossa casa conta com moradores da USP e UFSCar, de diversos cursos
            diferentes.
          </p>
          
        </div>
        
      </div>
    </div>


  );
}