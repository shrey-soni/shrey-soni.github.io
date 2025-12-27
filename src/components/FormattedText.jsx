import React from 'react';
import { motion } from 'framer-motion';

const FormattedText = ({ text }) => {
    if (!text) return null;

    const parts = text.split(/(\[\[.*?\]\])/);

    return parts.map((part, i) => {
        if (part.startsWith('[[') && part.endsWith(']]')) {
            const content = part.slice(2, -2);

            // Special case for 'flow'
            if (content === 'flow') {
                const letters = content.split('');
                return (
                    <motion.a
                        key={i}
                        href="https://en.wikipedia.org/wiki/Flow_(psychology)#:~:text=Flow%20is%20the%20melting%20together%20of%20action%20and%20consciousness%3B%20the%20state%20of%20finding%20a%20balance%20between%20a%20skill%20and%20how%20challenging%20that%20task%20is."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flow-link"
                        initial="initial"
                        whileHover="hover"
                        viewport={{ once: true }}
                        style={{ display: 'inline-block', overflow: 'visible' }}
                        variants={{
                            initial: {},
                            hover: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0
                                }
                            }
                        }}
                    >
                        {letters.map((letter, index) => (
                            <motion.span
                                key={index}
                                style={{ display: 'inline-block' }}
                                variants={{
                                    initial: { y: 0 },
                                    hover: { y: -3.5, color: "var(--text-primary)" }
                                }}
                                transition={{
                                    type: "spring",
                                    damping: 12,
                                    stiffness: 200
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.a>
                );
            }

            // Generic highlighted text
            return (
                <span key={i} className="flow-link">
                    {content}
                </span>
            );
        }
        return part;
    });
};

export default FormattedText;
