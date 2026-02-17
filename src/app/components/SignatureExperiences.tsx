import React from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Reveal } from './ui/reveal';

export function SignatureExperiences() {
    return (
        <section id="experiences" className="py-24 px-4 bg-[#E8E2D8]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6F8F72]/10 rounded-full mb-4">
                        <Sparkles className="h-4 w-4 text-[#6F8F72]" />
                        <span className="text-sm font-medium text-[#6F8F72]">Signature Experiences</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold mb-6">Choose Your Adventure</h2>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
                        From gentle farmland tours to thrilling summit rides — we&apos;ve got something for every soul
                    </p>
                </div>

                {/* Safari Rides */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold mb-10 text-center">Safari Rides</h3>
                    <Reveal className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-10">
                        {[
                            { name: 'Farmland Tour', price: '3,500', description: 'Gentle ride through scenic farmlands', duration: '2.5-3 hours', image: '/images/experiences/farmland-tour.png' },
                            { name: 'Wildwood Safari', price: '4,000', description: 'Adventure through forest trails', duration: '2.5-3 hours', image: '/images/experiences/wildwood-safari.png' },
                            { name: 'Summit Ride', price: '4,500', description: 'Challenge yourself with hill climbs', duration: '2.5-3 hours', image: '/images/experiences/summit-ride.png' }
                        ].map((ride) => (
                            <Card key={ride.name} className="hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-2xl md:rounded-3xl overflow-hidden group">
                                <div className="relative h-32 md:h-48 overflow-hidden">
                                    <img
                                        src={ride.image}
                                        alt={ride.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <CardHeader className="p-3 md:p-6 pb-2 md:pb-4">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-2 md:mb-3 gap-1">
                                        <CardTitle className="text-sm md:text-2xl font-bold leading-tight">{ride.name}</CardTitle>
                                        <Badge className="bg-[#6F8F72] text-white rounded-full px-1.5 py-0.5 text-[10px] md:text-xs md:px-3 w-fit">Direct Pay</Badge>
                                    </div>
                                    <CardDescription className="text-[10px] md:text-base line-clamp-2 md:line-clamp-none leading-snug">{ride.description}</CardDescription>
                                    <p className="text-[10px] md:text-sm text-stone-500 mt-1 md:mt-2">{ride.duration}</p>
                                </CardHeader>
                                <CardContent className="p-3 md:p-6 pt-0 md:pt-0">
                                    <div className="text-lg md:text-4xl font-bold text-[#F2A65A] mb-2 md:mb-6">
                                        Rs {ride.price}<span className="text-[10px] md:text-sm text-stone-500 font-normal">/person</span>
                                    </div>
                                    <Button asChild className="w-full h-8 md:h-12 bg-[#6F8F72] hover:bg-[#6F8F72]/90 text-white rounded-full text-xs md:text-base font-medium group-hover:scale-105 transition-transform">
                                        <a href="#contact">
                                            Book Now
                                            <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Reveal>

                    {/* What's Included */}
                    <Reveal delay={0.2}>
                        <Card className="bg-[#6F8F72]/5 border-[#6F8F72]/20 border-2 rounded-2xl md:rounded-3xl">
                            <CardHeader className="p-4 md:p-6">
                                <CardTitle className="text-xl md:text-2xl">What&apos;s Included</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                                <ul className="grid md:grid-cols-2 gap-3 md:gap-4 mb-4">
                                    {[
                                        '2.5 - 3 Hour Guided Trail',
                                        'Sunrise Batch: Fresh Ranch Breakfast',
                                        'Sunset Batch: Evening Tea + Local Snacks',
                                        'Horse Grooming & Feeding Interaction',
                                        'Maximum 3 riders per batch for safety',
                                        'Forest Watchtower Walk',
                                        'Morning/Evening Trek'
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 md:gap-3">
                                            <div className="bg-[#6F8F72] rounded-full p-0.5 md:p-1 mt-0.5">
                                                <Check className="h-3 w-3 md:h-4 md:w-4 text-white" />
                                            </div>
                                            <span className="text-sm md:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs md:text-sm text-stone-500 italic border-t pt-4 mt-2">
                                    <span className="font-semibold text-rose-500">Note:</span> Safari not included in stay packages.
                                </p>
                            </CardContent>
                        </Card>
                    </Reveal>
                </div>

                {/* Photography Sessions */}
                <div>
                    <h3 className="text-3xl font-bold mb-10 text-center">Photography Sessions</h3>
                    <Reveal className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto">
                        {[
                            { name: 'Wedding Photoshoot', description: 'Capture your special day with majestic horses in nature', image: '/images/gallery/gallery-1.png' },
                            { name: 'Individual Photoshoot', description: 'Professional portraits in stunning natural settings', image: '/images/gallery/gallery-10.png' }
                        ].map((shoot) => (
                            <Card key={shoot.name} className="hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-2xl md:rounded-3xl overflow-hidden group">
                                <div className="relative h-32 md:h-48 overflow-hidden">
                                    <img
                                        src={shoot.image}
                                        alt={shoot.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <CardHeader className="p-3 md:p-6 pb-2 md:pb-4">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-2 md:mb-3 gap-1">
                                        <CardTitle className="text-sm md:text-2xl font-bold leading-tight">{shoot.name}</CardTitle>
                                        <Badge variant="outline" className="border-[#F2A65A] text-[#F2A65A] rounded-full px-1.5 py-0.5 text-[10px] md:text-xs md:px-3 w-fit">Enquiry</Badge>
                                    </div>
                                    <CardDescription className="text-[10px] md:text-base line-clamp-2 md:line-clamp-none leading-snug">{shoot.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="p-3 md:p-6 pt-0 md:pt-0">
                                    <div className="text-sm md:text-3xl font-bold text-stone-700 mb-2 md:mb-6">Custom Quote</div>
                                    <Button asChild variant="outline" className="w-full h-8 md:h-12 border-2 border-[#F2A65A] text-[#F2A65A] hover:bg-[#F2A65A] hover:text-white rounded-full text-xs md:text-base font-medium transition-all">
                                        <a href="#contact">
                                            Get a Quote
                                            <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
