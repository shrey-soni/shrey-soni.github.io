import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { config } from '../data/config';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {config.experience.title}
                </motion.h2>

                <div className="experience-timeline">
                    {config.experience.items.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={"timeline-marker " + (index === 0 ? "marker-active" : "")}></div>
                            <a
                                href={exp.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="timeline-content"
                            >
                                <div className="timeline-image-container">
                                    <img
                                        src={exp.image}
                                        alt={exp.title}
                                        className="timeline-image"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="timeline-details">
                                    <div className="timeline-header">
                                        <div className="timeline-title-wrapper">
                                            <h3>{exp.title}</h3>
                                            <span className="timeline-tenure">{exp.tenure}</span>
                                        </div>
                                        <div className="timeline-link">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                    <p className="timeline-role">{exp.category}</p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
