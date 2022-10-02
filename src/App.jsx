import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import Category from './Components/Category'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  

  return (
    <>
      <div className="sticky top-0 z-20 ">
        <Header />
        <Category />
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default App
