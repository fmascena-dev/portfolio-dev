import './AboutStyles.scss'

export default function SobreMim() {
  return (
    <section id="sobre">
      <div className="titulo-sobre">
        <h2>Sobre mim</h2>
      </div>
      <div className="img-paragrafo">
        <figure className="img-sobre">
          <img data-aos='fade-right' src="/foto-pessoal.jpg" alt="Foto de Perfil" />
        </figure>
        <div data-aos='fade-left' className="texto-sobre">
          <p>
            Sou um <span>desenvolvedor front-end</span> apaixonado por criar
            interfaces dinâmicas, modernas e intuitivas. Com sólidos
            conhecimentos em HTML, CSS, JavaScript, Sass, Styled-Components,
            React e Vue, estou sempre em busca de novas ferramentas e
            tecnologias para aprimorar minhas habilidades. Atualmente, estou
            explorando o universo do Next.js, Tailwind e TypeScript para ampliar
            minhas capacidades no desenvolvimento web.{' '}
          </p>
          <p>
            Formando-me em Análise e Desenvolvimento de Sistemas e Engenharia de
            Software, minha jornada é guiada pela curiosidade e pelo desejo
            constante de aprendizado. Meu objetivo é combinar design e
            funcionalidade para entregar soluções digitais de alta qualidade,
            focadas na melhor experiência para o usuário.{' '}
            <span>Vamos construir algo incrível juntos?</span>
          </p>
        </div>
      </div>
    </section>
  );
}
