import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const galleryItems = [
  // Row 1
  {
    id: 1,
    type: 'video',
    src: "/videos/gallery/video-1.mp4",
    alt: "Ranch Adventure Video",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    type: 'image',
    src: "/images/gallery/gallery-3.png",
    alt: "Scenic View",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    type: 'video',
    src: "/videos/gallery/video-2.mp4",
    alt: "Morning Routine",
    span: "md:col-span-1 md:row-span-1"
  },

  // Row 2 (mixed)
  {
    id: 4,
    type: 'video',
    src: "/videos/gallery/video-5.mp4", // New
    alt: "Horse Training",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 5,
    type: 'video',
    src: "/videos/gallery/video-3.mp4",
    alt: "Group Ride",
    span: "md:col-span-1 md:row-span-1"
  },

  // Row 3 (videos heavy)
  {
    id: 6,
    type: 'video',
    src: "/videos/gallery/video-4.mp4",
    alt: "Sunset Gallop",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 7,
    type: 'image',
    src: "/images/gallery/gallery-6.png",
    alt: "Forest Trail",
    span: "md:col-span-1 md:row-span-1"
  },

  // Row 4
  {
    id: 8,
    type: 'video',
    src: "/videos/gallery/video-6.mp4", // New
    alt: "Stable Life",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 9,
    type: 'image',
    src: "/images/gallery/gallery-5.png",
    alt: "Ranch Atmosphere",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 10,
    type: 'video',
    src: "/videos/gallery/video-7.mp4", // New
    alt: "Riding Lesson",
    span: "md:col-span-1 md:row-span-1"
  },

  // Row 5 & 6 (filling out grid)
  {
    id: 11,
    type: 'video',
    src: "/videos/gallery/video-8.mp4", // New
    alt: "Nature Walk",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 12,
    type: 'video',
    src: "/videos/gallery/video-9.mp4", // New
    alt: "Horse Care",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 13,
    type: 'video',
    src: "/videos/gallery/video-10.mp4", // New
    alt: "Feeding Time",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 14,
    type: 'video',
    src: "/videos/gallery/video-11.mp4", // New
    alt: "Reviewing Footage",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 15,
    type: 'video',
    src: "/videos/gallery/video-12.mp4", // New
    alt: "Preparing for Ride",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 16,
    type: 'video',
    src: "/videos/gallery/video-13.mp4", // New
    alt: "Relaxing at Camp",
    span: "md:col-span-2 md:row-span-1"
  }
];

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-4 bg-stone-50">
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
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              {/* Play icon overlay for videos to indicate interactivity */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/30 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              )}
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
              className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              {(() => {
                const item = galleryItems.find(i => i.id === selectedId);
                if (!item) return null;

                return item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                  />
                ) : (
                  <img
                    src={item.src}
                    alt="Gallery Preview"
                    className="w-full h-full object-contain"
                  />
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
