import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0)
    const [phase, setPhase] = useState<'loading' | 'done'>('loading')

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => {
                        setPhase('done')
                        setTimeout(onComplete, 600)
                    }, 300)
                    return 100
                }
                // Ease the progress — fast then slow then fast
                const increment = prev < 70 ? Math.random() * 12 + 4 : Math.random() * 5 + 1
                return Math.min(prev + increment, 100)
            })
        }, 100)
        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <AnimatePresence>
            {phase === 'loading' && (
                <motion.div
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0F] overflow-hidden"
                >
                    {/* Animated grid background */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(108,99,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,1) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px',
                        }}
                    />

                    {/* Radial glow */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(108,99,255,0.12) 0%, transparent 70%)',
                        }}
                        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Scanning line */}
                    <motion.div
                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"
                        animate={{ top: ['0%', '100%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Corner decorations */}
                    {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
                        <div key={i} className={`absolute ${pos} w-5 h-5`}>
                            <div className={`absolute inset-0 border-primary/60 border-t-2 border-l-2 ${i >= 2 ? 'rotate-180' : ''} ${i === 1 || i === 3 ? '-scale-x-100' : ''}`} />
                        </div>
                    ))}

                    {/* Main content */}
                    <div className="relative flex flex-col items-center gap-8">
                        {/* AK Logo */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_60px_rgba(108,99,255,0.6)] font-bold text-4xl text-white"
                                style={{ fontFamily: 'Outfit, sans-serif' }}>
                                AK
                            </div>
                            {/* Rotating ring */}
                            <motion.div
                                className="absolute -inset-3 rounded-2xl border-2 border-primary/30"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                style={{ borderStyle: 'dashed' }}
                            />
                            <motion.div
                                className="absolute -inset-6 rounded-3xl border border-primary/15"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                                style={{ borderStyle: 'dashed' }}
                            />
                        </motion.div>

                        {/* Name */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-center"
                        >
                            <h1 className="text-2xl font-bold tracking-[0.3em] uppercase text-white">
                                Mohamed Akees
                            </h1>
                            <p className="text-primary/80 text-sm tracking-[0.4em] uppercase mt-1 font-medium">
                                Portfolio
                            </p>
                        </motion.div>

                        {/* Progress bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="w-64 flex flex-col items-center gap-2"
                        >
                            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                    style={{ width: `${progress}%` }}
                                    transition={{ duration: 0.1 }}
                                />
                                {/* Glow on progress head */}
                                <motion.div
                                    className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent to-accent/80"
                                    style={{ left: `calc(${progress}% - 2rem)` }}
                                />
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <span className="text-muted text-xs tracking-widest">INITIALIZING</span>
                                <span className="text-primary text-xs font-mono font-bold">
                                    {Math.round(progress)}%
                                </span>
                            </div>
                        </motion.div>

                        {/* Blinking status */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center gap-2 text-muted/50 text-xs tracking-widest uppercase"
                        >
                            <motion.span
                                className="w-1.5 h-1.5 rounded-full bg-accent"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                            {progress < 40 ? 'Loading Assets...' : progress < 80 ? 'Building Interface...' : 'Almost Ready...'}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
