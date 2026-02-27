import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Active section detection
            const sections = navLinks.map(l => l.href.replace('#', ''))
            for (const section of sections.reverse()) {
                const el = document.getElementById(section)
                if (el && window.scrollY >= el.offsetTop - 120) {
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
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-dark/80 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-lg shadow-[0_0_20px_rgba(108,99,255,0.4)] group-hover:shadow-[0_0_30px_rgba(108,99,255,0.7)] transition-shadow">
                            A
                        </div>
                        <span className="font-bold text-lg hidden sm:block">
                            <span className="gradient-text">Akees</span>
                            <span className="text-muted">.dev</span>
                        </span>
                    </motion.a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === link.href.replace('#', '')
                                        ? 'text-white'
                                        : 'text-muted hover:text-white'
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

                    {/* CTA + Mobile Menu */}
                    <div className="flex items-center gap-3">
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
                            className="md:hidden text-muted hover:text-white transition-colors p-2"
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
                        className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-border overflow-hidden"
                    >
                        <div className="px-4 py-6 flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left px-4 py-3 rounded-xl text-muted hover:text-white hover:bg-primary/10 transition-all"
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <a
                                href="mailto:akeesak15@gmail.com"
                                className="glow-button text-center mt-2"
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
