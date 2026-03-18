import styles from './Skills.module.css'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'HTML / CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST / GraphQL'],
  },
  {
    category: 'Tools & Ops',
    skills: ['Git', 'Docker', 'CI/CD', 'Linux', 'AWS / Vercel'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Technologies I work with</p>

        <div className={styles.grid}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <ul className={styles.list}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
