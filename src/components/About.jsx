import { motion } from 'framer-motion';
import { config } from '../data/config';
import FormattedText from './FormattedText';

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
                            {config.about.description.map((paragraph, index) => (
                                <p key={index}>
                                    <FormattedText text={paragraph} />
                                </p>
                            ))}
                            <div className="skills-grid">
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
