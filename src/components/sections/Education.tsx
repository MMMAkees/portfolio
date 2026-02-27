import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCalendar, FiBook } from 'react-icons/fi'

const education = [
    {
        degree: 'Higher National Diploma (HND) in Software Engineering',
        institution: 'ESOFT Metro Campus (BTEC Pearson)',
        period: 'Feb 2024 – Nov 2025',
        icon: FiBook,
        color: '#6C63FF',
        type: 'HND',
        description: 'Studied software engineering fundamentals, full-stack development, data science, and agile methodologies.',
    },
    {
        degree: 'Certificate in Information Technology & English',
        institution: 'BCAS Campus Kalmunai',
        period: '2022',
        icon: FiBook,
        color: '#43E97B',
        type: 'Certificate',
        description: 'Completed a combined programme covering IT fundamentals, web basics, networking, and professional English.',
    },
    {
        degree: 'G.C.E. Advanced Level – ICT Stream',
        institution: 'Zahira College, Kalmunai',
        period: 'Jan 2020 – Nov 2023',
        icon: FiBook,
        color: '#FF6584',
        type: 'A/Levels',
        description: 'Studied Information & Communication Technology with focus on programming, systems analysis, and networking.',
    },
]

export default function Education() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="education" className="relative py-28 overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="section-container">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">Background</span>
                    <h2 className="section-title mt-2">
                        My <span className="gradient-text">Education</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-3 text-center">
                        Academic foundation that shaped my engineering mindset
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 40, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="glass-card overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] group"
                        >
                            {/* Top color accent */}
                            <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${edu.color}, ${edu.color}50)` }} />

                            <div className="p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div
                                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                        style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                                    >
                                        <edu.icon size={18} style={{ color: edu.color }} />
                                    </div>
                                    <span
                                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mt-1"
                                        style={{ background: `${edu.color}15`, color: edu.color }}
                                    >
                                        {edu.type}
                                    </span>
                                </div>

                                <h4 className="font-bold text-sm leading-snug mb-1 group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>
                                    {edu.degree}
                                </h4>
                                <p className="text-sm mb-3 font-semibold" style={{ color: edu.color }}>{edu.institution}</p>
                                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{edu.description}</p>

                                <div className="flex items-center gap-1.5 text-xs pt-4 border-t" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
                                    <FiCalendar size={11} /> {edu.period}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
