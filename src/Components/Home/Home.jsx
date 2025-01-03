import { MdDownload } from 'react-icons/md';
import './HomeStyles.scss';
import { TbWorldShare } from 'react-icons/tb';

export default function Home() {
  return (
    <main id="home">
      <section>
        <div className="video-container">
          <video
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noplaybackrate"
          >
            <source src="/video_home.mp4" type="video/mp4" />
          </video>
          <div className="overlay"></div>
        </div>
        <div className="home-description">
          <h2>Olá, eu sou</h2>
          <h1>&lt;FelipeMascena /&gt;</h1>
          <p>
            Sou <span>desenvolvedor web frontend</span> com sólida experiência
            em HTML, CSS, Sass, Styled-components, JavaScript, React e Vue.js.
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e
            Engenharia de Software. Estou sempre em busca de aprendizado, com
            foco em aprimorar minhas habilidades e conhecimentos. Atualmente,
            estudo TypeScript, NextJS e Tailwind, além de me aprofundar cada vez
            mais nas bases da linguagem de programação.
          </p>
          <div className="btn-home">
            <a href="/cv.pdf" download="meu-curriculo.pdf">
              <button className="btn-curriculo">
                <MdDownload /> Download CV
              </button>
            </a>
            <a href="#">
              <button className="btn-page-cv">
                Page CV <TbWorldShare />
              </button>
            </a>
          </div>
        </div>
      </section>
      <figure className="home-image">
        <img src="/foto-pessoal.jpg" alt="foto de perfil" />
      </figure>
    </main>
  );
}
