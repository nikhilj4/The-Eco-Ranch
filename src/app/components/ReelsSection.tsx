import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { FocusRail, type FocusRailItem } from './ui/focus-rail';

const REEL_ITEMS: FocusRailItem[] = [
    {
        id: 1,
        title: "Morning Rides",
        description: "Start your day with a breathtaking sunrise ride.",
        meta: "Instagram Reel",
        imageSrc: "/images/gallery/gallery-3.png",
        href: "https://www.instagram.com/reel/DUnzYZhD0zn",
    },
    {
        id: 2,
        title: "Trail Adventures",
        description: "Explore hidden paths and deep forests.",
        meta: "Instagram Reel",
        imageSrc: "/images/gallery/gallery-4.png",
        href: "https://www.instagram.com/reel/DUGRCyMk9D-",
    },
    {
        id: 3,
        title: "Ranch Vibes",
        description: "Experience the authentic ranch atmosphere.",
        meta: "Instagram Reel",
        imageSrc: "/images/gallery/gallery-5.png",
        href: "https://www.instagram.com/reel/DTNwr9IEwWd",
    },
    {
        id: 4,
        title: "Sunset Gallery",
        description: "Watch the sky turn gold over the ranch.",
        meta: "Instagram Reel",
        imageSrc: "/images/gallery/gallery-1.png",
        href: "https://www.instagram.com/reel/DTNnnolE52l",
    },
    {
        id: 5,
        title: "Horse Bonding",
        description: "Connect with our friendly horses.",
        meta: "Instagram Reel",
        imageSrc: "/images/gallery/gallery-2.png",
        href: "https://www.instagram.com/reel/DTKZJUyki1w",
    },
    {
        id: 6,
        title: "Action Shots",
        description: "Feel the thrill of the gallop.",
        meta: "Instagram Reel",
        imageSrc: "/images/gallery/gallery-6.png",
        href: "https://www.instagram.com/reel/DTIcNOfEpNl",
    }
];

export function ReelsSection() {
    return (
        <section className="py-24 px-4 bg-stone-900 text-white overflow-hidden flex flex-col items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F2A65A]/10 rounded-full mb-4">
                        <Instagram className="h-4 w-4 text-[#F2A65A]" />
                        <span className="text-sm font-medium text-[#F2A65A]">@theecoranch</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Latest from the Ranch</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
                        Catch the vibe on Instagram. Follow us for daily updates and scenic reels.
                    </p>
                </div>

                {/* FocusRail Implementation replacing the grid */}
                <FocusRail
                    items={REEL_ITEMS}
                    autoPlay={false}
                    loop={true}
                    className="w-full"
                />

                <div className="text-center mt-12 space-y-4">
                    <p className="text-white/60 text-sm">Tap or drag cards to explore reels</p>
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
