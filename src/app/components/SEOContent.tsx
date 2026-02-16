import React from 'react';
import { Reveal } from './ui/reveal';

export function SEOContent() {
    return (
        <section className="py-24 px-6 bg-stone-50">
            <div className="max-w-4xl mx-auto text-center prose prose-stone lg:prose-xl">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-stone-900 tracking-tight">
                        Why Our Horse Safari is the Best in Bangalore
                    </h2>
                    <div className="text-stone-600 leading-relaxed text-lg space-y-6 max-w-3xl mx-auto">
                        <p className="font-light text-xl">
                            Immerse yourself in nature with the <strong className="font-semibold text-stone-800">best horse safari in Bangalore</strong> at The Eco Ranch.
                            Our scenic trails wind through lush landscapes, offering a peaceful escape from the city hustle.
                        </p>
                        <p>
                            Unlike typical riding schools, our <strong className="font-semibold text-stone-800">horse safari</strong> experience focuses on bonding with the animal
                            and enjoying the freedom of the open country. Whether you come for a sunrise trot or a sunset gallop,
                            each ride is crafted for unforgettable memories.
                        </p>
                        <p>
                            Join us and discover why adventure seekers rate us as the top destination for an authentic
                            <strong className="font-semibold text-stone-800">horse safari</strong> near you. Adventure awaits!
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
