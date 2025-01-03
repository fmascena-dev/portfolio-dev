import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { FaHome, FaImages, FaLaptopCode, FaCode } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';

export default function Header() {
  const [time, setTime] = useState('');
  const [selected, setSelected] = useState('home'); // Menu selecionado
  const [scrolled, setScrolled] = useState(false); // Estado do scroll

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('pt-BR', { hour12: false }));
    }, 1000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Atualiza o item do menu com base na seção visível
      const sections = [
        'home',
        'tecnologias',
        'projetos',
        'contato',
        'gallery',
      ];
      let currentSection = 'home';

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = id;
            break;
          }
        }
      }

      setSelected(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollSmooth = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').slice(1); // Remove o "#"
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleMenuClick = (menu, event) => {
    setSelected(menu);
    handleScrollSmooth(event);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.timeZone}>
        <img src="/minha-logo.png" className={styles.logo} alt="Logo" />
      </div>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <a
          href="#home"
          className={`${styles.navItem} ${
            selected === 'home' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('home', event)}
        >
          <FaHome className={styles.icon} />
          <span>Início</span>
        </a>
        <a
          href="#tecnologias"
          className={`${styles.navItem} ${
            selected === 'tecnologias' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('tecnologias', event)}
        >
          <FaCode className={styles.icon} />
          <span>Tecnologias</span>
        </a>
        <a
          href="#projetos"
          className={`${styles.navItem} ${
            selected === 'projetos' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('projetos', event)}
        >
          <FaLaptopCode className={styles.icon} />
          <span>Projetos</span>
        </a>
        <a
          href="#contato"
          className={`${styles.navItem} ${
            selected === 'contato' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('contato', event)}
        >
          <MdContactMail className={styles.icon} />
          <span>Contato</span>
        </a>
        <a
          href="#gallery"
          className={`${styles.navItem} ${
            selected === 'gallery' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('gallery', event)}
        >
          <FaImages className={styles.icon} />
          <span>Gallery</span>
        </a>
      </nav>
      <div className={styles.time}>{time}</div>
    </header>
  );
}
