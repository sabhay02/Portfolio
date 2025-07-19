import React from 'react'
import './Home.css'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import Connect from '../../components/Connect/Connect'
const Home = () => {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Connect />
    </div>
  )
}

export default Home
