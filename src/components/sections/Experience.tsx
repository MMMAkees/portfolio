import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
    {
        role: 'Junior Software Engineer Intern',
        company: 'Marazin Academy',
        location: 'Sri Lanka',
        period: 'Jan 2026 – Present',
        type: 'Full-Time Internship',
        color: '#6C63FF',
        highlights: [
            'Developing responsive web apps using HTML, CSS, Bootstrap, JavaScript, and React.js',
            'Assisting in full-stack development with MongoDB, Express.js, and Node.js (MERN)',
            'Writing clean, maintainable code following industry best practices',
            'Using Git & GitHub for version control and collaborative development',
            'Debugging, testing, and improving app performance and usability',
            'Gaining exposure to Agile development workflows',
        ],
    },
]

export default function Experience() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="experience" className="relative bg-darker py-28 overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">Career</span>
                    <h2 className="section-title mt-2">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-3 text-center">
                        Real-world experience building production-grade software
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -60, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start mb-12"
                        >
                            {/* Dot */}
                            <div
                                className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-dark shadow-[0_0_15px_rgba(108,99,255,0.6)] z-10"
                            />

                            {/* Left: period */}
                            <div className="hidden md:flex md:w-1/2 md:pr-12 justify-end">
                                <div className="text-right mt-1">
                                    <div className="flex items-center justify-end gap-2 text-primary text-sm font-semibold">
                                        <FiCalendar size={13} />
                                        {exp.period}
                                    </div>
                                    <div className="text-muted text-sm mt-1">{exp.type}</div>
                                </div>
                            </div>

                            {/* Right: card */}
                            <div className="ml-14 md:ml-0 md:w-1/2 md:pl-12">
                                <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(108,99,255,0.1)] group">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ background: `${exp.color}18`, border: `1px solid ${exp.color}30` }}
                                        >
                                            <FiBriefcase size={18} style={{ color: exp.color }} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg leading-tight">{exp.role}</h3>
                                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                                                <span className="text-primary font-semibold text-sm">{exp.company}</span>
                                                <span className="text-border">·</span>
                                                <span className="flex items-center gap-1 text-muted text-sm">
                                                    <FiMapPin size={11} /> {exp.location}
                                                </span>
                                            </div>
                                            {/* Mobile period */}
                                            <div className="md:hidden flex items-center gap-1 text-xs text-muted mt-1">
                                                <FiCalendar size={11} /> {exp.period}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.highlights.map((h, j) => (
                                            <motion.li
                                                key={j}
                                                initial={{ x: -10, opacity: 0 }}
                                                animate={isInView ? { x: 0, opacity: 1 } : {}}
                                                transition={{ delay: 0.4 + j * 0.05 }}
                                                className="flex items-start gap-2 text-sm text-muted"
                                            >
                                                <span className="text-primary mt-1 shrink-0">▸</span>
                                                {h}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
