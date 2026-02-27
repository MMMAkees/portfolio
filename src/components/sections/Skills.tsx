import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    FiCode, FiDatabase, FiTool, FiBarChart2, FiLayout, FiServer,
} from 'react-icons/fi'

const skillCategories = [
    {
        icon: FiLayout,
        title: 'Frontend',
        color: '#6C63FF',
        skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
        icon: FiServer,
        title: 'Backend',
        color: '#43E97B',
        skills: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
        icon: FiDatabase,
        title: 'Database',
        color: '#FF6584',
        skills: ['MongoDB', 'SQL', 'SQL Server'],
    },
    {
        icon: FiBarChart2,
        title: 'Data Analytics',
        color: '#F5A623',
        skills: ['Power BI', 'Microsoft Excel', 'Data Cleaning', 'Data Visualization'],
    },
    {
        icon: FiTool,
        title: 'Tools & DevOps',
        color: '#56CCF2',
        skills: ['Git', 'GitHub', 'Figma', 'SSMS', 'VS Code'],
    },
    {
        icon: FiCode,
        title: 'Other',
        color: '#BB6BD9',
        skills: ['Responsive Design', 'Debugging', 'Software Testing', 'Agile'],
    },
]

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="skills" className="relative bg-dark py-28 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">What I Know</span>
                    <h2 className="section-title mt-2">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-3 text-center">
                        A diverse toolkit built through academic study and real-world projects
                    </p>
                </motion.div>

                {/* Skill Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ y: 40, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(108,99,255,0.1)]"
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
                                >
                                    <cat.icon size={18} style={{ color: cat.color }} />
                                </div>
                                <h3 className="font-semibold text-white">{cat.title}</h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border text-[#C8C8E8] transition-all duration-300 cursor-default"
                                        style={{
                                            borderColor: `${cat.color}30`,
                                            backgroundColor: `${cat.color}0A`,
                                        }}
                                        whileHover={{
                                            backgroundColor: `${cat.color}20`,
                                            borderColor: `${cat.color}60`,
                                            color: '#fff',
                                            scale: 1.05,
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
