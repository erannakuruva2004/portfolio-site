import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { personalInfo } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin,
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'View my repos',
      href: personalInfo.github,
    },
  ]

  return (
    <section id="contact" className="relative section-padding bg-bg-alt/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Let's Build Something Amazing"
          subtitle="Have a project in mind? Let's talk."
          align="center"
          index={6}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' || link.label === 'Phone' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="glass group flex flex-col rounded-2xl p-6 transition-all hover:-translate-y-2 hover:border-accent/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <link.icon className="text-2xl text-accent transition-transform group-hover:scale-110" />
                <p className="mt-4 text-xs uppercase tracking-widest text-secondary">{link.label}</p>
                <p className="mt-1 text-sm text-primary">{link.value}</p>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-strong rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-secondary">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-card/50 px-4 py-3 text-sm text-primary placeholder:text-secondary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-secondary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-card/50 px-4 py-3 text-sm text-primary placeholder:text-secondary/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-card/50 px-4 py-3 text-sm text-primary placeholder:text-secondary/50"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="btn-glow w-full rounded-full border border-accent/30 bg-accent/10 py-3.5 text-xs font-semibold uppercase tracking-widest text-primary"
              >
                {submitted ? 'Opening Email...' : 'Send Message'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
