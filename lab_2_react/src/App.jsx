import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hours = new Date().getHours();
    const isDay = hours >= 7 && hours < 21;
    const initialTheme = isDay ? 'light' : 'dark';
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const openModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fffafd] dark:bg-[#090007] text-[#16000e] dark:text-[#fffeff] font-sans transition-colors">
      <Header onOpenContact={openModal} theme={theme} onToggleTheme={toggleTheme} />
      <main className="max-w-[900px] mx-auto px-6 md:px-8 py-10">
        <About />
        <Education />
        <Skills />
        <Projects onOpenContact={openModal} />
      </main>
      <Footer />
      <ContactForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}