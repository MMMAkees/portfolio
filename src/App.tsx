import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="relative min-h-screen bg-dark text-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
