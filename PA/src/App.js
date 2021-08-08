import { render } from '@testing-library/react'
import React from 'react'
import Header from './Components/header/Header'
import Section from './Components/section/Section'
import Gallery from './Components/gallery/Gallery'
import Form from './Components/form/FormAbas'
import './style.css'

const App = () => {
  render()
  {
    return (
      <>
        <Header />
        <Section />
        <Form />
        <Gallery />
      </>
    )
  }
}
export default App
