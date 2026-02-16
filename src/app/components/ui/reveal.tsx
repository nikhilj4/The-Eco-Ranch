"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
