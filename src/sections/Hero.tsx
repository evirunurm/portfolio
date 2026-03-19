import { Button } from '@evirunurm/thockitty-ds'
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
          <Button
            variant="on-black"
            onPress={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </Button>
          <Button
            variant="on-white"
            onPress={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
