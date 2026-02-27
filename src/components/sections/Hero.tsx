import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import HeroScene from '../three/HeroScene'

const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/MMMAkees', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/mohamed-akees', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:akeesak15@gmail.com', label: 'Email' },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
}

const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
            {/* Three.js Background */}
            <HeroScene />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent pointer-events-none" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Content */}
            <div className="relative z-10 section-container flex flex-col items-center text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center gap-6"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Available for Work
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.div variants={itemVariants} className="space-y-2">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                            <span className="text-white">Mohamed </span>
                            <span className="gradient-text text-glow">Akees</span>
                        </h1>
                    </motion.div>

                    {/* Title */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-2 text-xl md:text-2xl font-medium text-muted">
                        <span>Full-Stack Developer</span>
                        <span className="text-primary">·</span>
                        <span className="gradient-text-secondary">AI Enthusiast</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="max-w-xl text-muted text-base md:text-lg leading-relaxed"
                    >
                        Building modern web applications with the MERN stack and transforming data into
                        actionable insights. Based in{' '}
                        <span className="text-white font-medium">Sri Lanka 🇱🇰</span>
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mt-2">
                        <motion.button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="glow-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.button>
                        <motion.button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="outline-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants} className="flex items-center gap-4 mt-2">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-10 h-10 rounded-xl border border-border bg-card/60 flex items-center justify-center text-muted hover:text-primary hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(108,99,255,0.3)]"
                                whileHover={{ scale: 1.15, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                        <div className="w-px h-6 bg-border mx-1" />
                        <span className="text-muted text-sm">+94 77 183 2725</span>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-3 gap-6 sm:gap-10 mt-6 pt-8 border-t border-border/50 w-full max-w-sm"
                    >
                        {[
                            { value: '1+', label: 'Year Experience' },
                            { value: '3+', label: 'Projects Built' },
                            { value: '10+', label: 'Technologies' },
                        ].map(({ value, label }) => (
                            <div key={label} className="text-center">
                                <div className="text-2xl font-bold gradient-text">{value}</div>
                                <div className="text-xs text-muted mt-1">{label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll down indicator */}
            <motion.button
                onClick={scrollToAbout}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                    <FiArrowDown size={18} />
                </motion.div>
            </motion.button>
        </section>
    )
}
