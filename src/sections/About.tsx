import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              I'm a full-stack developer with a passion for building thoughtful,
              user-focused products. I love turning complex problems into simple,
              elegant solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source, or playing chess.
            </p>
            <ul className={styles.details}>
              <li>
                <span className={styles.label}>Location</span>
                <span>Your City, Country</span>
              </li>
              <li>
                <span className={styles.label}>Email</span>
                <span>you@example.com</span>
              </li>
              <li>
                <span className={styles.label}>Availability</span>
                <span className={styles.available}>Open to opportunities</span>
              </li>
            </ul>
          </div>

          <div className={styles.imageWrap}>
            <div className={styles.imagePlaceholder}>
              <span>Your Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
