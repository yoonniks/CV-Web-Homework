import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffafd] dark:bg-[#090007] text-[#16000e] dark:text-[#fffeff] font-sans transition-colors">
      <Header />
      <main className="max-w-[1250px] mx-auto px-6 md:px-8 py-10">
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}