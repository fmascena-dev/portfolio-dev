import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { FaHome, FaBlog, FaImages, FaLaptopCode, FaCode } from "react-icons/fa";

export default function Header() {
  const [time, setTime] = useState("");
  const [selected, setSelected] = useState("home"); // Armazena o menu selecionado

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("pt-BR", { hour12: false }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleMenuClick = (menu) => {
    setSelected(menu); // Define o menu clicado como selecionado
  };

  return (
    <header className={styles.header}>
      <div className={styles.timeZone}>
        <img src="/minha-logo.png" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <a
          href="#home"
          className={`${styles.navItem} ${
            selected === 'home' ? styles.selected : ''
          }`}
          onClick={() => handleMenuClick('home')}
        >
          <FaHome className={styles.icon} />
          <span>Início</span>
        </a>
        <a
          href="#tecnologias"
          className={`${styles.navItem} ${
            selected === 'tecnologias' ? styles.selected : ''
          }`}
          onClick={() => handleMenuClick('tecnologias')}
        >
          <FaCode className={styles.icon} />
          <span>Tecnologias</span>
        </a>
        <a
          href="#projetos"
          className={`${styles.navItem} ${
            selected === 'projetos' ? styles.selected : ''
          }`}
          onClick={() => handleMenuClick('projetos')}
        >
          <FaLaptopCode className={styles.icon} />
          <span>Projetos</span>
        </a>
        <a
          href="#blog"
          className={`${styles.navItem} ${
            selected === 'blog' ? styles.selected : ''
          }`}
          onClick={() => handleMenuClick('blog')}
        >
          <FaBlog className={styles.icon} />
          <span>Blog</span>
        </a>
        <a
          href="#gallery"
          className={`${styles.navItem} ${
            selected === 'gallery' ? styles.selected : ''
          }`}
          onClick={() => handleMenuClick('gallery')}
        >
          <FaImages className={styles.icon} />
          <span>Gallery</span>
        </a>
      </nav>
      <div className={styles.time}>{time}</div>
    </header>
  );
}
