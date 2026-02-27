import { motion } from 'framer-motion'

const skills = [
    { name: 'React.js', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'JavaScript', icon: '🟡' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Power BI', icon: '📊' },
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'Figma', icon: '🎨' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'Excel', icon: '📈' },
    { name: 'Python', icon: '🐍' },
]

// Duplicate for seamless loop
const marqueeItems = [...skills, ...skills]

export default function SkillsMarquee() {
    return (
        <div className="w-full overflow-hidden py-3 border-y border-border/50 bg-card/20 backdrop-blur-sm relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-dark to-transparent pointer-events-none dark:from-dark light:from-[#F0F0FA]" />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-dark to-transparent pointer-events-none dark:from-dark light:from-[#F0F0FA]" />

            <motion.div
                className="flex gap-8 w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
                {marqueeItems.map((skill, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-5 py-2 rounded-full border border-border/70 bg-card/60 whitespace-nowrap text-sm font-medium text-muted hover:text-white hover:border-primary/50 transition-colors cursor-default"
                    >
                        <span className="text-base">{skill.icon}</span>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
