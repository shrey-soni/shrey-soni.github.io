import { motion } from 'framer-motion';
import { config } from '../data/config';

const Contact = () => {
    return (
        <section id="contact" className="section contact-container">
            <div className="container">
                <motion.h2
                    style={{ maxWidth: '800px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {config.contact.title}
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <a
                        href={`mailto:${config.contact.email}`}
                        className="contact-link"
                    >
                        {config.contact.email}
                    </a>
                </motion.div>
            </div>

            <div className="container">
                <div className="footer-bottom">
                    {/* <p style={{ margin: 0 }}>&copy; 2024 Portfolio.</p> */}
                    <div className="footer-links">
                        {config.contact.footerLinks.map((link, index) => (
                            <a key={index} href={link.href}>{link.label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
