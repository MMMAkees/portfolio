import { motion } from 'framer-motion'
import {
    SiReact, SiTypescript, SiJavascript, SiNodedotjs,
    SiMongodb, SiTailwindcss, SiExpress, SiMysql,
    SiGit, SiGithub, SiFigma,
    SiHtml5, SiCss3, SiBootstrap, SiPython, SiPostman,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

interface Skill {
    name: string
    icon: IconType
    color: string
}

const skills: Skill[] = [
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Express.js', icon: SiExpress, color: '#aaaaaa' },
    { name: 'MySQL', icon: SiMysql, color: '#00618A' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#cccccc' },
    { name: 'Figma', icon: SiFigma, color: '#FF7262' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
]

const row1 = [...skills, ...skills]
const row2 = [...skills].reverse().concat([...skills].reverse())

function SkillItem({ skill }: { skill: Skill }) {
    const Icon = skill.icon
    return (
        <div
            className="group flex items-center gap-3 px-6 py-3 rounded-xl whitespace-nowrap cursor-default select-none transition-all duration-300 hover:scale-105"
            style={{
                border: '1px solid var(--border-color)',
                background: 'var(--card-bg)',
            }}
        >
            {/* Brand logo icon */}
            <Icon
                size={22}
                className="transition-all duration-300"
                style={{ color: 'var(--text-muted)', filter: 'grayscale(1)', opacity: 0.7 }}
            />
            <span
                className="text-sm font-semibold tracking-wide transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
            >
                {skill.name}
            </span>
        </div>
    )
}

function MarqueeRow({ items, direction = 1, duration = 30 }: {
    items: Skill[]
    direction?: 1 | -1
    duration?: number
}) {
    return (
        <div className="flex overflow-hidden">
            <motion.div
                className="flex gap-4 w-max"
                animate={{ x: direction === 1 ? ['0%', '-50%'] : ['-50%', '0%'] }}
                transition={{ duration, repeat: Infinity, ease: 'linear' }}
            >
                {items.map((skill, i) => (
                    <SkillItem key={i} skill={skill} />
                ))}
            </motion.div>
        </div>
    )
}

export default function SkillsMarquee() {
    return (
        <div
            className="w-full overflow-hidden py-7 relative"
            style={{
                backgroundColor: 'var(--bg-secondary)',
                borderTop: '1px solid var(--border-color)',
                borderBottom: '1px solid var(--border-color)',
            }}
        >
            {/* Fade edges */}
            <div
                className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(90deg, var(--bg-secondary), transparent)' }}
            />
            <div
                className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(270deg, var(--bg-secondary), transparent)' }}
            />

            <div className="flex flex-col gap-4">
                <MarqueeRow items={row1} direction={1} duration={32} />
                <MarqueeRow items={row2} direction={-1} duration={26} />
            </div>
        </div>
    )
}
