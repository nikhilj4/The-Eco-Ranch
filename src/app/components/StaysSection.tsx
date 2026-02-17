import React from 'react';
import { Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Reveal } from './ui/reveal';
import { PackageModal } from './PackageModal';

export function StaysSection() {
    return (
        <section id="stays" className="py-24 px-4 bg-[#6F8F72] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                        <Sparkles className="h-4 w-4 text-white" />
                        <span className="text-sm font-medium text-white">The Residency</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold mb-6">Stay the Night</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
                        A sanctuary for those who want to linger longer
                    </p>
                </div>

                <Reveal className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                    <PackageModal
                        title="Rustic Tent"
                        price="Rs 1,300"
                        unit="/person"
                        description="Sleep under the stars in comfort"
                        image="/images/gallery/gallery-4.png"
                        details={["Comfortable bedding", "Common washroom access", "Charging points", "Campfire area"]}
                        trigger={
                            <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer text-left">
                                <CardHeader className="p-3 md:p-6 pb-2 md:pb-4">
                                    <CardTitle className="text-sm md:text-2xl font-bold">Rustic Tent</CardTitle>
                                    <CardDescription className="text-white/70 text-[10px] md:text-base line-clamp-2 md:line-clamp-none leading-snug">Sleep under the stars in comfort</CardDescription>
                                </CardHeader>
                                <CardContent className="p-3 md:p-6 pt-0 md:pt-0">
                                    <div className="text-lg md:text-5xl font-bold text-[#F2A65A] mb-2 md:mb-6">
                                        Rs 1,300<span className="text-[10px] md:text-sm text-white/60 font-normal">/person</span>
                                    </div>
                                    <img
                                        src="/images/gallery/gallery-4.png"
                                        alt="Rustic tent"
                                        className="w-full h-32 md:h-48 object-cover rounded-xl md:rounded-2xl mb-3 md:mb-6"
                                        loading="lazy"
                                    />
                                    <div className="w-full h-8 md:h-auto py-2 bg-[#F2A65A] text-white rounded-full text-xs md:text-base font-medium flex items-center justify-center">
                                        View Details
                                    </div>
                                </CardContent>
                            </Card>
                        }
                    />

                    <PackageModal
                        title="Cozy Dorm"
                        price="Rs 1,800"
                        unit="/person"
                        description="Shared accommodation with fellow adventurers"
                        image="/images/gallery/gallery-7.png"
                        details={["Bunk beds", "Lockers provided", "Shared washroom", "Social space"]}
                        trigger={
                            <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer text-left">
                                <CardHeader className="p-3 md:p-6 pb-2 md:pb-4">
                                    <CardTitle className="text-sm md:text-2xl font-bold">Cozy Dorm</CardTitle>
                                    <CardDescription className="text-white/70 text-[10px] md:text-base line-clamp-2 md:line-clamp-none leading-snug">Shared accommodation with fellow adventurers</CardDescription>
                                </CardHeader>
                                <CardContent className="p-3 md:p-6 pt-0 md:pt-0">
                                    <div className="text-lg md:text-5xl font-bold text-[#F2A65A] mb-2 md:mb-6">
                                        Rs 1,800<span className="text-[10px] md:text-sm text-white/60 font-normal">/person</span>
                                    </div>
                                    <img
                                        src="/images/gallery/gallery-7.png"
                                        alt="Cozy dorm"
                                        className="w-full h-32 md:h-48 object-cover rounded-xl md:rounded-2xl mb-3 md:mb-6"
                                        loading="lazy"
                                    />
                                    <div className="w-full h-8 md:h-auto py-2 bg-[#F2A65A] text-white rounded-full text-xs md:text-base font-medium flex items-center justify-center">
                                        View Details
                                    </div>
                                </CardContent>
                            </Card>
                        }
                    />

                    <PackageModal
                        title="Private Room"
                        price="Rs 4,500"
                        unit="/for 2"
                        description="Your own space with complete privacy"
                        image="/images/gallery/gallery-8.png"
                        details={["Queen size bed", "Attached washroom", "Private balcony", "Room service"]}
                        trigger={
                            <Card className="h-full bg-white/10 backdrop-blur-md border-2 border-[#F2A65A] text-white hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 rounded-2xl md:rounded-3xl overflow-hidden relative cursor-pointer text-left">
                                <div className="absolute top-2 right-2 md:top-4 md:right-4">
                                    <Badge className="bg-[#F2A65A] text-white rounded-full px-2 py-0.5 text-[10px] md:px-4 md:py-1 md:text-sm">Most Popular</Badge>
                                </div>
                                <CardHeader className="p-3 md:p-6 pb-2 md:pb-4">
                                    <CardTitle className="text-sm md:text-2xl font-bold">Private Room</CardTitle>
                                    <CardDescription className="text-white/70 text-[10px] md:text-base line-clamp-2 md:line-clamp-none leading-snug">Your own space with complete privacy</CardDescription>
                                </CardHeader>
                                <CardContent className="p-3 md:p-6 pt-0 md:pt-0">
                                    <div className="text-lg md:text-5xl font-bold text-[#F2A65A] mb-2 md:mb-6">
                                        Rs 4,500<span className="text-[10px] md:text-sm text-white/60 font-normal">/for 2</span>
                                    </div>
                                    <img
                                        src="/images/gallery/gallery-8.png"
                                        alt="Private room"
                                        className="w-full h-32 md:h-48 object-cover rounded-xl md:rounded-2xl mb-3 md:mb-6"
                                        loading="lazy"
                                    />
                                    <div className="w-full h-8 md:h-auto py-2 bg-[#F2A65A] text-white rounded-full text-xs md:text-base font-medium flex items-center justify-center">
                                        View Details
                                    </div>
                                </CardContent>
                            </Card>
                        }
                    />
                </Reveal>
            </div>
        </section>
    );
}
