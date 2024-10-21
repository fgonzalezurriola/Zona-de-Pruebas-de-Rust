import React from 'react';
import { Code2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-orange-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-center">
        <Code2 className="mr-2" size={24} />
        <h1 className="text-2xl font-bold">Rust Problem Playground</h1>
      </div>
    </header>
  );
};

export default Header;