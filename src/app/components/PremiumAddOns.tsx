import React from 'react';
import { Sparkles, CarFront, Users, Camera } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Reveal } from './ui/reveal';

export function PremiumAddOns() {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F2A65A]/10 rounded-full mb-4">
                        <Sparkles className="h-4 w-4 text-[#F2A65A]" />
                        <span className="text-sm font-medium text-[#F2A65A]">Premium Add-Ons</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold mb-6">Elevate Your Experience</h2>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
                        Optional upgrades available during booking
                    </p>
                </div>

                <Reveal className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                    <Card className="border-2 border-[#BFC6C4] hover:border-[#F2A65A] transition-all duration-300 cursor-pointer rounded-3xl group hover:shadow-2xl">
                        <CardHeader className="text-center p-3 md:p-6">
                            <div className="mb-3 md:mb-6 inline-flex p-3 md:p-6 bg-[#F2A65A]/10 rounded-2xl group-hover:bg-[#F2A65A]/20 transition-colors mx-auto">
                                <CarFront className="h-6 w-6 md:h-12 md:w-12 text-[#F2A65A]" />
                            </div>
                            <CardTitle className="text-lg md:text-2xl mb-3">Jeep Pickup &amp; Drop</CardTitle>
                            <CardDescription className="text-xs md:text-base leading-relaxed">
                                Arriving in Kanakapura? We&apos;ll meet you in our rugged ranch Jeep for seamless transfer
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="border-2 border-[#BFC6C4] hover:border-[#F2A65A] transition-all duration-300 cursor-pointer rounded-3xl group hover:shadow-2xl">
                        <CardHeader className="text-center p-3 md:p-6">
                            <div className="mb-3 md:mb-6 inline-flex p-3 md:p-6 bg-[#F2A65A]/10 rounded-2xl group-hover:bg-[#F2A65A]/20 transition-colors mx-auto">
                                <Users className="h-6 w-6 md:h-12 md:w-12 text-[#F2A65A]" />
                            </div>
                            <CardTitle className="text-lg md:text-2xl mb-3">Private Batch</CardTitle>
                            <CardDescription className="text-xs md:text-base leading-relaxed">
                                Want the trail entirely to yourself? Upgrade to an exclusive session for your group
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="border-2 border-[#BFC6C4] hover:border-[#F2A65A] transition-all duration-300 cursor-pointer rounded-3xl group hover:shadow-2xl">
                        <CardHeader className="text-center p-3 md:p-6">
                            <div className="mb-3 md:mb-6 inline-flex p-3 md:p-6 bg-[#F2A65A]/10 rounded-2xl group-hover:bg-[#F2A65A]/20 transition-colors mx-auto">
                                <Camera className="h-6 w-6 md:h-12 md:w-12 text-[#F2A65A]" />
                            </div>
                            <CardTitle className="text-lg md:text-2xl mb-3">Content Creator Pack</CardTitle>
                            <CardDescription className="text-xs md:text-base leading-relaxed">
                                High-resolution footage of your ride perfect for social media
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </Reveal>
            </div>
        </section>
    );
}
