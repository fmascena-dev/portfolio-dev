import styles from './Footer.module.scss';
import { MdOutlineEmail } from 'react-icons/md';
import Data from '../../Const';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className={styles.developer}>
        <h2>
          DESENVOLVIDO POR <span>FELIPE MASCENA</span>
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.contacts}>
          <a
            href={Data.WhatsappLink}
            rel="noreferrer"
            target="_blank"
            title="Whatsapp"
          >
            <FaWhatsapp />
          </a>
          <a
            href={Data.LinkedinLink}
            rel="noreferrer"
            target="_blank"
            title="Linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href={Data.GitHubLink}
            rel="noreferrer"
            target="_blank"
            title="Github"
          >
            <FaGithub />
          </a>
          <a
            href={Data.EmailLink}
            rel="noreferrer"
            target="_blank"
            title="Gmail"
          >
            <MdOutlineEmail />
          </a>
        </div>
      </div>
    </footer>
  );
}
