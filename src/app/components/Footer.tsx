import React from 'react';
import { Phone, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#6F8F72] text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-3xl font-bold mb-4 text-[#F2A65A]">Kanakapura Ranch</h3>
                        <p className="text-white/80 leading-relaxed">Real adventure. Slow mornings. Open trails.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact</h4>
                        <div className="space-y-4">
                            <a href="tel:+917411889506" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                                <Phone className="h-5 w-5" />
                                +91-7411889506
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                                Follow us on Instagram
                            </a>
                        </div>
                    </div>


                </div>

                <div className="border-t border-white/20 pt-8 text-center text-white/60">
                    <p>&copy; 2026 Kanakapura Ranch. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
