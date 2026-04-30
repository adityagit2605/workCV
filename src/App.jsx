import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-primary min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <About />

        <div className="max-w-7xl mx-auto px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Skills />

        <div className="max-w-7xl mx-auto px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Services />

        <div className="max-w-7xl mx-auto px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Projects />

        <div className="max-w-7xl mx-auto px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Resume />

        <div className="max-w-7xl mx-auto px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
