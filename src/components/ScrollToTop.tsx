import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 400)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-8 right-6 z-50 w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(108,99,255,0.5)] hover:shadow-[0_0_30px_rgba(108,99,255,0.8)] transition-all duration-300 hover:scale-110"
                    whileTap={{ scale: 0.9 }}
                >
                    <FiArrowUp size={18} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
