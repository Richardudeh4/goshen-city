// components/FadeInOnScroll.js
"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInOnScroll = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger the animation once when the element enters the viewport
    threshold: 0.3, // Adjust this threshold as needed
  });

  const fadeInVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
    };
  

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
