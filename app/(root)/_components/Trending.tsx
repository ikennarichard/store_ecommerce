"use client";
import Trending1 from "@/public/trending-1.png";
import Trending2 from "@/public/trending-2.png";
import Trending3 from "@/public/trending-3.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Trending() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full px-6 md:px-12 py-12 bg-black"
    >
      <h2 className="text-gray-400 font-semibold text-lg mb-6">Trending Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative col-span-1 md:col-span-2 h-[400px] rounded-xl overflow-hidden">
          <Image
            src={Trending1}
            alt="React Presto"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-8 md:px-12">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">
              REACT PRESTO
            </h3>
            <p className="text-gray-200 mt-2 max-w-md">
              With React foam for the most comfortable Presto ever.
            </p>
            <button className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition w-fit">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative h-[250px] rounded-xl overflow-hidden">
          <Image
            src={Trending2}
            alt="Air Max Dia"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <p className="text-white font-medium">
              Summer Must-Haves: Air Max Dia
            </p>
          </div>
        </div>

        <div className="relative h-[250px] rounded-xl overflow-hidden">
          <Image
            src={Trending3}
            alt="Air Jorden 11 Retro Low"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <p className="text-white font-medium">Air Jorden 11 Retro Low LE</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
