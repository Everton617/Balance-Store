import { useState } from 'react'
import Navbar from './componentes/navbar'
import Carousel from './componentes/carousel'
import Featuresitem from './componentes/features-item'
import FeatureCards from './componentes/feature-cards'
import Shop from './componentes/shop'
import AboutUs from './componentes/about'
import './styles/responsive.sass'

function App() {

  return (
    <>
      <Navbar/>
      <Carousel/>
      <Featuresitem/>
      <FeatureCards/>
      <Shop/>
      <AboutUs/>
    </>
  )
}

export default App
