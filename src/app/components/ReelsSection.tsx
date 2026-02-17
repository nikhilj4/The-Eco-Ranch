import React from 'react';
import { Camera, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Reveal } from './ui/reveal';

export function ReelsSection() {
    return (
        <section className="py-24 px-4 bg-stone-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F2A65A]/10 rounded-full mb-4">
                        <Instagram className="h-4 w-4 text-[#F2A65A]" />
                        <span className="text-sm font-medium text-[#F2A65A]">@theecoranch</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Latest from the Ranch</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
                        Catch the vibe on Instagram. Follow us for daily updates and scenic reels.
                    </p>
                </div>

                <Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
                        {/* Reel 1 - The specific one requested */}
                        <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
                            <div className="relative w-full max-w-[350px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                                <iframe
                                    src="https://www.instagram.com/reel/DUnzYZhD0zn/embed"
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowTransparency={true}
                                    title="Instagram Reel 1"
                                ></iframe>
                            </div>
                        </div>

                        {/* Placeholder for Reel 2 - You can replace ID when you have more */}
                        <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
                            <div className="relative w-full max-w-[350px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black flex items-center justify-center group">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1534068590799-09895a701e3e?q=80&w=1000&auto=format&fit=crop"
                                    alt="Horses in mist"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                                />
                                <div className="relative z-20 text-center p-6">
                                    <Camera className="w-12 h-12 text-[#F2A65A] mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-2">More Adventures</h3>
                                    <Button variant="outline" className="border-[#F2A65A] text-[#F2A65A] hover:bg-[#F2A65A] hover:text-white">
                                        <a href="https://www.instagram.com/theecoranch" target="_blank" rel="noopener noreferrer">
                                            View Profile
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder for Reel 3 */}
                        <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
                            <div className="relative w-full max-w-[350px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                                <iframe
                                    src="https://www.instagram.com/reel/C3_7q_dL1_a/embed"  // Random popular horse reel or replace with another ranch reel if available
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowTransparency={true}
                                    title="Instagram Reel 3"
                                ></iframe>
                                {/* Fallback if iframe fails or empty */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black -z-10">
                                    <span className="text-white/20 font-bold">Reel Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <div className="text-center mt-12">
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-8 py-6 text-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all">
                        <a href="https://www.instagram.com/theecoranch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Instagram className="w-5 h-5" />
                            Follow @theecoranch
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
