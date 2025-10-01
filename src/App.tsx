import { Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import LandingPage from "./pages/LandingPages"

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
