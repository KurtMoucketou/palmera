import React, { useState } from 'react';
import { Header } from './components/Header';
import { Chatbot } from './components/Chatbot';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Prestations } from './pages/Prestations';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'prestations':
        return <Prestations />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Chatbot />
    </div>
  );
}

export default App;