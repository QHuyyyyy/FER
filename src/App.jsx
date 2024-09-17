import { useState } from 'react'

import './App.css'
import Navigation from './components/Header/Navigation'
import Footer from './components/Footer/Footer'
import MainComponent from './components/MainComponent'

function App() {
 
  return (
    <>
     <Navigation></Navigation>
   
   <MainComponent></MainComponent>
     <Footer></Footer>
    </>
  )
}

export default App
