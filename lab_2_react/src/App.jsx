import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return(
    <div>
      <Header/>
      <main>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;