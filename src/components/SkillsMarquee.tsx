import { motion } from 'framer-motion'

// Tech skills with SVG-style text logos
const skills = [
    { name: 'React.js', color: '#61DAFB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Node.js', color: '#339933' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Tailwind CSS', color: '#06B6D4' },
    { name: 'Express.js', color: '#888888' },
    { name: 'MySQL / SQL', color: '#00618A' },
    { name: 'Power BI', color: '#F2C811' },
    { name: 'Git & GitHub', color: '#F05032' },
    { name: 'Figma', color: '#FF7262' },
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'Bootstrap', color: '#7952B3' },
    { name: 'Python', color: '#3776AB' },
    { name: 'MERN Stack', color: '#6C63FF' },
]

// Duplicate for seamless loop
const row1 = [...skills, ...skills]
const row2 = [...skills].reverse().concat([...skills].reverse())

function MarqueeRow({ items, direction = 1, duration = 28 }: {
    items: typeof skills
    direction?: 1 | -1
    duration?: number
}) {
    return (
        <div className="flex overflow-hidden">
            <motion.div
                className="flex gap-5 w-max"
                animate={{ x: direction === 1 ? ['0%', '-50%'] : ['-50%', '0%'] }}
                transition={{ duration, repeat: Infinity, ease: 'linear' }}
            >
                {items.map((skill, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2.5 px-5 py-2.5 rounded-lg whitespace-nowrap text-sm font-semibold select-none cursor-default group transition-all duration-300"
                        style={{
                            border: `1px solid ${skill.color}22`,
                            background: `${skill.color}08`,
                        }}
                    >
                        {/* Color dot as brand indicator */}
                        <span
                            className="w-2 h-2 rounded-full shrink-0 transition-all duration-300 group-hover:scale-150"
                            style={{ backgroundColor: skill.color, boxShadow: `0 0 6px ${skill.color}80` }}
                        />
                        <span
                            className="font-bold transition-colors duration-300"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            {skill.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default function SkillsMarquee() {
    return (
        <div
            className="w-full overflow-hidden py-6 relative"
            style={{
                backgroundColor: 'var(--bg-secondary)',
                borderTop: '1px solid var(--border-color)',
                borderBottom: '1px solid var(--border-color)',
            }}
        >
            {/* Fade edges */}
            <div
                className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(90deg, var(--bg-secondary), transparent)' }}
            />
            <div
                className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(270deg, var(--bg-secondary), transparent)' }}
            />

            <div className="flex flex-col gap-4">
                <MarqueeRow items={row1} direction={1} duration={30} />
                <MarqueeRow items={row2} direction={-1} duration={25} />
            </div>
        </div>
    )
}
