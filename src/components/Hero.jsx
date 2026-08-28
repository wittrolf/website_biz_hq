import { motion } from 'framer-motion';
import BeforeAfter from './BeforeAfter';
import './Hero.css';

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow" variants={rise} initial="hidden" animate="show" custom={0}>
            Websites for local businesses
          </motion.p>
          <motion.h1 variants={rise} initial="hidden" animate="show" custom={1}>
            This could be
            <br />
            your website.
          </motion.h1>
          <motion.p className="hero-sub" variants={rise} initial="hidden" animate="show" custom={2}>
            I design modern websites for local service businesses — sites that
            make you look established and turn visitors into customers. Before
            you decide anything, I'll build a free preview of yours.
          </motion.p>
          <motion.div className="hero-actions" variants={rise} initial="hidden" animate="show" custom={3}>
            <a href="#contact" className="btn btn-primary">Get a free preview</a>
            <a href="#work" className="btn btn-ghost">See the work</a>
          </motion.div>
          <motion.p className="hero-note" variants={rise} initial="hidden" animate="show" custom={4}>
            The preview's free — no commitment either way.
          </motion.p>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <BeforeAfter />
        </motion.div>
      </div>
    </section>
  );
}
