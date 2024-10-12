import React from 'react';
import { motion } from 'framer-motion';

export const ErrorInput = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -20 }} // Comienza oculto y desplazado hacia arriba
      animate={{ opacity: 1, y: 0 }} // Aparece con opacidad y sin desplazamiento
      exit={{ opacity: 0, y: 20 }} // Desaparece con opacidad y desplazado hacia abajo
      transition={{ duration: 0.5 }} // Duración de la transición
      className='text-center my-4 bg-red-600 text-white font-bold p-3 uppercase text-sm rounded-lg'
    >
      {children}
    </motion.p>
  );
};
