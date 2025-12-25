import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import heroImage from '../assets/hero-image.jpeg';

import { config } from '../data/config';

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 100 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section id="hero" className="hero-section section">
            {/* ... simplified container ... */}
            <div className="container hero-container" style={{ position: 'relative', zIndex: 10 }}>

                {/* Text Content */}
                <div className="hero-content">
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="hero-sub">{config.hero.subtitle}</span>
                    </motion.div>

                    <h1 style={{ marginBottom: '1.5rem' }}>
                        <motion.span
                            className="block"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        >
                            {config.hero.title.line1}
                        </motion.span>
                        <motion.span
                            className="block"
                            style={{ fontWeight: 600 }}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        >
                            {config.hero.title.line2}
                        </motion.span>
                    </h1>

                    <motion.p
                        style={{ fontSize: '1.1rem', marginBottom: '2rem' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        {config.hero.description}
                    </motion.p>
                </div>

                {/* Image Content */}
                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                >
                    <img
                        src={heroImage}
                        alt="Profile"
                        className="hero-image"
                        loading="eager"
                        fetchPriority="high"
                    />
                </motion.div>

            </div>

            {/* Background Gradient Blob */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    x: springX,
                    y: springY,
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            >
                <motion.div
                    className="gradient-blob"
                    style={{
                        position: 'relative',
                        left: 'auto',
                        top: 'auto',
                        x: '-50%',
                        y: '-50%'
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                />
            </motion.div>
        </section>
    );
};


export default Hero;
