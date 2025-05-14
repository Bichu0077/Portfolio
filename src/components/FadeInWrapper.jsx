import React from 'react';
import { motion } from 'framer-motion';

const FadeInWrapper = ({ children, delay = 0, duration = 0.6 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
