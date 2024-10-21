import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center flex items-center justify-center">
      <p className="text-sm">Impulsado por la API de Rust Playground</p> 
      <p className="text-sm ml-12 text-orange-500">Hecho por fgonzalezurriola</p> 
    </footer>
  );
};

export default Footer;