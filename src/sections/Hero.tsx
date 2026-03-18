import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>Your Name</h1>
        <h2 className={styles.title}>Full-Stack Developer</h2>
        <p className={styles.description}>
          I build clean, performant web experiences — from idea to deployment.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View Work
          </a>
          <a href="#contact" className={styles.btnOutline}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
