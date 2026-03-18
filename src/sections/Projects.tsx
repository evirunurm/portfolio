import styles from './Projects.module.css'

interface Project {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Project One',
    description:
      'A short description of what this project does and the problem it solves.',
    tags: ['React', 'TypeScript', 'Node.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Two',
    description:
      'Another project showcase. Highlight the most interesting technical aspects.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Three',
    description:
      'Describe the impact, scale, or unique challenge this project addressed.',
    tags: ['Python', 'FastAPI', 'Redis'],
    repoUrl: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="section-divider" />
        <p className="section-subtitle">A selection of things I've built</p>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.placeholder} aria-hidden="true" />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.cardFooter}>
                {project.liveUrl && (
                  <a href={project.liveUrl} className={styles.link} target="_blank" rel="noreferrer">
                    Live ↗
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} className={styles.link} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
