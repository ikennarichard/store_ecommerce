"use client";
import FeatureBg from "@/public/feature.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Showcase() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={FeatureBg}
          alt="Nike React Presto"
          fill
          className="object-contain translate-x-64"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 max-w-7xl w-full">
        <div className="text-left">
          <p className="text-pink-600 font-semibold">Bold & Sporty</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2 uppercase">
            Nike React <br /> Presto By You.
          </h1>
          <p className="mt-4 text-gray-700 max-w-md">
            Take advantage of brand new, proprietary cushioning technology with
            a fresh pair of Nike react shoes.
          </p>
          <button className="mt-6 px-6 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:bg-gray-900 transition">
            Shop Now
          </button>
        </div>
      </div>
    </motion.section>
  );
}
