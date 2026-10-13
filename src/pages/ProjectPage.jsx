import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectArtwork from '../components/ProjectArtwork'
import { getProject, projects } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <Navigate to="/404" replace />

  const currentIndex = projects.findIndex((item) => item.slug === slug)
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length]
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <article className="pt-8">
      <header className="container-page pb-14 pt-12 md:pb-20 md:pt-20">
        <Link className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame" to="/#work"><ArrowLeft size={16} aria-hidden="true"/>All projects</Link>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <div><p className="eyebrow text-flame">{project.index} / Case study</p><h1 className="display-title mt-6">{project.title}</h1></div>
          <div><p className="text-xl leading-relaxed text-muted">{project.intro}</p><div className="mt-7 flex justify-between border-t border-line pt-4 text-xs font-bold uppercase tracking-[0.12em]"><span>{project.discipline}</span><span>{project.year}</span></div></div>
        </div>
      </header>

      <div className="container-page"><div className="group overflow-hidden rounded-[1.75rem] md:rounded-[3rem]"><ProjectArtwork tone={project.tone}/></div></div>

      <section className="container-page grid gap-12 py-24 md:grid-cols-[0.65fr_1.35fr] md:py-36">
        <div><p className="eyebrow text-flame">Overview</p><ul className="mt-8 space-y-3 text-sm font-semibold">{project.focus.map((item)=><li className="border-b border-line pb-3" key={item}>{item}</li>)}</ul></div>
        <p className="text-balance text-3xl font-bold leading-tight tracking-[-0.045em] md:text-5xl">{project.summary}</p>
      </section>

      <section className="bg-ink py-24 text-white md:py-36">
        <div className="container-page grid gap-14 md:grid-cols-2 md:gap-24">
          <div><p className="eyebrow text-white/45">The challenge</p><p className="mt-8 text-2xl font-semibold leading-snug tracking-[-0.03em] md:text-4xl">{project.challenge}</p></div>
          <div className="md:mt-28"><p className="eyebrow text-acid">The response</p><p className="mt-8 text-xl leading-relaxed text-white/70 md:text-2xl">{project.response}</p></div>
        </div>
      </section>

      <section className="container-page py-24 md:py-36">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem]"><ProjectArtwork tone={project.tone}/></div>
          <div className="flex min-h-[24rem] flex-col justify-between rounded-[1.75rem] bg-paper p-8 md:min-h-[32rem] md:rounded-[2.5rem] md:p-12">
            <p className="eyebrow text-flame">Design principles</p>
            <div className="space-y-6">{['Clarity before decoration','Context at the right moment','A system built to grow'].map((item,index)=><div className="flex gap-5 border-t border-line pt-5" key={item}><span className="text-xs font-bold text-muted">0{index+1}</span><p className="text-xl font-bold tracking-[-0.035em]">{item}</p></div>)}</div>
          </div>
        </div>
      </section>

      <nav className="border-t border-line" aria-label="Project navigation">
        <div className="container-page grid md:grid-cols-2">
          <Link className="group flex items-center gap-5 py-10 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-flame md:border-r md:border-line md:py-14" to={`/projects/${previous.slug}`}><ArrowLeft className="transition-transform group-hover:-translate-x-1" aria-hidden="true"/><span><span className="eyebrow text-muted">Previous</span><span className="mt-2 block text-2xl font-bold tracking-[-0.04em]">{previous.title}</span></span></Link>
          <Link className="group flex items-center justify-end gap-5 border-t border-line py-10 text-right focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-flame md:border-t-0 md:py-14" to={`/projects/${next.slug}`}><span><span className="eyebrow text-muted">Next</span><span className="mt-2 block text-2xl font-bold tracking-[-0.04em]">{next.title}</span></span><ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true"/></Link>
        </div>
      </nav>
    </article>
  )
}
