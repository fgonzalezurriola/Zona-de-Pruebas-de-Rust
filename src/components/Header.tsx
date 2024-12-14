import React from 'react';
import { Code2 } from 'lucide-react';
import { FaGithub, FaBriefcase } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-orange-600 text-white py-4 md:py-6 shadow-md">
      {/* Main Container */}
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center sm:ml-3 md:ml-7">
          <Code2 className="mr-2" size={32} />
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">Zona-de-Pruebas-de-Rust</h1>
        </div>
        {/* Div with the Portfolio and Github */}
        <div className="flex items-center space-x-4 text-2xl md:text-4xl">
          <a
            href="https://users.dcc.uchile.cl/~fragonza/"
            className="flex items-center justify-start"
          >
            <FaBriefcase className="text-gray-800 hover:text-white transition-colors duration-500" />
          </a>
          <a
            href="https://github.com/fgonzalezurriola/Zona-de-Pruebas-de-Rust"
            className="flex items-center justify-start transition-colors duration-500"
          >
            <FaGithub className="text-gray-800 hover:text-white transition-colors duration-500" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
