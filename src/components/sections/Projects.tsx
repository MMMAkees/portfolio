import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink, FiBarChart2, FiCode, FiGlobe } from 'react-icons/fi'

const projects = [
    {
        title: 'Learn AI Agents',
        description:
            'A modern educational platform helping developers understand and build Autonomous AI Agents. Features SEO optimization, social preview cards, and fully responsive layout.',
        tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'GitHub', 'Netlify'],
        github: 'https://lnkd.in/gCxmSDU9',
        live: 'https://lnkd.in/gzaYCRQP',
        icon: FiGlobe,
        color: '#6C63FF',
        gradient: 'from-[#6C63FF]/20 to-[#43E97B]/10',
        highlights: ['SEO optimized', 'Social preview ready', 'Custom domain + SSL'],
    },
    {
        title: 'FoodieHub – Food Delivery App',
        description:
            'A modern, fully responsive restaurant landing page with interactive food order modal, animated menu cards, special offers, customer testimonials, and reservation form.',
        tags: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
        github: 'https://lnkd.in/eYy9t9RS',
        live: 'https://lnkd.in/eA2QyVgR',
        icon: FiCode,
        color: '#FF6584',
        gradient: 'from-[#FF6584]/20 to-[#F5A623]/10',
        highlights: ['Responsive navbar', 'Food order modal', 'GitHub Pages deployed'],
    },
    {
        title: 'Business Process Analytics – MIM Distributors',
        description:
            'Academic HND project — a complete data science solution for a real-world wholesale distribution business. Built interactive Power BI dashboards tracking P&L trends, sales, and logistics.',
        tags: ['Power BI', 'Microsoft Excel', 'SQL', 'Data Analytics'],
        github: '',
        live: '',
        icon: FiBarChart2,
        color: '#43E97B',
        gradient: 'from-[#43E97B]/20 to-[#56CCF2]/10',
        highlights: ['Full data science lifecycle', 'Interactive dashboards', 'Demand forecasting'],
    },
]

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="projects" className="relative bg-dark py-28 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">Portfolio</span>
                    <h2 className="section-title mt-2">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-3 text-center">
                        Real-world applications and academic projects demonstrating my skill set
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col"
                        >
                            {/* Card top gradient bar */}
                            <div className={`h-1 w-full bg-gradient-to-r ${p.gradient.replace('/20', '').replace('/10', '')}`} style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}60)` }} />

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Icon + links */}
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
                                    >
                                        <p.icon size={22} style={{ color: p.color }} />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {p.github && (
                                            <a
                                                href={p.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted hover:text-white hover:border-primary/60 transition-all"
                                            >
                                                <FiGithub size={15} />
                                            </a>
                                        )}
                                        {p.live && (
                                            <a
                                                href={p.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted hover:text-white hover:border-primary/60 transition-all"
                                            >
                                                <FiExternalLink size={15} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-primary transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

                                {/* Highlights */}
                                <ul className="space-y-1 mb-5">
                                    {p.highlights.map((h) => (
                                        <li key={h} className="flex items-center gap-2 text-xs text-muted">
                                            <span style={{ color: p.color }}>✓</span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                    {p.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 rounded-full text-[11px] font-medium border"
                                            style={{
                                                borderColor: `${p.color}30`,
                                                backgroundColor: `${p.color}08`,
                                                color: `${p.color}CC`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
