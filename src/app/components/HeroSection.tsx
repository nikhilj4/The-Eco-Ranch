import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <video
                    src="/hero-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="size-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
            </div>

            <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-none text-white">
                        The Eco Ranch
                    </h1>
                    <p className="text-xl md:text-3xl font-semibold text-[#F2A65A] mb-8 font-heading">
                        Best Horse Safari in Bangalore
                    </p>
                    <p className="text-lg md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                        Where every step, trot, and breeze through the trees is part of a story. Join us for a horseback safari designed to blend comfort, adventure, and meaningful connection.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            asChild
                            size="lg"
                            className="h-14 rounded-full px-8 text-lg bg-[#F2A65A] text-white hover:bg-[#F2A65A]/90 font-bold tracking-wide shadow-xl shadow-[#F2A65A]/20 transition-all hover:scale-105"
                        >
                            <a href="#booking" className="flex items-center">
                                <span>Book Your Ride</span>
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="h-14 rounded-full px-8 text-lg bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 font-medium transition-all hover:scale-105"
                        >
                            <a href="#gallery">
                                <span>View Gallery</span>
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
                </div>
            </div>
        </section>
    )
}
