import Header from "./components/Header/Header"
import './App.css'
import CardsPages from "./pages/CardsPages/CardsPages"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
     <Header/>
     <main>
      <CardsPages/>
     </main>
     <Footer/>
    </>
  )
}

export default App
