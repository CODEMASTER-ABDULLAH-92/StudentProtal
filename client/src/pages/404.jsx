// src/pages/NotFoundPage.jsx (with animations)
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const NotFoundPage = () => {
  return (
    <motion.div
      className="not-found-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="not-found-content"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <motion.h1
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          404
        </motion.h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you're looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/" className="home-button">
          Return to Homepage
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFoundPage;