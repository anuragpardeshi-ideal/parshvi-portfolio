import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PortfolioVisual from './PortfolioVisual'

export default function ProjectCard({ project }) {
  return (
    <article className="case-card">
      <Link className="case-card-image" to={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}><PortfolioVisual slug={project.slug} /></Link>
      <div className="case-card-content">
        <span className="case-number">{project.index}</span>
        <h3>{project.title}</h3>
        <p className="case-subtitle">{project.discipline}</p>
        <span className="case-duration">{project.duration}</span>
        <p className="case-summary">{project.summary}</p>
      </div>
      <Link className="case-card-action" to={`/projects/${project.slug}`}>View Case Study <ArrowRight size={18} aria-hidden="true" /></Link>
    </article>
  )
}
