import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[75vh] place-items-center pb-20 pt-40 text-center">
      <div><p className="eyebrow text-flame">404 / Page not found</p><h1 className="section-title mt-6">This page wandered off.</h1><p className="mx-auto mt-6 max-w-md text-lg text-muted">The page you&apos;re looking for doesn&apos;t exist or may have moved.</p><Link className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame" to="/"><ArrowLeft size={18}/>Back home</Link></div>
    </section>
  )
}
