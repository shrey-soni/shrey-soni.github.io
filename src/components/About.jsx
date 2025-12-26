import { motion } from 'framer-motion';
import { config } from '../data/config';

const About = () => {
    return (
        <section id="about" className="section bg-white">
            <div className="container">
                <div className="about-container">
                    <div className="about-sidebar">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            {config.about.title}
                        </motion.h2>
                    </div>
                    <div className="about-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="about-text-group"
                        >
                            {config.about.description.map((paragraph, index) => {
                                const parseText = (text) => {
                                    const parts = text.split(/(\[\[.*?\]\])/);
                                    return parts.map((part, i) => {
                                        if (part.startsWith('[[') && part.endsWith(']]')) {
                                            const content = part.slice(2, -2);
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
                                            return (
                                                <span key={i} className="flow-link">
                                                    {content}
                                                </span>
                                            );
                                        }
                                        return part;
                                    });
                                };
                                return <p key={index}>{parseText(paragraph)}</p>;
                            })}
                            <div className="skills-grid">
                                {/* <div>
                                    <h3>{config.about.skills.design.title}</h3>
                                    <p className="small-text">{config.about.skills.design.list}</p>
                                </div> */}
                                <div>
                                    <h3>{config.about.skills.development.title}</h3>
                                    <p className="small-text">{config.about.skills.development.list}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
