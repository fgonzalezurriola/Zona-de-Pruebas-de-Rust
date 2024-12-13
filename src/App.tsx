import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Playground from './components/Playground';
import SideMenu from './components/SideMenu';

function App() {
  const [selectedProblem, setSelectedProblem] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex-grow flex">
        <SideMenu onSelectProblem={setSelectedProblem} />
        <main className="flex-grow flex items-center justify-center p-4">
          <Playground selectedProblem={selectedProblem} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;