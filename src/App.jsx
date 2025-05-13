import React from 'react'
import './App.css'
import { Home } from './components/Home'
import { About } from './components/About'
import { Species } from './components/Species'
import { SharkGallery } from './components/SharkGallery'
import { SharkIntroVideo } from './components/SharkIntroVideo'
import { SharkQuiz } from './components/SharkQuiz'
import { SharkFeatureSection } from './components/SharkFeatureSection'


function App() {

  return (
    <>
      <main className=" w-screen  h-auto flex flex-col justify-center items-center overflow-hidden  ">
        <Home />
        <About />
        <SharkIntroVideo />
        <Species />
        <SharkGallery />
        <SharkFeatureSection/>
        <SharkQuiz />
      </main>

    </>
  )
}

export default App
