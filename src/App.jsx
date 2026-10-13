import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollReveal from './components/ScrollReveal'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import CaseStudyPage from './pages/CaseStudyPage'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname } = useLocation()
  const isCaseStudy = /^\/projects\/(stretus|sroi|erc20-token|luxury-perfume)\/?$/.test(pathname)
  return (
    <div className="min-h-screen overflow-x-clip bg-canvas text-ink">
      <ScrollToTop />
      <ScrollReveal />
      {!isCaseStudy && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={isCaseStudy ? <CaseStudyPage /> : <ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isCaseStudy && <Footer />}
    </div>
  )
}
