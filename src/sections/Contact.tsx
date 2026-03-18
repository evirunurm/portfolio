import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // TODO: wire up to your email service (Resend, EmailJS, Formspree, etc.)
    console.log('Form submitted:', form)
    setStatus('sent')
  }

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Let's work together</p>

        <div className={styles.layout}>
          <div className={styles.info}>
            <p>
              Have a project in mind or just want to say hi? My inbox is always
              open — I'll get back to you as soon as possible.
            </p>
            <ul className={styles.links}>
              <li>
                <a href="mailto:you@example.com" className={styles.socialLink}>
                  Email
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialLink} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialLink} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {status === 'sent' ? (
            <div className={styles.success}>
              <p>Message sent! I'll be in touch soon.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What's on your mind?"
                />
              </div>
              <button type="submit" className={styles.submit}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
