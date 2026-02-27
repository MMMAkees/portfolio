import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi'

const certifications = [
    {
        title: 'Web Design for Beginners',
        issuer: 'University of Moratuwa',
        date: 'Feb 2026',
        id: 'Na0FQzxYYM',
        color: '#6C63FF',
        skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI Design'],
        description: 'Completed an online learning programme on Web Design fundamentals covering HTML, CSS, and essential web development concepts.',
    },
    {
        title: 'Python for Beginners',
        issuer: 'University of Moratuwa',
        date: 'Feb 2026',
        id: '0KjbWmjl6r',
        color: '#43E97B',
        skills: ['Python', 'Functions', 'Variables & Data Types', 'Control Structures', 'Algorithms'],
        description: 'Gained strong foundations in Python programming and computational thinking through a structured online course.',
    },
    {
        title: 'Certificate in Information Technology',
        issuer: 'BCAS Campus Kalmunai',
        date: 'Feb 2022',
        id: 'KL/IBP/IT/16/05',
        color: '#FF6584',
        skills: ['Web Development', 'HTML', 'Microsoft Excel', 'Networking', 'Hardware Troubleshooting'],
        description: 'Successfully completed a full-time Certificate in IT at BCAS Campus Kalmunai, Sri Lanka.',
    },
    {
        title: 'Certificate in English',
        issuer: 'BCAS Campus Kalmunai',
        date: 'Feb 2022',
        id: 'KL/IBP/EN/16/05',
        color: '#F5A623',
        skills: ['English Communication', 'Academic Writing', 'Public Speaking', 'Active Listening'],
        description: 'Successfully completed a full-time Certificate in English programme at BCAS Campus Kalmunai, Sri Lanka.',
    },
]

export default function Certifications() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="certifications" className="relative bg-dark py-28 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="section-container">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">Credentials</span>
                    <h2 className="section-title mt-2">
                        Licences & <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-3 text-center">
                        Verified credentials and continuous learning milestones
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 40, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="glass-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] group"
                        >
                            {/* Top color bar */}
                            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}60)` }} />

                            <div className="p-6">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                        style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                                    >
                                        <FiAward size={22} style={{ color: cert.color }} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-white text-base leading-snug group-hover:text-primary transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm mt-0.5" style={{ color: cert.color }}>{cert.issuer}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-muted text-sm leading-relaxed mb-4">{cert.description}</p>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {cert.skills.map(s => (
                                        <span
                                            key={s}
                                            className="text-[11px] px-2.5 py-1 rounded-full border font-medium"
                                            style={{ background: `${cert.color}08`, border: `1px solid ${cert.color}25`, color: `${cert.color}CC` }}
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                                    <div className="flex items-center gap-1.5 text-muted text-xs">
                                        <FiCalendar size={11} />
                                        <span>{cert.date}</span>
                                        <span className="text-border mx-1">|</span>
                                        <span className="font-mono text-muted/60">ID: {cert.id}</span>
                                    </div>
                                    <motion.div
                                        className="flex items-center gap-1 text-xs font-medium cursor-pointer"
                                        style={{ color: cert.color }}
                                        whileHover={{ x: 3 }}
                                    >
                                        <FiExternalLink size={12} />
                                        <span>Verify</span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
