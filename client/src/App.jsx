import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Transactions from "./components/Transactions"
import Welcome from "./components/Welcome"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
