import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'akeesak15@gmail.com', href: 'mailto:akeesak15@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+94 77 183 2725', href: 'tel:+94771832725' },
    { icon: FiMapPin, label: 'Location', value: 'Ampara, Eastern Province, Sri Lanka', href: '#' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/MMMAkees', href: 'https://github.com/MMMAkees' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/mohamed-akees', href: 'https://linkedin.com/in/mohamed-akees' },
]

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const mailto = `mailto:akeesak15@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
        window.open(mailto, '_blank')
        setSent(true)
        setTimeout(() => setSent(false), 4000)
    }

    return (
        <section id="contact" className="relative bg-dark py-28 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="section-container">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">Let's Talk</span>
                    <h2 className="section-title mt-2">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-3 text-center">
                        Open to opportunities, collaborations, and interesting conversations
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
                        {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                            <motion.a
                                key={label}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                initial={{ x: -20, opacity: 0 }}
                                animate={isInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ delay: 0.2 + i * 0.08 }}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 p-4 glass-card hover:border-primary/40 transition-all duration-300 group"
                            >
                                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                                    <Icon size={16} />
                                </div>
                                <div>
                                    <div className="text-[11px] text-muted uppercase tracking-wider">{label}</div>
                                    <div className="text-sm text-white font-medium break-all">{value}</div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm text-muted mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-dark/60 border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/60 focus:shadow-[0_0_15px_rgba(108,99,255,0.2)] transition-all placeholder:text-muted/40"
                                        placeholder="Mohamed Akees"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-muted mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-dark/60 border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/60 focus:shadow-[0_0_15px_rgba(108,99,255,0.2)] transition-all placeholder:text-muted/40"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-muted mb-2">Subject</label>
                                <input
                                    type="text"
                                    value={formData.subject}
                                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full bg-dark/60 border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/60 focus:shadow-[0_0_15px_rgba(108,99,255,0.2)] transition-all placeholder:text-muted/40"
                                    placeholder="Job Opportunity / Collaboration"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-muted mb-2">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-dark/60 border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/60 focus:shadow-[0_0_15px_rgba(108,99,255,0.2)] transition-all placeholder:text-muted/40 resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="glow-button w-full flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {sent ? (
                                    <>✓ Message Sent!</>
                                ) : (
                                    <>
                                        <FiSend size={16} /> Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
