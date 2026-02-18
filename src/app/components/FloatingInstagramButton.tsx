import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingInstagramButton() {
    return (
        <motion.a
            href="https://www.instagram.com/theecoranch?igsh=MWkzNGhtaGpwNTVhNg=="
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Message us on Instagram"
        >
            <Instagram className="w-8 h-8" />
        </motion.a>
    );
}
