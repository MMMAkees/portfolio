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
    const isDark = theme === 'dark'

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
            // Offset: navbar height (80px) + small buffer (8px)
            const top = el.getBoundingClientRect().top + window.scrollY - 88
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl border-b shadow-lg' : 'bg-transparent'
                }`}
            style={scrolled ? {
                backgroundColor: 'var(--nav-bg)',
                borderColor: 'var(--nav-border)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.15)',
            } : {}}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[72px]">

                    {/* AK Logo */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-3 group cursor-pointer shrink-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-base text-white shadow-[0_0_20px_rgba(108,99,255,0.4)] group-hover:shadow-[0_0_30px_rgba(108,99,255,0.7)] transition-shadow">
                            AK
                        </div>
                    </motion.button>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                style={{ color: activeSection === link.href.replace('#', '') ? 'var(--text-primary)' : 'var(--text-muted)' }}
                                className="relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:opacity-100"
                            >
                                {activeSection === link.href.replace('#', '') && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute inset-0 rounded-lg border border-primary/30"
                                        style={{ backgroundColor: 'rgba(108,99,255,0.12)' }}
                                        transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                                    />
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Right: Hire Me → Theme Toggle → Mobile Hamburger */}
                    <div className="flex items-center gap-2 shrink-0">
                        <motion.a
                            href="mailto:akeesak15@gmail.com"
                            className="hidden md:block glow-button text-sm px-5 py-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Hire Me
                        </motion.a>

                        {/* Theme Toggle — AFTER Hire Me */}
                        <motion.button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                            style={{
                                border: '1px solid var(--border-color)',
                                backgroundColor: 'var(--card-bg)',
                                color: 'var(--text-muted)',
                            }}
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
                                    {isDark ? <FiSun size={16} className="text-yellow-400" /> : <FiMoon size={16} className="text-indigo-600" />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 rounded-lg transition-colors"
                            style={{ color: 'var(--text-muted)' }}
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
                        className="lg:hidden backdrop-blur-xl border-t overflow-hidden"
                        style={{ backgroundColor: 'var(--nav-bg)', borderColor: 'var(--nav-border)' }}
                    >
                        <div className="px-4 py-5 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.04 }}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left px-4 py-3 rounded-xl transition-all text-sm"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <div className="flex items-center gap-2 mt-3">
                                <a href="mailto:akeesak15@gmail.com" className="glow-button text-center flex-1 text-sm">
                                    Hire Me
                                </a>
                                <button
                                    onClick={toggleTheme}
                                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                                    style={{ border: '1px solid var(--border-color)', backgroundColor: 'var(--card-bg)' }}
                                >
                                    {isDark ? <FiSun size={18} className="text-yellow-400" /> : <FiMoon size={18} className="text-indigo-600" />}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
