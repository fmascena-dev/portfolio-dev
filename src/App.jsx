import './GlobalReset.scss';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Technologies from './Components/Technologies/Technologies.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <div className="div1"></div>
      <div className="div2"></div>
      <Header />
      <Home />
      <Technologies />
      <Projects />
      <Contact />
      <About />
      <Footer />
    </>
  );
}
