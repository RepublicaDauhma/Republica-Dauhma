"use client";
import React from "react";
import dynamic from "next/dynamic";
import "./index.css";
import Hero from "../../components/Hero/Hero";
import PitchSection from "../../components/Pitch/Pitch";
import Map from "../../components/Map/Map";
import Carousel from "../../components/Carousel/Carousel";
import { House, Pin } from "lucide-react";
import Pins from "../../components/Pins/Pins";
import DownButton from "../../components/DownButton/DownButton";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Faces from "../../components/Faces/Faces";
import Head from "next/head";
import {GoogleTag} from "../../components/GoogleTag/GoogleTag";

const HomePage = () => {
  return (
    <>
      <GoogleTag />
      <Head>
        <meta
          name="google-site-verification"
          content="it8QHeDMvOGypE7b_9N-M0-m_zw8HOe7TTFoU3H2CM8"
        />
      </Head>
      <div className="min-h-screen !scroll-smooth">
        {/* Hero Section */}
        <Hero></Hero>
        {/* Features Section */}
        <PitchSection></PitchSection>
        {/* About the House Section */}
        <section id="sobre-casa" className="bg-white py-20">
          <div className="Flex-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              Sobre a Casa
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-center">
              Esse aqui será o lugar em que você passará os próximos (melhores)
              dias da sua vida.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 bg-white border border-gray-300 rounded-xl p-6 shadow-md transition duration-300">
              <Map>{/*Map component*/}</Map>
              {/* Carousel */}
              <Carousel></Carousel>
            </div>
            <div>
              <Pins></Pins>
            </div>
          </div>
          <DownButton></DownButton>
        </section>
        {/* About Us Section */}
        <About></About>
        <Faces></Faces>
        {/* Contact Section */}
        <Contact></Contact>
      </div>
    </>
  );
};
export default HomePage;
