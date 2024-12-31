import { TbWorldShare } from 'react-icons/tb';
import './ProjectsStyles.scss';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const Projetos = [
    {
      id: 1,
      title: 'Projeto 1',
      img: '/minha-logo.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ipsum pulvinar fermentum non sit amet turpis. Duis condimentum, enim id cursus ultricies, sem nunc ultricies nunc, at consectetur neque dolor vel est.',
      githubLink: 'https://github.com/username/reponame',
      pageLink: 'https://example.com/project',
    },
    {
      id: 2,
      title: 'Projeto 2',
      img: '/minha-logo.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ipsum pulvinar fermentum non sit amet turpis. Duis condimentum, enim id cursus ultricies, sem nunc ultricies nunc, at consectetur neque dolor vel est.',
      githubLink: 'https://github.com/username/reponame',
      pageLink: 'https://example.com/project',
    },
    {
      id: 3,
      title: 'Projeto 3',
      img: '/minha-logo.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ipsum pulvinar fermentum non sit amet turpis. Duis condimentum, enim id cursus ultricies, sem nunc ultricies nunc, at consectetur neque dolor vel est.',
      githubLink: 'https://github.com/username/reponame',
      pageLink: 'https://example.com/project',
    },
    {
      id: 4,
      title: 'Projeto 4',
      img: '/minha-logo.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ipsum pulvinar fermentum non sit amet turpis. Duis condimentum, enim id cursus ultricies, sem nunc ultricies nunc, at consectetur neque dolor vel est.',
      githubLink: 'https://github.com/username/reponame',
      pageLink: 'https://example.com/project',
    },
    {
      id: 5,
      title: 'Projeto 5',
      img: '/minha-logo.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ipsum pulvinar fermentum non sit amet turpis. Duis condimentum, enim id cursus ultricies, sem nunc ultricies nunc, at consectetur neque dolor vel est.',
      githubLink: 'https://github.com/username/reponame',
      pageLink: 'https://example.com/project',
    },
    {
      id: 6,
      title: 'Projeto 6',
      img: '/minha-logo.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ipsum pulvinar fermentum non sit amet turpis. Duis condimentum, enim id cursus ultricies, sem nunc ultricies nunc, at consectetur neque dolor vel est.',
      githubLink: 'https://github.com/username/reponame',
      pageLink: 'https://example.com/project',
    },
  ];

  return (
    <main id="projetos">
      <section className="card-container">
        {Projetos.map((project) => (
          <div key={project.id} className="card">
            <div className="card-image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className='card-description'>
            <p className="card-title">{project.title}</p>
            <p className="card-body">{project.description}</p>
            <div className="btns">
              <button className="btn-github">
                <FaGithub />
                <a href={project.githubLink} target="_blank">
                  GITHUB
                </a>
              </button>
              <figure className="btn-page">
                <TbWorldShare />
                <a href={project.pageLink} target="_blank">
                  PAGE
                </a>
              </figure>
            </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
