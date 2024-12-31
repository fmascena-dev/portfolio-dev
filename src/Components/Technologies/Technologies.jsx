import { FaCss3, FaHtml5, FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiSass, SiStyledcomponents } from 'react-icons/si';
import './TechnologiesStyles.scss';

export default function Tecnologias() {
  return (
    <section id="tecnologias">
      <h1>Tecnologias</h1>
      <section className="section-cards">
        <div data-aos="fade-up-right" className="cards">
          <FaHtml5 size={180} />
          <div className="tec-description">
            <h2>HTML</h2>
            <p className="paragrafo">
              Linguagem de marcação utilizada para estruturar e apresentar
              conteúdo na web.
            </p>
          </div>
        </div>
        <div data-aos="fade-up-left" className="cards">
          <div className="tec-description">
            <h2>CSS</h2>
            <p className="paragrafo">
              Linguagem de estilo utilizada para estilizar os elementos da web.
            </p>
          </div>
          <FaCss3 size={170} />
        </div>
        <div data-aos="fade-up-right" className="cards">
          <SiSass size={180} />
          <div className="tec-description">
            <h2>SCSS</h2>
            <p className="paragrafo">
              Framework CSS que permite a criação de estilos reutilizáveis e
              escaláveis.
            </p>
          </div>
        </div>
        <div data-aos="fade-up-left" className="cards">
          <div className="tec-description">
            <h2>Styled-Components</h2>
            <p className="paragrafo">
              Framework CSS que permite a criação de componentes reutilizáveis e
              escaláveis com a facilidade de estilizar componentes com Styled
              Components.
            </p>
          </div>
          <SiStyledcomponents size={180} />
        </div>
        <div data-aos="fade-up-right" className="cards">
          <IoLogoJavascript size={170} />
          <div className="tec-description">
            <h2>JavaScript</h2>
            <p className="paragrafo">
              Linguagem de programação que permite a criação de interatividade e
              funcionalidades em páginas web.
            </p>
          </div>
        </div>
        <div data-aos="fade-up-left" className="cards">
          <div className="tec-description">
            <h2>React</h2>
            <p className="paragrafo">
              Biblioteca JavaScript criado pelo Facebook para a criação de
              interfaces reativas.
            </p>
          </div>
          <FaReact size={180} />
        </div>
        <div data-aos="fade-up-right" className="cards">
          <FaVuejs size={180} />
          <div className="tec-description">
            <h2>Vue.js</h2>
            <p className="paragrafo">
              Framework JavaScript criado pelo Vue.js para a criação de
              interfaces reativas.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
