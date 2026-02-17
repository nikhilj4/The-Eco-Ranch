import React from 'react';
import { Sparkles } from 'lucide-react';
import { Reveal } from './ui/reveal';

export function QuickBookFlow() {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F2A65A]/10 rounded-full mb-4">
                        <Sparkles className="h-4 w-4 text-[#F2A65A]" />
                        <span className="text-sm font-medium text-[#F2A65A]">Simple Booking</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold mb-6">Book in Minutes</h2>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
                        No login required • Instant confirmation via WhatsApp
                    </p>
                </div>

                <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {[
                        {
                            step: '1',
                            title: 'Select',
                            description: 'Choose your Safari or Photoshoot experience'
                        },
                        {
                            step: '2',
                            title: 'Details',
                            description: 'Enter your name, WhatsApp number, and any add-ons'
                        },
                        {
                            step: '3',
                            title: 'Pay',
                            description: 'Secure payment via Razorpay'
                        },
                        {
                            step: '4',
                            title: 'Confirmed',
                            description: 'Get invoice on Email + add to Google Calendar ICS format'
                        }
                    ].map((item) => (
                        <div key={item.step} className="text-center">
                            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#F2A65A] to-[#F2A65A]/80 text-white text-xl md:text-3xl font-bold shadow-xl shadow-[#F2A65A]/30">
                                {item.step}
                            </div>
                            <h3 className="text-lg md:text-2xl font-bold mb-3">{item.title}</h3>
                            <p className="text-xs md:text-base text-stone-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
