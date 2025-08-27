"use client";
import HeroBg from "@/public/hero-bg.png";
import HeroShoe from "@/public/hero-shoe.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={HeroBg}
          alt="Running people"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* <div className="absolute -top-10 right-0 w-[150%] h-[200px] rotate-12 bg-pink-300 opacity-70" />
      <div className="absolute top-40 right-0 w-[150%] h-[200px] rotate-12 bg-gray-200 opacity-70" /> */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 max-w-7xl w-full">
        <div className="text-left">
          <p className="text-pink-600 font-semibold">Bold & Sporty</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
            Style That Moves <br /> With You.
          </h1>
          <p className="mt-4 text-gray-700 max-w-md">
            Not just style. Not just comfort. Footwear that effortlessly moves
            with your every step.
          </p>
          <button className="mt-6 px-6 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:bg-gray-900 transition">
            Find Your Shoe
          </button>
        </div>
        <div className="relative flex items-center justify-center">
          {/* <span className="absolute -top-10 left-12 text-6xl md:text-7xl font-extrabold text-orange-500">
            AIR
          </span> */}
          <Image
            src={HeroShoe}
            alt="Shoe"
            width={500}
            height={300}
            className="relative z-10 drop-shadow-2xl"
          />
          {/* <span className="absolute bottom-0 right-8 text-6xl md:text-7xl font-extrabold text-black">
            JORDEN
          </span> */}
        </div>
      </div>
    </motion.section>
  );
}
