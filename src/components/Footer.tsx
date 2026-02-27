import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/MMMAkees', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/mohamed-akees', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:akeesak15@gmail.com', label: 'Email' },
]

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-darker border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid sm:grid-cols-3 gap-8 items-center">
                    {/* Logo */}
                    <div className="flex flex-col items-center sm:items-start gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm">
                                A
                            </div>
                            <span className="font-bold">
                                <span className="gradient-text">Akees</span>
                                <span className="text-muted">.dev</span>
                            </span>
                        </div>
                        <p className="text-muted text-xs text-center sm:text-left max-w-[180px]">
                            Full-Stack Developer & AI Enthusiast from Sri Lanka 🇱🇰
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex justify-center gap-6">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-muted text-sm hover:text-primary transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Social */}
                    <div className="flex justify-center sm:justify-end gap-3">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon size={16} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-muted text-xs">
                        © {year} Mohamed Akees. All rights reserved.
                    </p>
                    <p className="text-muted text-xs flex items-center gap-1">
                        Built with <FiHeart className="text-secondary" size={12} /> using React, TypeScript & Three.js
                    </p>
                </div>
            </div>
        </footer>
    )
}
