
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <p>
        I am Jose Estrada, a passionate Software Engineer and aspiring Cybersecurity Professional. 
        With a strong foundation in system design, web development, and IT support, I specialize in crafting scalable and secure solutions. 
        My current focus includes advanced studies in cybersecurity and leveraging my skills to build innovative tools and applications.
      </p>
    </motion.section>
  );
}

export default About;
