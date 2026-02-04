import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
