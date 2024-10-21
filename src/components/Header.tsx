import React from 'react';
import { Code2 } from 'lucide-react';
import { FaGithub, FaBriefcase } from 'react-icons/fa';


const Header: React.FC = () => {
  return (
    <header className="bg-orange-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <a href="https://users.dcc.uchile.cl/~fragonza/" className="flex items-center justify-start">
            <FaBriefcase   className="text-5xl text-gray-800 hover:text-white" />
        </a>
        <a href="https://github.com/fgonzalezurriola/Zona-de-Pruebas-de-Rust" className="flex items-center justify-start">
          <FaGithub className="text-5xl text-gray-800 hover:text-white" />
        </a>

        
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <Code2 className="mr-2" size={32} /> 
          <h1 className="text-4xl font-bold">Zona-de-Pruebas-de-Rust</h1>
        </div>
      </div>
    </header>

  );
};

export default Header;