import React from 'react'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'

const App = () => {
  return (
    // Struggling to get the whole app to fill the screen -- min-h-screen  ain't getting it done.
    <div className='app min-h-[100vh] flex justify-center bg-gray-500'>
      <div className='max-w-[500px]'>
        <Header />
        <Main />
        <Footer />
      </div>
    </ div>
  )
}

export default App