'use client'

import React from 'react'
import {motion} from 'framer-motion'
import { Card } from '@/components';

const products = [
  {
    id: 1,
    title: "Air Max Pulse",
    subtitle: "Men's Shoes",
    meta: "6 Colour",
    price: 149.99,
    imageSrc: "/shoes/shoe-1.jpg",
    badge: { label: "New", tone: "orange" as const },
  },
  {
    id: 2,
    title: "Air Zoom Pegasus",
    subtitle: "Men's Shoes",
    meta: "4 Colour",
    price: 129.99,
    imageSrc: "/shoes/shoe-2.webp",
    badge: { label: "Hot", tone: "red" as const },
  },
  {
    id: 3,
    title: "InfinityRN 4",
    subtitle: "Men's Shoes",
    meta: "6 Colour",
    price: 159.99,
    imageSrc: "/shoes/shoe-3.webp",
    badge: { label: "Trending", tone: "green" as const },
  },
];

export default function BestSeller() {
  return (
   <section aria-labelledby="latest" className="p-10 mt-10">
        <motion.h2
          id="latest"
          className="mb-6 text-heading-3 text-dark-900"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Best of Air Max
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card
                title={p.title}
                subtitle={p.subtitle}
                meta={p.meta}
                imageSrc={p.imageSrc}
                price={p.price}
                badge={p.badge}
                href={`/products/${p.id}`}
              />
            </motion.div>
          ))}
        </div>
      </section>
  )
}
