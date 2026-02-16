import React from 'react';
import { Sparkles, Scale, Shirt, Clock, MapPin } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Reveal } from './ui/reveal';

export function RanchRules() {
    return (
        <section className="py-24 px-4 bg-[#E8E2D8]">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6F8F72]/10 rounded-full mb-4">
                        <Sparkles className="h-4 w-4 text-[#6F8F72]" />
                        <span className="text-sm font-medium text-[#6F8F72]">Important Information</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold mb-6">Know Before You Go</h2>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
                        A few essentials for your safety and our horses&apos; wellbeing
                    </p>
                </div>

                <Reveal className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
                    <Card className="border-0 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
                        <CardHeader>
                            <div className="flex items-start gap-5">
                                <div className="bg-[#6F8F72]/10 p-2 md:p-4 rounded-2xl">
                                    <Scale className="h-5 w-5 md:h-8 md:w-8 text-[#6F8F72]" />
                                </div>
                                <div>
                                    <CardTitle className="text-sm md:text-xl mb-3">Weight Limit</CardTitle>
                                    <CardDescription className="text-xs md:text-base leading-relaxed">
                                        85-90 kg (Strictly enforced for our horses&apos; health and safety)
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>

                    <Card className="border-0 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
                        <CardHeader>
                            <div className="flex items-start gap-5">
                                <div className="bg-[#6F8F72]/10 p-2 md:p-4 rounded-2xl">
                                    <Shirt className="h-5 w-5 md:h-8 md:w-8 text-[#6F8F72]" />
                                </div>
                                <div>
                                    <CardTitle className="text-sm md:text-xl mb-3">Attire</CardTitle>
                                    <CardDescription className="text-xs md:text-base leading-relaxed">
                                        Full pants and narrow, closed-toe shoes are mandatory for your safety
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>

                    <Card className="border-0 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
                        <CardHeader>
                            <div className="flex items-start gap-5">
                                <div className="bg-[#6F8F72]/10 p-2 md:p-4 rounded-2xl">
                                    <Clock className="h-5 w-5 md:h-8 md:w-8 text-[#6F8F72]" />
                                </div>
                                <div>
                                    <CardTitle className="text-sm md:text-xl mb-3">Timings</CardTitle>
                                    <CardDescription className="text-xs md:text-base leading-relaxed">
                                        Sunrise: 6:30 AM - 9:30 AM | Sunset: 4:00 PM - 7:00 PM
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>

                    <Card className="border-0 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
                        <CardHeader>
                            <div className="flex items-start gap-5">
                                <div className="bg-[#6F8F72]/10 p-2 md:p-4 rounded-2xl">
                                    <MapPin className="h-5 w-5 md:h-8 md:w-8 text-[#6F8F72]" />
                                </div>
                                <div>
                                    <CardTitle className="text-sm md:text-xl mb-3">Location</CardTitle>
                                    <CardDescription className="text-xs md:text-base leading-relaxed mb-3">
                                        Kanakapura
                                    </CardDescription>
                                    <Button variant="link" className="p-0 h-auto text-xs md:text-base text-[#6F8F72] font-medium hover:text-[#F2A65A]">
                                        Get Directions →
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                </Reveal>
            </div>
        </section>
    );
}
