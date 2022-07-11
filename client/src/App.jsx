import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Transactions from "./components/Transactions"
import Welcome from "./components/Welcome"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./coin/Coin"
import Home from "./Home"
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen gradient-bg-welcome">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="coin" element={<Coin />} />
        </Routes>
        <Footer />
        {/* <div className="gradient-bg-welcome">

          <Welcome />
        </div>
        <Services />
        <Transactions /> */}

      </div>
    </BrowserRouter>
  )
}

export default App






{/* <div className="min-h-screen">        
<div className="gradient-bg-welcome">
  <Navbar />
  <Welcome />
</div>
<Services />
<Transactions />
<Footer />
</div> */}