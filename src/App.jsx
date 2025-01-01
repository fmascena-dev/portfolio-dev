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

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
