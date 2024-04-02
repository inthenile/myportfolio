import './App.css'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'

function App() {
 
  return (
    <div className="App">
        <Header />
        <Navbar/>
        <div className="skills-and-projects">
            <Skills />
            <Projects />
        </div>
        <ContactForm />
        <Footer />
    </div>
  )
}

export default App
