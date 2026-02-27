import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiCalendar, FiBook } from 'react-icons/fi'

const education = [
    {
        degree: 'Higher National Diploma (HND) in Software Engineering',
        institution: 'ESOFT Metro Campus (BTEC Pearson)',
        period: 'Feb 2024 – Nov 2025',
        icon: FiBook,
        color: '#6C63FF',
        type: 'Diploma',
    },
    {
        degree: 'Certificate in Information Technology & English',
        institution: 'BCAS Campus Kalmunai',
        period: '2022',
        icon: FiAward,
        color: '#43E97B',
        type: 'Certificate',
    },
    {
        degree: 'G.C.E. Advanced Level – ICT Stream',
        institution: 'Zahira College, Kalmunai',
        period: 'Jan 2020 – Nov 2023',
        icon: FiBook,
        color: '#FF6584',
        type: 'A/Levels',
    },
]

const certifications = [
    {
        title: 'Web Design for Beginners',
        issuer: 'University of Moratuwa',
        date: 'Feb 2026',
        id: 'Na0FQzxYYM',
        color: '#6C63FF',
    },
    {
        title: 'Python for Beginners',
        issuer: 'University of Moratuwa',
        date: 'Feb 2026',
        id: '0KjbWmjl6r',
        color: '#43E97B',
    },
    {
        title: 'Certificate in Information Technology',
        issuer: 'BCAS Campus Kalmunai',
        date: 'Feb 2022',
        id: 'KL/IBP/IT/16/05',
        color: '#FF6584',
    },
    {
        title: 'Certificate in English',
        issuer: 'BCAS Campus Kalmunai',
        date: 'Feb 2022',
        id: 'KL/IBP/EN/16/05',
        color: '#F5A623',
    },
]

export default function Education() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="education" className="relative bg-darker py-28 overflow-hidden">
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
                        Education & <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-3 text-center">
                        Academic foundation and continuous learning through certifications
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <motion.h3
                            initial={{ x: -20, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : {}}
                            className="text-lg font-bold text-white mb-6 flex items-center gap-2"
                        >
                            <FiBook className="text-primary" /> Education
                        </motion.h3>
                        <div className="space-y-4">
                            {education.map((edu, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="glass-card p-5 flex items-start gap-4 hover:border-primary/30 transition-all duration-300"
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                                        style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                                    >
                                        <edu.icon size={17} style={{ color: edu.color }} />
                                    </div>
                                    <div className="flex-1">
                                        <span
                                            className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                                            style={{ background: `${edu.color}15`, color: edu.color }}
                                        >
                                            {edu.type}
                                        </span>
                                        <h4 className="font-bold text-white text-sm mt-2 leading-snug">{edu.degree}</h4>
                                        <p className="text-muted text-sm mt-1">{edu.institution}</p>
                                        <div className="flex items-center gap-1 text-muted text-xs mt-2">
                                            <FiCalendar size={11} /> {edu.period}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <motion.h3
                            initial={{ x: -20, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : {}}
                            className="text-lg font-bold text-white mb-6 flex items-center gap-2"
                        >
                            <FiAward className="text-primary" /> Certifications
                        </motion.h3>
                        <div className="space-y-4">
                            {certifications.map((cert, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: 30, opacity: 0 }}
                                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                                    whileHover={{ x: -5 }}
                                    className="glass-card p-5 hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-white text-sm leading-snug">{cert.title}</h4>
                                            <p className="text-muted text-sm mt-1">{cert.issuer}</p>
                                            <div className="flex items-center gap-3 mt-2">
                                                <span className="flex items-center gap-1 text-xs text-muted">
                                                    <FiCalendar size={11} /> {cert.date}
                                                </span>
                                                <span className="text-xs text-muted/60">ID: {cert.id}</span>
                                            </div>
                                        </div>
                                        <div
                                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                            style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                                        >
                                            <FiAward size={14} style={{ color: cert.color }} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
