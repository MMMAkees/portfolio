import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMapPin, FiMail, FiPhone, FiCalendar } from 'react-icons/fi'

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
}

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="about" className="relative bg-darker py-28 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="section-container">
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left: Photo */}
                    <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
                        <div className="relative group">
                            {/* Glowing border rings */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary via-purple-500 to-accent rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
                            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-50" />
                            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-primary/30">
                                <img
                                    src="/akees.jpg"
                                    alt="Mohamed Akees"
                                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100"
                                />
                            </div>
                            {/* Badge overlay */}
                            <motion.div
                                className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                                    <span className="text-sm font-medium text-white">Open to Work</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Info */}
                    <div className="space-y-6">
                        <motion.div variants={fadeUp}>
                            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Who I Am</span>
                            <h2 className="section-title mt-2">
                                About <span className="gradient-text">Me</span>
                            </h2>
                        </motion.div>

                        <motion.p variants={fadeUp} className="text-muted leading-relaxed">
                            Motivated and detail-oriented{' '}
                            <span className="text-white font-medium">Junior Full-Stack Developer</span> with a strong
                            academic foundation in Software Engineering and hands-on experience in web development
                            and data analytics.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-muted leading-relaxed">
                            Skilled in building responsive web applications using the{' '}
                            <span className="text-primary font-medium">MERN stack</span> and transforming business
                            data into actionable insights using SQL, Excel, and Power BI. Passionate about
                            data-driven decision-making and continuous learning.
                        </motion.p>

                        {/* Info grid */}
                        <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            {[
                                { icon: FiMapPin, label: 'Location', value: 'Ampara, Sri Lanka' },
                                { icon: FiMail, label: 'Email', value: 'akeesak15@gmail.com' },
                                { icon: FiPhone, label: 'Phone', value: '+94 77 183 2725' },
                                { icon: FiCalendar, label: 'Born', value: '15 May 2004' },
                            ].map(({ icon: Icon, label, value }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/60 hover:border-primary/40 transition-colors"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Icon size={15} />
                                    </div>
                                    <div>
                                        <div className="text-[11px] text-muted uppercase tracking-wider">{label}</div>
                                        <div className="text-sm text-white font-medium">{value}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Languages */}
                        <motion.div variants={fadeUp} className="pt-2">
                            <p className="text-sm text-muted mb-3">Languages</p>
                            <div className="flex flex-wrap gap-2">
                                {['Tamil (Native)', 'English (Professional)', 'Sinhala (Professional)'].map((lang) => (
                                    <span key={lang} className="skill-tag text-xs">{lang}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
