import './App.css'
import About from './pages/about/About'
import Header from './pages/header/Header'
import Home from './pages/home/Home'
import Skills from './pages/skills/Skills'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'
import Projects from './pages/projects/Projects'
import SectionWrapper from './components/UI/SectionWrapper'


function App() {


  return (
    <>
      <Header />
      <main>
        <SectionWrapper id='home'>
          <Home />
        </SectionWrapper>

        <SectionWrapper id='about'>
          <About />
        </SectionWrapper>

        <SectionWrapper id='skills'>
          <Skills />
        </SectionWrapper>

        <SectionWrapper id='projects'>
          <Projects />
        </SectionWrapper>

        <SectionWrapper id='contact'>
          <Contact />
        </SectionWrapper>

        <SectionWrapper id='footer'>
          <Footer />
        </SectionWrapper>
      </main>

    </>
  )
}

export default App
