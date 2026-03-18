import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Your Name. Built with React.
        </p>
        <p className={styles.back}>
          <a href="#hero">Back to top ↑</a>
        </p>
      </div>
    </footer>
  )
}
