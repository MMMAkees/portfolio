import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import SkillsMarquee from './components/SkillsMarquee'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function PortfolioApp() {
    const [loaded, setLoaded] = useState(false)

    return (
        <>
            {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
            <div
                style={{
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                }}
                className="relative min-h-screen overflow-x-hidden"
            >
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <SkillsMarquee />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Education />
                    <Certifications />
                    <Contact />
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </>
    )
}

function App() {
    return (
        <ThemeProvider>
            <PortfolioApp />
        </ThemeProvider>
    )
}

export default App
