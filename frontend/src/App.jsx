import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import LendingLifecyclePage from './pages/LendingLifecyclePage'
import CollectionsPage from './pages/CollectionsPage'
import AgenticAIPage from './pages/AgenticAIPage'
import APIInfraPage from './pages/APIInfraPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SignUpPage from './pages/SignUpPage'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1A1A2E' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/lending-lifecycle" element={<LendingLifecyclePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/agentic-ai" element={<AgenticAIPage />} />
        <Route path="/api-infrastructure" element={<APIInfraPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
