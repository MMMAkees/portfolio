import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
            const sections = navLinks.map(l => l.href.replace('#', ''))
            for (const section of [...sections].reverse()) {
                const el = document.getElementById(section)
                if (el && window.scrollY >= el.offsetTop - 100) {
                    setActiveSection(section)
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href: string) => {
        setMenuOpen(false)
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 90
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    const isDark = theme === 'dark'

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--nav-border)] shadow-[0_4px_30px_rgba(0,0,0,0.2)]'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* AK Logo */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-3 group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-lg text-white shadow-[0_0_20px_rgba(108,99,255,0.4)] group-hover:shadow-[0_0_30px_rgba(108,99,255,0.7)] transition-shadow">
                            AK
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-30 blur-md transition-opacity" />
                        </div>
                    </motion.button>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === link.href.replace('#', '')
                                        ? 'text-white dark:text-white'
                                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                                    }`}
                            >
                                {activeSection === link.href.replace('#', '') && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-primary/15 rounded-lg border border-primary/30"
                                        transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                                    />
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Right: Theme Toggle + CTA + Mobile Menu */}
                    <div className="flex items-center gap-2">
                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="relative w-10 h-10 rounded-xl border border-[var(--nav-border)] bg-[var(--card-bg)] flex items-center justify-center text-[var(--text-muted)] hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(108,99,255,0.2)]"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>

                        <motion.a
                            href="mailto:akeesak15@gmail.com"
                            className="hidden md:block glow-button text-sm px-5 py-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Hire Me
                        </motion.a>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-2"
                        >
                            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[var(--nav-bg)] backdrop-blur-xl border-t border-[var(--nav-border)] overflow-hidden"
                    >
                        <div className="px-4 py-6 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.04 }}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left px-4 py-3 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-primary/10 transition-all text-sm"
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <a href="mailto:akeesak15@gmail.com" className="glow-button text-center mt-3 text-sm">
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
