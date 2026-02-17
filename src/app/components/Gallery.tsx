import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/gallery-1.png",
    alt: "Horse riding adventure trail",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    src: "/images/gallery/gallery-2.png",
    alt: "Jeep Safari",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    src: "/images/gallery/gallery-3.png",
    alt: "Camping tent sunset",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    src: "/images/gallery/gallery-4.png",
    alt: "Forest trail",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 5,
    src: "/images/gallery/gallery-5.png",
    alt: "Horse ranch",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 6,
    src: "/images/gallery/gallery-6.png",
    alt: "Outdoor adventure group",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 7,
    src: "/images/gallery/gallery-7.png",
    alt: "Horse close up",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 8,
    src: "/images/gallery/gallery-8.png",
    alt: "Scenic mountain view",
    span: "md:col-span-2 md:row-span-1"
  },
];

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Captured Moments</h2>
          <p className="text-lg text-stone-600">
            Experience the magic through the eyes of our riders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${item.span}`}
              onClick={() => setSelectedId(item.id)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={galleryItems.find(i => i.id === selectedId)?.src || ""}
                alt="Gallery Preview"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
