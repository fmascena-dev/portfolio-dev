import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { FaHome, FaUser, FaBriefcase, FaBlog, FaImages } from "react-icons/fa";

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
            selected === "home" ? styles.selected : ""
          }`}
          onClick={() => handleMenuClick("home")}
        >
          <FaHome className={styles.icon} />
          <span>Home</span>
        </a>
        <a
          href="#about"
          className={`${styles.navItem} ${
            selected === "about" ? styles.selected : ""
          }`}
          onClick={() => handleMenuClick("about")}
        >
          <FaUser className={styles.icon} />
          <span>About</span>
        </a>
        <a
          href="#work"
          className={`${styles.navItem} ${
            selected === "work" ? styles.selected : ""
          }`}
          onClick={() => handleMenuClick("work")}
        >
          <FaBriefcase className={styles.icon} />
          <span>Work</span>
        </a>
        <a
          href="#blog"
          className={`${styles.navItem} ${
            selected === "blog" ? styles.selected : ""
          }`}
          onClick={() => handleMenuClick("blog")}
        >
          <FaBlog className={styles.icon} />
          <span>Blog</span>
        </a>
        <a
          href="#gallery"
          className={`${styles.navItem} ${
            selected === "gallery" ? styles.selected : ""
          }`}
          onClick={() => handleMenuClick("gallery")}
        >
          <FaImages className={styles.icon} />
          <span>Gallery</span>
        </a>
      </nav>
      <div className={styles.time}>{time}</div>
    </header>
  );
}
