import { motion } from 'framer-motion';
import { config } from '../data/config';

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(targetId);
    } else {
      // Fallback
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="navbar-fixed"
    >
      <div className="navbar-glass">
        {config.navbar.links.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="nav-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
