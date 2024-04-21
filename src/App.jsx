import { useState } from 'react'

import ContactForm from './components/ContactForm'
import Services from './components/Services'
import Gallery from './components/Gallery'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactForm />
      <Services />  
      <Gallery />     
    </>
  )
}

export default App
