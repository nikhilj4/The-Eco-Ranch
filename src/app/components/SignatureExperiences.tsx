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
                            { name: 'Farmland Tour', price: '3,500', description: 'Gentle ride through scenic farmlands', duration: '2.5-3 hours', image: 'https://images.unsplash.com/photo-1752337160859-f9e188b5850d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMGZhcm1sYW5kJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzcxMDY5NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
                            { name: 'Wildwood Safari', price: '4,000', description: 'Adventure through forest trails', duration: '2.5-3 hours', image: 'https://images.unsplash.com/photo-1711460004339-d41b16ca8cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmFpbCUyMHdpbGQlMjBuYXR1cmV8ZW58MXx8fHwxNzcxMDY5NDYyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
                            { name: 'Summit Ride', price: '4,500', description: 'Challenge yourself with hill climbs', duration: '2.5-3 hours', image: 'https://images.unsplash.com/photo-1732239808105-d2320100247c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bW1pdCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzEwNjk0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080' }
                        ].map((ride) => (
                            <Card key={ride.name} className="hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden group">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={ride.image}
                                        alt={ride.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between mb-3">
                                        <CardTitle className="text-lg md:text-2xl font-bold">{ride.name}</CardTitle>
                                        <Badge className="bg-[#6F8F72] text-white rounded-full px-3">Direct Pay</Badge>
                                    </div>
                                    <CardDescription className="text-xs md:text-base">{ride.description}</CardDescription>
                                    <p className="text-sm text-stone-500 mt-2">{ride.duration}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-xl md:text-4xl font-bold text-[#F2A65A] mb-3 md:mb-6">
                                        Rs {ride.price}<span className="text-xs md:text-sm text-stone-500 font-normal">/person</span>
                                    </div>
                                    <Button className="w-full h-8 md:h-auto bg-[#6F8F72] hover:bg-[#6F8F72]/90 text-white rounded-full py-2 md:py-6 text-xs md:text-base font-medium group-hover:scale-105 transition-transform">
                                        PhonePe
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Reveal>

                    {/* What's Included */}
                    <Reveal delay={0.2}>
                        <Card className="bg-[#6F8F72]/5 border-[#6F8F72]/20 border-2 rounded-3xl">
                            <CardHeader>
                                <CardTitle className="text-2xl">What&apos;s Included</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {[
                                        '2.5 - 3 Hour Guided Trail',
                                        'Sunrise Batch: Fresh Ranch Breakfast',
                                        'Sunset Batch: Evening Tea + Local Snacks',
                                        'Horse Grooming & Feeding Interaction',
                                        'Maximum 3 riders per batch for safety'
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <div className="bg-[#6F8F72] rounded-full p-1 mt-0.5">
                                                <Check className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </Reveal>
                </div>

                {/* Photography Sessions */}
                <div>
                    <h3 className="text-3xl font-bold mb-10 text-center">Photography Sessions</h3>
                    <Reveal className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto">
                        {[
                            { name: 'Wedding Photoshoot', description: 'Capture your special day with majestic horses in nature', image: 'https://images.unsplash.com/photo-1727374703451-c0a912a31ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwb3V0ZG9vciUyMG5hdHVyZXxlbnwxfHx8fDE3NzEwMTcxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                            { name: 'Individual Photoshoot', description: 'Professional portraits in stunning natural settings', image: 'https://images.unsplash.com/photo-1707454710943-a359e4b5962e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3Rvc2hvb3QlMjBvdXRkb29yfGVufDF8fHx8MTc3MTA2OTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080' }
                        ].map((shoot) => (
                            <Card key={shoot.name} className="hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden group">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={shoot.image}
                                        alt={shoot.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between mb-3">
                                        <CardTitle className="text-lg md:text-2xl font-bold">{shoot.name}</CardTitle>
                                        <Badge variant="outline" className="border-[#F2A65A] text-[#F2A65A] rounded-full px-3">Enquiry</Badge>
                                    </div>
                                    <CardDescription className="text-xs md:text-base">{shoot.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-lg md:text-3xl font-bold text-stone-700 mb-3 md:mb-6">Custom Quote</div>
                                    <Button variant="outline" className="w-full h-8 md:h-auto border-2 border-[#F2A65A] text-[#F2A65A] hover:bg-[#F2A65A] hover:text-white rounded-full py-2 md:py-6 text-xs md:text-base font-medium transition-all">
                                        Get a Quote
                                        <ArrowRight className="ml-2 h-4 w-4" />
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
