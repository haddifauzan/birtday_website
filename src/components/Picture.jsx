import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { picture1, picture2, picture3, picture4 } from '../assets';
import { Link } from 'react-router-dom'; 
import SectionWrapper from './SectionWrapper';

// Pastikan ada 4 gambar
const images = [picture1, picture2, picture3, picture4];

function Picture() {
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const allImagesLoaded = loadedImages === images.length;

  return (
    <SectionWrapper>
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Loading images...</p>
        </div>
      )}

      {allImagesLoaded && (
        <Link to="/card">
          <p className="absolute text-4xl font-bold text-customBlue inset-0 flex justify-center items-center text-center transform rotate-6 cursor-pointer">
            You are Getting Old! :P
          </p>
        </Link>
      )}

      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: images.length - index }}
          initial={{ scale: 1, rotate: Math.random() * 20 - 10 }}
          whileDrag={{ scale: 1.05, rotate: Math.random() * 20 - 10 }}
          drag
        >
          <img
            src={image}
            alt={`Stacked image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onLoad={handleImageLoad}
          />
        </motion.div>
      ))}
    </SectionWrapper>
  );
}

export default Picture;
