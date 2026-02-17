"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
    useModal,
} from "./ui/animated-modal";
import { Button } from "./ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";

interface PackageModalProps {
    trigger: React.ReactNode;
    title: string;
    price: string;
    description: string;
    image: string;
    details: string[];
    unit?: string;
    ctaText?: string;
}

export function PackageModal({
    trigger,
    title,
    price,
    description,
    image,
    details,
    unit,
    ctaText = "Book Now"
}: PackageModalProps) {

    // Custom wrapper to handle scroll behavior
    const BookButton = () => {
        const { setOpen } = useModal();
        return (
            <Button
                variant="default"
                className="w-32 bg-[#F2A65A] text-white hover:bg-[#F2A65A]/90 rounded-full"
                onClick={() => {
                    setOpen(false);
                    const bookingSection = document.getElementById("booking");
                    if (bookingSection) {
                        bookingSection.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                {ctaText}
            </Button>
        )
    }

    return (
        <Modal>
            <ModalTrigger className="w-full p-0 bg-transparent hover:bg-transparent">
                {trigger}
            </ModalTrigger>
            <ModalBody>
                <ModalContent className="overflow-y-auto">
                    <h4 className="text-xl md:text-3xl font-bold text-center mb-6 text-stone-800 dark:text-neutral-100 flex flex-col items-center gap-2">
                        <span className="px-3 py-1 bg-[#6F8F72]/10 text-[#6F8F72] text-sm rounded-full font-medium flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Selected Package
                        </span>
                        {title}
                    </h4>

                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        <div className="md:w-1/2 flex-shrink-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video md:aspect-square">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <div className="text-2xl md:text-3xl font-bold text-white">
                                        {price} <span className="text-sm font-normal text-white/80">{unit}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 space-y-4">
                            <p className="text-stone-600 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
                                {description}
                            </p>
                            <div className="bg-stone-50 dark:bg-neutral-900 rounded-xl p-4 border border-stone-100 dark:border-neutral-800">
                                <h5 className="font-bold text-stone-800 dark:text-white mb-3 text-sm uppercase tracking-wider">Highlights</h5>
                                <ul className="space-y-2">
                                    {details.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-stone-600 dark:text-neutral-400">
                                            <Check className="h-4 w-4 text-[#6F8F72] mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                        {/* Generic Tags/Icons could go here */}
                    </div>

                </ModalContent>
                <ModalFooter className="gap-4">
                    <BookButton />
                </ModalFooter>
            </ModalBody>
        </Modal>
    );
}
