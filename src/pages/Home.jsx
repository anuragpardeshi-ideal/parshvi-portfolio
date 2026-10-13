import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const featuredSteps = [
  ['01 Challenge', 'Understanding why fragmented trading workflows slowed decision-making.'],
  ['02 Research', 'Learning how professional traders manage execution, analysis, and portfolios.'],
  ['03 Strategy', 'Defining the product vision, information architecture, and prioritization.'],
  ['04 Solution', 'Designing an integrated trading ecosystem that simplified complex workflows.'],
  ['05 Impact', 'Business outcomes, usability improvements, and lessons learned.'],
]

const aboutRows = [
  ['EXPERIENCE', '3 Years Shipping Production Product Surfaces'],
  ['SECTORS', 'Web3 Protocols　·　Fintech　·　Marketplaces　·　AI　·　Branding　·　2D Animation　·　3D Animation'],
  ['TOOLS', 'Figma　·　FigJam　·　Photoshop　·　Illustrator　·　Figma Make　·　After Effects　·　Miro'],
  ['COLLABORATORS', 'Founders, PMs, Protocol Engineers, Brand Teams'],
]

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section container-page" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="hero-eyebrow">Parshvi Gandhi · Product Designer · 2.5+ years</p>
          <h1 id="hero-heading">Designing products<br/>that make <em className="violet-word">complexity</em><br/><em>feel effortless.</em></h1>
          <p className="hero-description">I help early-stage teams turn complex protocols, marketplaces, and money products into surfaces people actually trust and ship them with the rigor of a system, not the polish of a screen.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#work">View Selected Work <ArrowRight size={15} aria-hidden="true" /></a>
            <a className="button-outline" href="/Parshvi-Gandhi-Resume.pdf" download>Download Resume <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-art"><img src="https://res.cloudinary.com/yhejafvu/image/upload/f_auto,q_auto/Mask_group" alt="Illustration of Parshvi beside product design dashboards" fetchPriority="high" /></div>
      </section>

      <section className="proof-strip" aria-label="Experience and sectors">
        <div className="container-page proof-grid">
          <div><strong>3+</strong><span>Experience</span></div>
          <div><strong>4+</strong><span>Products Shipped</span></div>
          <div className="proof-sectors"><strong><span>Web3</span><span>Fintech</span><span>Enterprise</span><span>Branding</span></strong><span>Blockchain &amp; Token Ecosystems</span></div>
          <div><strong>Marketplace</strong><span>Blockchain &amp; Token Ecosystems</span></div>
        </div>
      </section>

      <section className="work-section container-page" id="work" aria-labelledby="work-heading">
        <h2 id="work-heading">The product stories, told<br/>as <em>decisions</em> not screens.</h2>
        <div className="case-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>

      <section className="featured-section container-page" id="featured" aria-label="Featured product: Stretus">
        <div className="featured-panel">
          <aside className="featured-sidebar">
            <p className="featured-label">Featured Product</p>
            <div><h2>Stretus</h2><p>AI-Powered Algorithmic Trading Platform</p></div>
            <p className="featured-role">Lead Product Designer</p>
            <div className="featured-steps">{featuredSteps.map(([title, description]) => <div key={title}><h3>{title}</h3><p>{description}</p></div>)}</div>
            <Link className="featured-live-link" to="/projects/stretus">View Live Product <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </aside>
          <div className="featured-main">
            <div className="featured-topline" />
            <div className="featured-summary">
              <div><h3>From fragmented trading tools to one intelligent decision platform.</h3><p>The goal was to design a unified platform that streamlined trading activities, surfaced meaningful insights, and enabled faster, more confident decisions.</p></div>
              <div className="featured-metrics"><div><strong>12+</strong><span>Key Workflows<br/>Designed</span></div><div><strong>40%</strong><span>Reduction in<br/>Task Switching</span></div><div><strong>90%</strong><span>Core Trading Actions<br/>Within Two Clicks</span></div></div>
            </div>
            <img className="featured-dashboard" src="https://res.cloudinary.com/yhejafvu/image/upload/v1791452925/Project_Showcase_Image.png" alt="Stretus trading dashboard showing portfolio, market data, and trading actions" loading="lazy" /> 
            <p className="featured-caption">Designed to simplify complex trading decisions without sacrificing professional-grade functionality.</p>
          </div>
        </div>
      </section>

      <section className="about-section container-page" id="about" aria-labelledby="about-heading">
        <h2 id="about-heading">A short, honest read on what I&apos;ve<br/>done and what I&apos;m <em>built</em> for next.</h2>
        <div className="about-content">
          <dl className="about-list">{aboutRows.map(([label, value]) => <div className="about-row" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          <div className="about-portrait"><img src="https://res.cloudinary.com/yhejafvu/image/upload/v1791382131/Screenshot_2024-06-05_190714_1.png" alt="Portrait of Parshvi Gandhi" loading="lazy" /></div>
        </div>
        <blockquote>“Parshvi reads a product like a senior designer twice her experience. She doesn&apos;t ship surface, she ships judgment.”<cite>— Founder, Web3 protocol (referenced on request)</cite></blockquote>
      </section>
    </div>
  )
}
