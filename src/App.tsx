
import './App.css'

import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import About from './components/About'
import SkillsTechnologies from './components/SkillsTechnologies'
import FinalCTAContact from './components/FinalCTAContact'
import PremiumFooter from './components/PremiumFooter'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <SkillsTechnologies />
      <FinalCTAContact />
      <PremiumFooter />
    </>
  )
}






