import Header from './Header'
import HeroSection from './HeroSection'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header active="INICIO" />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default App
