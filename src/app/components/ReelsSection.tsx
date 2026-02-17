import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Reveal } from './ui/reveal';

const reelIds = [
    "DUnzYZhD0zn", // Original one
    "DUGRCyMk9D-",
    "DTNwr9IEwWd",
    "DTNnnolE52l",
    "DTKZJUyki1w",
    "DTIcNOfEpNl"
];

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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {reelIds.map((id, index) => (
                            <div key={id} className="flex justify-center transform hover:scale-105 transition-transform duration-300 w-full">
                                <div className="relative w-full max-w-[350px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                                    <iframe
                                        src={`https://www.instagram.com/reel/${id}/embed`}
                                        className="absolute inset-0 w-full h-full"
                                        frameBorder="0"
                                        scrolling="no"
                                        allowTransparency={true}
                                        allow="encrypted-media"
                                        title={`Instagram Reel ${index + 1}`}
                                    ></iframe>
                                </div>
                            </div>
                        ))}
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
