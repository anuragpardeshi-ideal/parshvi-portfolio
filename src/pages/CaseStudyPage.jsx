import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink, HandHeart, Hourglass, Sun, RefreshCw, Unplug, Search, UserRound, Eye, Infinity as InfinityIcon, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import '../case-studies.css'
import '../luxury.css'
import '../case-study-overrides.css'

const SROI_IMAGES = {
  creator: 'https://res.cloudinary.com/yhejafvu/image/upload/v1791707605/Group_1000005832_1.png',
  funder: 'https://res.cloudinary.com/yhejafvu/image/upload/v1791707684/Group_1000005834.png',
  governance: 'https://res.cloudinary.com/yhejafvu/image/upload/v1791707696/Group_1000005835.png',
  website: 'https://res.cloudinary.com/yhejafvu/image/upload/v1791707740/Hero_Image.png',
  protocol: 'https://res.cloudinary.com/yhejafvu/image/upload/v1791707750/SROI_protocol_01_1_1.png',
}

const MAGAFOX_IMAGES = {
  discovery: 'https://res.cloudinary.com/yhejafvu/image/upload/v1791707921/Group_1000005836.png',
  contribute: 'https://res.cloudinary.com/yhejafvu/image/upload/v1791707927/Group_1000005837.png',
  progress: 'https://res.cloudinary.com/yhejafvu/image/upload/v1791707933/Group_1000005838.png',
  impact: 'https://res.cloudinary.com/yhejafvu/image/upload/v1791707943/Group_1000005839.png',
  governance: 'https://res.cloudinary.com/yhejafvu/image/upload/v1791707949/Group_1000005840.png',
  hero: 'https://res.cloudinary.com/yhejafvu/image/upload/v1791708304/Group_1000004408_1.png',
}

const studies = {
  stretus: { number: '01', name: 'Stretus', next: 'sroi' },
  sroi: { number: '02', name: 'SROI Protocol', next: 'erc20-token' },
  'erc20-token': { number: '03', name: 'ERC-20 Token', next: 'luxury-perfume' },
  'luxury-perfume': { number: '04', name: 'Luxury Perfume', next: 'stretus' },
}

const navigation = [
  ['overview', 'Overview', '01'],
  ['challenge', 'The Challenge', '02'],
  ['research', 'Research', '03'],
  ['decisions', 'Key Decisions', '04'],
  ['solution', 'Solution', '05'],
  ['impact', 'Impact', '06'],
]

function Sidebar({ slug }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')
  const items = slug === 'luxury-perfume' ? navigation.slice(0, 1) : navigation

  useEffect(() => {
    const sectionItems = slug === 'luxury-perfume' ? navigation.slice(0, 1) : navigation
    const sections = sectionItems.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-18% 0px -62% 0px', threshold: [0, .15, .4] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [slug])

  const liveTarget = slug === 'luxury-perfume' ? '#brand-guidelines' : '#solution'
  return <aside className="study-sidebar">
    <div className="study-sidebar-top">
      <Link className="study-brand" to="/" aria-label="Parshvi Gandhi, home"><span className="study-brand-mark">PG</span><span className="study-brand-person"><strong>PARSHVI GANDHI</strong><small>Product Designer</small></span></Link>
      <button className="study-menu-button" type="button" aria-label={open ? 'Close case study menu' : 'Open case study menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
    <div className={`study-sidebar-body ${open ? 'is-open' : ''}`}>
      <Link to="/#work" className="study-back"><ArrowLeft size={16} /> Back to work</Link>
      <nav aria-label="Case study sections" className="study-navigation">{items.map(([id, label, number]) => {
        const isCurrent = activeSection === id
        return <a key={id} href={`#${id}`} onClick={() => { setActiveSection(id); setOpen(false) }} className={isCurrent ? 'is-current' : ''} aria-current={isCurrent ? 'location' : undefined}><span>{isCurrent ? <i className="study-nav-dot" /> : number}</span>{label}</a>
      })}</nav>
      <a className="study-live" href={liveTarget} onClick={() => setOpen(false)}>View Live Project <ExternalLink size={17} /></a>
    </div>
  </aside>
}

function Topbar({ study }) {
  return <div className="study-topbar"><div className="study-kicker"><i /> <span>CASE STUDY</span><b>{study.number}</b></div><Link className="study-next" to={`/projects/${study.next}`}>Next Project <ArrowRight size={15} /></Link></div>
}

function AtGlance({ items }) {
  return <section className="study-glance" aria-labelledby="glance-title"><h2 id="glance-title">At Glance</h2><div className="study-glance-grid">{items.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></section>
}

function SectionHeader({ number, title, id }) {
  return <div className="study-section-heading"><span>{number}</span><h2 id={`${id}-title`}>{title}</h2></div>
}

function Lesson({ children }) {
  return <div className="study-lesson"><h3>What I Learned</h3><p>{children}</p></div>
}

function MockWindow({ variant = 'light', type = 'dashboard' }) {
  return <div className={`study-mock study-mock-${variant} study-mock-${type}`} aria-label={`${type.replace('-', ' ')} interface mockup`} role="img">
    <div className="study-mock-head"><span className="study-mock-logo">{variant === 'gold' ? 'MAGAFOX47' : variant === 'purple' ? 'MeasureMint' : 'Stretus'}</span><span>Overview · Analytics · Reports</span><i /></div>
    <div className="study-mock-body"><div className="study-mock-rail"><b>◈</b><span>Overview</span><span>Explore</span><span>Activity</span><span>Settings</span></div><div className="study-mock-main"><div className="study-mock-title"><strong>{type === 'builder' ? 'Build a strategy without coding skills' : type === 'impact' ? 'Verified impact, visible progress' : type === 'governance' ? 'Governance overview' : type === 'market' ? 'Market overview' : 'Your dashboard'}</strong><small>See the full picture at a glance</small></div><div className="study-mock-stats"><span><small>Total impact</small><b>{variant === 'purple' ? '$83.8M' : variant === 'gold' ? '125K+' : '$12.6M'}</b></span><span><small>Active programs</small><b>{variant === 'gold' ? '24' : '128'}</b></span><span><small>Performance</small><b>+18.4%</b></span></div><div className="study-mock-chart"><div className="study-mock-line" /><div className="study-mock-bars">{Array.from({ length: 17 }, (_, index) => <i key={index} style={{ height: `${24 + ((index * 37) % 66)}%` }} />)}</div></div><div className="study-mock-table"><span>Strategy / Initiative</span><span>Status</span><span>Progress</span><span>Verified</span></div></div></div>
  </div>
}

function StretusHeroArt() {
  return <div className="stretus-hero-art" aria-label="Stretus calibration intelligence cycle illustration" role="img"><div className="stretus-art-halo"/><div className="stretus-art-platform"/><div className="stretus-art-ring"><span className="ring-label ring-label-top">OBSERVE</span><span className="ring-label ring-label-right">MEASURE</span><span className="ring-label ring-label-bottom">CALIBRATE</span><span className="ring-label ring-label-left">REVALIDATE</span><div className="stretus-art-center"><span>◈</span><b>STRETUS</b><small>CALIBRATION<br/>INTELLIGENCE</small></div></div></div>
}

function SroiHeroArt() {
  return <div className="sroi-hero-art"><img className="sroi-hero-image" src={SROI_IMAGES.protocol} alt="SROI protocol coin representing measure, verify, share, and trusted impact" /></div>
}

function Hero({ slug }) {
  if (slug === 'stretus') return <section className="study-hero study-hero-stretus" id="overview" aria-labelledby="overview-title"><div className="study-hero-copy"><p className="study-project-name">Stretus</p><h1 id="overview-title">Simplifying<br/><em>algorithmic trading</em> for<br/>Everyday Investors.</h1><p className="study-hero-description">An AI-powered ecosystem that enables traders to automate strategies with confidence while giving brokers the visibility, control, and governance required to manage risk and compliance. Designed to align innovation with accountability at scale.</p><p className="study-tags">AI Trading • Broker Console • Risk Management • Compliance Workflows</p></div><img className="stretus-hero-image" src="https://res.cloudinary.com/yhejafvu/image/upload/v1791453402/STRETUS_MAIN.png" alt="Stretus calibration intelligence cycle" /></section>
  if (slug === 'sroi') return <section className="study-hero study-hero-sroi" id="overview" aria-labelledby="overview-title"><div className="study-hero-copy"><p className="study-project-name">SROI Protocol</p><h1 id="overview-title">Making Social Impact<br/><em>Measurable, Verifiable,</em> and<br/><em>Fundable</em></h1><p className="study-hero-description">Designing a governance and impact-verification ecosystem that transforms social outcomes into transparent, evidence-backed assets.</p></div><SroiHeroArt /></section>
  return <section className="study-hero study-hero-token" id="overview" aria-labelledby="overview-title"><div className="study-token-banner"><img className="study-token-hero-image" src={MAGAFOX_IMAGES.hero} alt="MagaFox47 supporting hunger relief across communities around the world" /><div className="study-token-copy"><h1 id="overview-title">Designing a<br/>Transparent Future<br/>for <em>Hunger Relief</em></h1><p>MagaFox47 is a mission-driven ecosystem connecting communities, initiatives, and resources to support hunger-relief efforts across America.</p><p>The platform was designed to make participation more transparent, outcomes more visible, and impact easier to understand through a unified digital experience.</p></div></div></section>
}

const glance = {
  stretus: [
    ['THE PROBLEM', 'Algorithmic trading remained inaccessible for many retail traders due to technical complexity, while brokers lacked the controls needed to manage risk and compliance.'],
    ['THE OPPORTUNITY', 'Algorithmic trading remained inaccessible for many retail traders due to technical complexity, while brokers lacked the controls needed to manage risk and compliance.'],
    ['MY ROLE', 'Led the end-to-end product design process, from platform architecture and workflows to dashboards, design systems, and user experiences.'],
    ['IMPACT', 'Created a broker-controlled trading ecosystem that balanced automation, transparency, and governance across the entire strategy lifecycle.'],
  ],
  sroi: [
    ['THE PROBLEM', 'Impact was often measured through reports and claims rather than verifiable evidence, creating challenges in transparency, accountability, and funding confidence.'],
    ['THE OPPORTUNITY', 'Build an ecosystem where social outcomes could be documented, verified, funded, and governed through a structured and transparent lifecycle.'],
    ['MY ROLE', 'Owned the product design strategy and execution, shaping stakeholder workflows, verification experiences, governance systems, and the overall user experience.'],
    ['IMPACT', 'Established a framework that connected impact creation, verification, funding, and governance, creating greater transparency and accountability across the ecosystem.'],
  ],
  'erc20-token': [
    ['THE PROBLEM', 'Impact was difficult to see and verify. Participants often lacked visibility into how support translated into real-world hunger-relief outcomes.'],
    ['THE OPPORTUNITY', 'Create a transparent participation ecosystem where communities can track initiatives, follow progress, and understand their impact.'],
    ['MY ROLE', 'Led product strategy, UX, information architecture, interaction design, and visual systems across the platform experience.'],
    ['IMPACT', 'Designed a scalable framework that connected participation, transparency, and measurable community outcomes.'],
  ],
}

const stretusProblems = [
  ['Technical Complexity', 'Algorithmic trading remained difficult for non-technical users.'],
  ['Limited Transparency', 'Users lacked visibility into how strategies performed and executed.'],
  ['Risk & Compliance', 'Brokers needed oversight to manage risk and regulatory obligations.'],
  ['Fragmented Workflows', 'Key trading activities were disconnected across multiple platforms.'],
]
const stretusProcess = [
  ['Discover', 'Investigated user motivations, concerns, and platform expectations.'],
  ['Define', 'Synthesized research findings into actionable opportunities.'],
  ['Ideate', 'Explored interaction models and dashboard structures.'],
  ['Design', 'Developed scalable interface patterns and workflows.'],
  ['Validate', 'Refined solutions through feedback and iterative testing.'],
]

function TextColumns({ items, className = '' }) {
  return <div className={`study-text-columns ${className}`}>{items.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div>
}

function StretusSections() {
  return <>
    <section className="study-section" id="challenge" aria-labelledby="challenge-title"><div className="study-heading-row"><SectionHeader number="02" title="The Challenge" id="challenge"/><p>New users struggled to understand how algorithmic trading worked, evaluate strategy performance, and trust automated investment decisions.</p></div><TextColumns items={stretusProblems} className="four" /></section>
    <section className="study-section" id="research" aria-labelledby="research-title"><SectionHeader number="03" title="Research" id="research"/><div className="stretus-research-grid"><ul><li>Competitor analysis of leading trading platforms</li><li>UX audit of onboarding experiences</li><li>User journey mapping</li><li>Information architecture review</li><li>Behavioral pattern analysis</li></ul><div><h3>Key Insights</h3><ul><li>Users need a balance of control and guidance</li><li>Backtesting is essential for building trust</li><li>Real time monitoring and risk alerts build trust</li><li>Clarity is paramount in strategy design</li></ul></div><blockquote>“I just want to build my strategy and see if it works. Why is everything so complicated?”<cite>– Early Trader</cite></blockquote></div></section>
    <section className="study-section" id="decisions" aria-labelledby="decisions-title"><div className="stretus-decisions"><div><SectionHeader number="04" title="Key Design Decisions" id="decisions"/><p>Traders focus on creating and managing strategies, while brokers retain execution oversight, risk control, and compliance management.</p></div><TextColumns items={stretusProcess} className="five" /></div></section>
    <section className="stretus-solution" id="solution" aria-labelledby="solution-title"><div className="stretus-solution-dark"><div className="stretus-solution-intro"><SectionHeader number="05" title="The Solution" id="solution"/><p>A unified ecosystem that streamlines the entire trading lifecycle from strategy creation to deployment and monitoring while maintaining transparency, control, and compliance.</p></div><div className="stretus-solution-list"><TextColumns items={[
      ['Platform Experience', 'Simplifying complex trading workflows through clarity and transparency.'],
      ['AI Strategy Builder', 'Making strategy creation accessible to non-technical traders.'],
      ['Broker Control Layer', 'Empowering brokers with visibility, control, and governance.'],
      ['Strategy Lifecycle', 'Connecting creation, deployment, and monitoring in one ecosystem.'],
    ]} /></div><div className="stretus-solution-gallery">{[
      ['https://res.cloudinary.com/yhejafvu/image/upload/v1791454085/STRETUS_1.png', 'Stretus AI strategy builder interface'],
      ['https://res.cloudinary.com/yhejafvu/image/upload/v1791454099/STRETUS_2.png', 'Stretus strategies dashboard'],
      ['https://res.cloudinary.com/yhejafvu/image/upload/v1791454111/STRETUS_3.png', 'Stretus broker order monitor'],
    ].map(([src, alt]) => <img key={src} src={src} alt={alt} loading="lazy"/>)}</div></div><div className="stretus-feature-row">{[
      ['Backtesting', 'Power backtesting with detailed performance analytics', 'https://res.cloudinary.com/yhejafvu/image/upload/v1791454381/BOTTOM_1.png', 'Stretus backtesting results and performance analytics'],
      ['Portfolio Overview', 'A clear overview of all strategies, performance and risk.', 'https://res.cloudinary.com/yhejafvu/image/upload/v1791454391/BOTTOM_2.png', 'Stretus strategy portfolio overview'],
      ['Risk controls', 'Built-in guidance and risk management for safer trading', 'https://res.cloudinary.com/yhejafvu/image/upload/v1791454399/BOTTOM_3.png', 'Stretus strategy risk controls'],
    ].map(([name, text, image, alt]) => <div className="stretus-feature" key={name}><div><h3>{name}</h3><p>{text}</p><ArrowRight size={20}/></div><img className="stretus-feature-image" src={image} alt={alt} loading="lazy"/></div>)}</div></section>
    <section className="study-section study-impact-section" id="impact" aria-labelledby="impact-title"><div className="stretus-impact-grid"><div><SectionHeader number="06" title="Impact" id="impact"/><p>The platform delivers measurable impact for traders and the business</p></div><div className="study-metric"><strong>40%</strong><span>Increased transparency of trading performance</span></div><div className="study-metric"><strong>30%</strong><span>Increase in user strategy creation</span></div><div className="study-metric"><strong>90%</strong><span>Users find platform easy to navigate</span></div><blockquote>“Stretus gives me the power of algorithm with the simplicity I’ve always wanted.”<cite>– Platform User</cite></blockquote></div><Lesson>Designing financial products taught me that trust often influences decision-making more than functionality. Users wanted clarity around risk and performance before exploring advanced features.</Lesson></section>
  </>
}

function SroiSections() {
  const challengePoints = ['Limited transparency', 'Inconsistent verification processes', 'Funding decisions based on incomplete information', 'Lack of accountability across stakeholders']
  const roles = [
    ['Impact Creators', 'We need recognition for verified outcomes, not just reports.'],
    ['Verifiers', 'We need a consistent framework to validate impact.'],
    ['Funders', 'We need confidence before allocating capital.'],
    ['Community', 'We need visibility into how impact is created and funded.'],
  ]
  const principles = [
    ['Trust Before Ownership', 'Impact must be verified before it can become a digital asset.'],
    ['Impact Before Tokenization', 'Lead with measurable outcomes, not blockchain technology.'],
    ['Governance Through Commitment', 'Replace speculative participation with mission-driven governance.'],
    ['Simplify Complexity', 'Reduce a complex ecosystem into a clear mental model:'],
  ]
  const portals = [
    ['Impact Creator', 'Submit programs, evidence, and outcome reports.', SROI_IMAGES.creator, 'MeasureMint impact creator submission and overview screens'],
    ['Impact Verifier', 'Review methodologies, validate evidence, and approve outcomes.', SROI_IMAGES.creator, 'MeasureMint evidence submission and impact overview screens'],
    ['Funder Dashboard', 'Discover verified opportunities and allocate funding with confidence.', SROI_IMAGES.funder, 'MeasureMint funder tickets and contribution dashboard screens'],
    ['Governance Portal', 'Enable community-led decisions that shape the future of the protocol.', SROI_IMAGES.governance, 'MeasureMint governance overview, treasury, and proposals screens'],
  ]
  return <>
    <section className="study-section" id="challenge" aria-labelledby="challenge-title"><SectionHeader number="02" title="The Challenge" id="challenge"/><h3 className="study-section-subtitle">Trust was dependent on <em>claims</em>, not evidence.</h3><p>Every year, billions are invested into social impact initiatives, yet outcomes are often communicated through reports, spreadsheets, and self-reported metrics.</p><div className="sroi-challenge-row"><p>Organizations struggled to prove their impact, funders lacked confidence in reported outcomes, and communities had limited visibility into how funding translated into real-world change.</p><div className="sroi-pain-points">{challengePoints.map(item => <div key={item}><i/><strong>{item}</strong></div>)}</div></div></section>
    <section className="study-section" id="research" aria-labelledby="research-title"><SectionHeader number="03" title="Research" id="research"/><h3 className="study-section-subtitle">Different stakeholders. One <em>trust</em> problem.</h3><p>We mapped the entire impact ecosystem to understand how trust breaks down between impact creation, verification, funding, and governance.</p><TextColumns items={roles} className="four sroi-roles"/><p className="sroi-opportunity">The opportunity wasn't simply improving reporting, it was designing a system where impact could be <em>independently verified</em> and <em>transparently governed</em>.</p></section>
    <section className="sroi-decision-section" id="decisions" aria-labelledby="decisions-title"><div className="sroi-principles"><SectionHeader number="04" title="Key Decision" id="decisions"/><h3 className="study-section-subtitle">Principles that <em>shaped</em> SROI</h3>{principles.map(([title, copy]) => <div className="sroi-principle" key={title}><h4>{title}</h4><p>{copy}</p></div>)}<p className="sroi-flow-text">Create → Verify → Fund → Govern</p></div><div className="sroi-trust-engine"><h3>THE TRUST ENGINE</h3><div className="sroi-engine-steps">{['Create', 'Verify', 'Mint', 'Fund', 'Govern', 'Burn'].map(step => <div key={step}><i/><strong>{step}</strong><small>We need a frame<br/>work to validate</small></div>)}</div><div className="sroi-engine-preview"><img src={SROI_IMAGES.website} alt="MeasureMint website showing a verified community impact receipt"/></div></div></section>
    <section className="study-section sroi-solution" id="solution" aria-labelledby="solution-title"><SectionHeader number="05" title="Solution" id="solution"/><h3 className="study-section-subtitle">A transparent infrastructure for <em>verified</em> impact</h3><p>SROI connects impact creators, verifiers, funders, and governance participants through a shared lifecycle built around accountability and trust.</p><div className="sroi-portal-grid">{portals.map(([name, copy, image, alt]) => <div key={name}><h4>{name}</h4><p>{copy}</p><img className="sroi-portal-image" src={image} alt={alt} loading="lazy"/></div>)}</div><p className="sroi-process-line">Create Impact → Submit Evidence → Verify Outcomes → Mint SROI → Fund Impact → Govern Outcomes → Burn & Reallocate</p></section>
    <section className="study-section study-impact-section" id="impact" aria-labelledby="impact-title"><SectionHeader number="06" title="Impact" id="impact"/><h3 className="study-section-subtitle">Trust is no longer assumed. <em>It's verified.</em></h3><p>The platform transformed how social impact is measured, verified, and funded.</p><div className="sroi-impact-points"><span>Claims became verified outcomes.</span><span>Funding became evidence-driven.</span><span>Governance became transparent.</span></div><Lesson>The hardest challenge wasn't designing interfaces.<br/>It was designing a system that enables people, organizations, and communities to trust impact at scale.</Lesson></section>
  </>
}

const tokenProblems = [
  ['One-Time Participation', 'Support often ends after a single interaction.'],
  ['Fragmented Information', 'Updates, reports, and initiatives live in separate places.'],
  ['Limited Community Ownership', 'People feel like donors, not active participants.'],
  ['Invisible Impact', 'People contribute but rarely see outcomes.'],
]
const tokenResearch = [
  ['Visibility Creates Confidence', 'People are more willing to participate when they can follow how support reaches communities.'],
  ['Evidence Matters More Than Claims', 'Participants trusted verifiable outcomes far more than mission statements.'],
  ['Make Progress Visible', 'We need visibility into how impact is created and funded.'],
]
const oldJourney = [[HandHeart, 'Donate'], [Hourglass, 'Wait'], [Sun, 'Hope'], [RefreshCw, 'Get Updates'], [Unplug, 'Disconnects']]
const newJourney = [[Search, 'Discover'], [UserRound, 'Participate'], [RefreshCw, 'Track Progress'], [Eye, 'See Impact'], [InfinityIcon, 'Stay Engaged']]
const tokenFeatures = [
  ['Initiative Discovery', 'Explore active hunger-relief programs and understand where support is needed most.', 'Help users connect with initiatives that align with their interests and values.', MAGAFOX_IMAGES.discovery, 'MagaFox47 initiative discovery and token launch countdown'],
  ['Participate & Contribute', 'Explore active hunger-relief programs and understand where support is needed most.', 'Reduce friction and create confidence before participation.', MAGAFOX_IMAGES.contribute, 'MagaFox47 token purchase interface'],
  ['Track Progress', 'Provide visibility into milestones, program growth, and measurable outcomes.', 'Keep participants informed and engaged.', MAGAFOX_IMAGES.progress, 'MagaFox47 holdings and white paper dashboard'],
  ['Verify Impact', 'Make evidence, reporting, and verification accessible within the experience.', 'Replace assumptions with proof.', MAGAFOX_IMAGES.impact, 'MagaFox47 token claim and verification interface'],
  ['Transparency Hub', 'A centralized destination for updates, reports, governance information, and accountability records.', 'Create long-term trust through visibility.', MAGAFOX_IMAGES.governance, 'MagaFox47 DAO governance interface'],
]

function Journey({ title, items, kind }) {
  return <div className={`token-journey token-journey-${kind}`}><h4>{title}</h4><div>{items.map(([Icon, label]) => <span key={label}><i><Icon size={27} strokeWidth={1.8}/></i><small>{label}</small></span>)}</div></div>
}

function TokenSections() {
  return <>
    <section className="study-section" id="challenge" aria-labelledby="challenge-title"><SectionHeader number="02" title="The Challenge" id="challenge"/><h3 className="study-section-subtitle">Why people lose trust in <em>food relief</em> initiatives</h3><p>Participants often struggle to understand how support reaches communities and what outcomes are achieved.</p><div className="token-problem-grid">{tokenProblems.map(([name, copy]) => <div key={name}><i/><h4>{name}</h4><p>{copy}</p></div>)}</div></section>
    <section className="study-section" id="research" aria-labelledby="research-title"><SectionHeader number="03" title="Research" id="research"/><h3 className="study-section-subtitle">What builds <em>confidence in hunger</em> relief platforms?</h3><p>Research revealed four core expectations participants have before supporting social-impact initiatives.</p><TextColumns items={tokenResearch} className="three token-research"/></section>
    <section className="study-section token-decisions-section" id="decisions" aria-labelledby="decisions-title"><SectionHeader number="04" title="Key Decision" id="decisions"/><div className="token-decision-intro"><h3><em>From Donations to Participation</em></h3><p>Traditional experiences often create a one-way relationship between contributors and organizations. We redesigned the experience to create an ongoing participation journey where people can understand, track, and stay connected to impact.</p></div><div className="token-journeys"><Journey title="Traditional Model" items={oldJourney} kind="old"/><div className="token-journey-arrow"><ArrowRight size={24}/></div><Journey title="MagaFox47 Model" items={newJourney} kind="new"/></div></section>
    <section className="study-section token-solution" id="solution" aria-labelledby="solution-title"><SectionHeader number="05" title="Solution" id="solution"/><h3 className="study-section-subtitle">A transparent ecosystem for <em>real-world</em> impact</h3><p>Every experience was structured to help participants understand how initiatives operate, how progress is measured, and how communities benefit.</p><div className="token-feature-grid">{tokenFeatures.map(([name, copy, goal, image, alt]) => <div key={name}><h4>{name}</h4><p>{copy}</p><small><b>Goal:</b> {goal}</small><div className="token-feature-image"><img src={image} alt={alt} loading="lazy"/></div></div>)}</div></section>
    <section className="study-section study-impact-section" id="impact" aria-labelledby="impact-title"><SectionHeader number="06" title="Impact" id="impact"/><h3 className="study-section-subtitle">Turning Participation into <em>real-world</em> impact</h3><h4 className="token-outcomes-title">Outcomes</h4><div className="token-outcomes">{[['125K+', 'Meals Delivered'], ['8K+', 'Families Supported'], ['24', 'Verified Community Programs'], ['82%', 'User Trust Score'], ['100%', 'Transparent Reporting Framework']].map(([metric, label]) => <div key={label}><strong>{metric}</strong><span>{label}</span></div>)}</div><Lesson>The goal isn't to make complex systems visible. The goal is to make them understandable.</Lesson></section>
  </>
}

function AurelionWordmark({ dark = false, compact = false }) {
  return <div className={`aurelion-wordmark ${dark ? 'is-dark' : ''} ${compact ? 'is-compact' : ''}`}><strong>Aurélion</strong><small>/ ɔːˈrɛliən /</small></div>
}

function LuxurySheet({ section, title, children, tone = 'cream', wide = false, page }) {
  return <section className={`luxury-sheet luxury-sheet-${tone} ${wide ? 'luxury-sheet-wide' : ''}`}>
    <header><span>SECTION {section}</span><h2>{title}</h2></header>
    <div className="luxury-sheet-content">{children}</div>
    <footer><span>AURÉLION</span><span>BRAND IDENTITY GUIDELINES — LOGO &amp; COLOUR</span><span>{page} / 16</span></footer>
  </section>
}

function BrandSwatch({ tone = 'green', label = 'Aurélion', pronunciation = true, className = '' }) {
  return <div className={`luxury-brand-swatch is-${tone} ${className}`}><strong>{label}</strong>{pronunciation && <small>/ ɔːˈrɛliən /</small>}</div>
}

function LuxuryCaseStudy() {
  const badMarks = [
    ['Do not stretch or condense', 'green', 'Aurélion', 'is-wide'],
    ['Do not recolour', 'green', 'Aurélion', 'is-pink'],
    ['Do not add effects or shadows', 'green', 'Aurélion', 'is-gold'],
    ['Do not rotate at angle', 'green', 'Aurélion', 'is-rotate'],
    ['Do not place on busy grounds', 'pattern', 'Aurélion', ''],
    ['Do not break colour pairing', 'gold', 'Aurélion', ''],
    ['Do not re-type the name', 'green', 'AURELION', 'is-sans'],
    ['Do not crowd the clear space', 'green', 'Aurélion', 'is-crowded'],
  ]
  return <div className="luxury-project" id="overview">
    <section className="luxury-cover" aria-labelledby="luxury-title"><div className="luxury-cover-frame"><h1 id="luxury-title">Aurélion</h1><p>Protect the mark. Honour the space. Keep the palette pure.</p><small>QUESTIONS — BRAND@AURELION.COM</small></div></section>
    <div className="luxury-deck" id="brand-guidelines">
      <LuxurySheet section="00" title="A Quiet Kind of Luxury" page="02">
        <div className="luxury-foreword"><p>The Aurélion identity is built on restraint.<br/>One wordmark. Two colours. No decoration.<br/>Consistency is what makes it feel expensive.</p><div className="luxury-three-notes"><div><b>01 — THE WORDMARK</b><span>The wordmark is the brand. It is never redrawn, retyped, or approximated.</span></div><div><b>02 — THE COLOURS</b><span>Vert Aurélion and Crème de Lune are the identity. They appear in fixed proportions.</span></div><div><b>03 — THE DISCIPLINE</b><span>When in doubt, do less. Remove the element, enlarge the space, quiet the page.</span></div></div></div>
      </LuxurySheet>
      <LuxurySheet section="01" title="The Wordmark" page="03">
        <div className="luxury-wordmark-layout"><div className="luxury-wordmark-card"><AurelionWordmark/><span>PRIMARY LOCKUP — VERT AURÉLION GROUND</span></div><div className="luxury-anatomy"><b>ANATOMY</b><strong>THE NAME</strong><p>A coined word evoking aurum — Latin for gold — softened by a French sensibility.</p><strong>THE ACCENT</strong><p>The é is a fixed brand asset. It is never omitted.</p><strong>THE PRONUNCIATION</strong><p>The phonetic guide sits beneath the name in the primary lockup only.</p><strong>THE TYPEFACE</strong><p>A bespoke high-contrast serif. The wordmark is artwork, not text.</p></div></div>
      </LuxurySheet>
      <LuxurySheet section="02" title="The Pronunciation Line" page="04">
        <div className="luxury-pronunciation"><div className="luxury-pronunciation-card"><AurelionWordmark/><i/><span>ONE LINE — ALWAYS THE COLOUR OF THE WORDMARK</span></div><div className="luxury-rule-copy"><b>WHAT IT IS</b><p>Part of the wordmark artwork — fixed size, weight and position. It is never re-set, moved or re-spaced.</p><b>COLOUR</b><p>Always identical to the wordmark above it. Never a second tone or lighter opacity.</p><b>WHERE IT LIVES</b><p>Hero surfaces only — carton front, website hero, PR box interior lid, campaign covers.</p><b className="luxury-never">NEVER</b><p>On its own, as a tagline, in avatars or favicons, below minimum size, or animated.</p></div></div>
      </LuxurySheet>
      <LuxurySheet section="03" title="Approved Versions" page="05">
        <div className="luxury-approved"><BrandSwatch/><BrandSwatch tone="cream"/><BrandSwatch tone="white"/><div className="luxury-version-labels"><span>PRIMARY</span><span>REVERSED</span><span>MONOCHROME</span></div><p>The primary version leads every brand expression. The reversed version serves light grounds and print collateral. Monochrome exists only for engraving, embossing, foiling and single-colour production.</p></div>
      </LuxurySheet>
      <LuxurySheet section="04" title="Clear Space & Minimum Size" page="06">
        <div className="luxury-clear-space"><div className="luxury-exclusion"><span>A</span><AurelionWordmark dark/><small>EXCLUSION ZONE — HEIGHT OF THE CAPITAL A, ON ALL SIDES</small></div><div className="luxury-minimum"><b>CLEAR SPACE</b><p>No typography, imagery, pattern or page edge may enter the exclusion zone.</p><b>MINIMUM SIZE</b><div><AurelionWordmark dark compact/><span>PRINT — 25 MM WIDE</span></div><div><AurelionWordmark dark compact/><span>DIGITAL — 120 PX WIDE</span></div><p>Below minimum size, omit the pronunciation line and use the wordmark alone.</p></div></div>
      </LuxurySheet>
      <LuxurySheet section="05" title="Correct Use" page="07">
        <div className="luxury-correct"><div><span>✓ ON VERT AURÉLION</span><BrandSwatch/></div><div><span>✓ ON CRÈME DE LUNE</span><BrandSwatch tone="cream"/></div><div><span>✓ ON PHOTOGRAPHY — DARK AREAS</span><BrandSwatch tone="photo"/></div><div><span>✓ WORDMARK ALONE — SMALL SIZES</span><BrandSwatch tone="cream" pronunciation={false}/></div></div><p className="luxury-small-copy">The wordmark always appears level, in one approved colour, on a calm ground with full clear space. On photography, place it only within quiet, evenly dark areas.</p>
      </LuxurySheet>
      <LuxurySheet section="06" title="Incorrect Use" page="08">
        <div className="luxury-incorrect">{badMarks.map(([caption, tone, label, className]) => <div key={caption}><span>× {caption}</span><BrandSwatch tone={tone} label={label} className={className}/></div>)}</div>
      </LuxurySheet>
      <LuxurySheet section="07" title="The Colours" page="09">
        <div className="luxury-colours">{[
          ['vert', 'VERT AURÉLION', '#0C4A35', 'RGB 12 · 74 · 53'],
          ['creme', 'CRÈME DE LUNE', '#FAF3DC', 'RGB 250 · 243 · 220'],
          ['night', 'NUIT FORÊT', '#073E2F', 'RGB 7 · 46 · 33'],
          ['sage', 'SAUGE BRUME', '#9EB5A4', 'RGB 157 · 181 · 164'],
        ].map(([tone,name,hex,rgb]) => <div key={name}><i className={`colour-${tone}`}/><b>{name}</b><span>{hex}<br/>{rgb}<br/>CMYK — CONTROLLED</span></div>)}</div><p className="luxury-small-copy">Vert Aurélion and Crème de Lune carry the brand alone. Nuit Forêt and Sauge Brume are supporting tones — never grounds for the wordmark, never used at more than a whisper.</p>
      </LuxurySheet>
      <LuxurySheet section="08" title="Colour Strategy" page="10" tone="green" wide>
        <div className="luxury-colour-strategy"><span>PROPORTION OF USE — ACROSS ANY PAGE, PACK OR CAMPAIGN</span><div className="luxury-proportion"><i>VERT AURÉLION — 70%</i><i>CRÈME DE LUNE — 23%</i><i/><i/></div><div className="luxury-strategy-notes"><div><b>GREEN LEADS</b><p>Vert Aurélion is the first thing seen and the last thing remembered. It dominates packaging, retail and digital grounds.</p></div><div><b>CREAM SPEAKS</b><p>All reading happens in Crème de Lune. Type is never set in supporting tones.</p></div><div><b>NOTHING ELSE</b><p>No gradients, tints, opacities or seasonal colours. Campaign accents come from photography.</p></div></div><div className="luxury-pairings"><b>APPROVED PAIRINGS</b><div><BrandSwatch compact/><BrandSwatch tone="cream" compact/><BrandSwatch tone="night" compact/><BrandSwatch tone="sage" compact/><BrandSwatch tone="creme" compact/></div></div></div>
      </LuxurySheet>
      <LuxurySheet section="09" title="Typography for Web & Content" page="11">
        <div className="luxury-type-layout"><div><span>EYEBROW LABEL — JOST MEDIUM · 11PX · +200 TRACKING · ALL CAPS</span><h3>Worn close, made to linger.</h3><small>H1 — CORMORANT GARAMOND LIGHT · 40–55PX · SENTENCE CASE</small><h4>A second movement in the composition</h4><small>H2 — CORMORANT GARAMOND LIGHT · 24–28PX</small><p>Body copy is set in Jost Light at sixteen pixels with a one point seven line height. Paragraphs stay short. The voice is first person plural, warm and direct, and the measure never exceeds seventy characters.</p><button type="button">ADD TO CART</button></div><div className="luxury-type-rules"><b>TWO FAMILIES ONLY</b><p>Cormorant Garamond carries emotion — headlines, product names, editorial pull quotes. Jost carries information.</p><b>WEIGHT DISCIPLINE</b><p>The serif is used Light only and never bolded or italicised for emphasis.</p><b>THE BOUNDARY</b><p>The wordmark is artwork, not type. Aurélion is never re-set in Cormorant.</p></div></div>
      </LuxurySheet>
      <LuxurySheet section="10" title="Colour on the Website" page="12">
        <div className="luxury-web-layout"><div className="luxury-browser"><div><i/><i/><i/></div><AurelionWordmark/><button type="button">DISCOVER</button><span>THE COLLECTION</span><div className="luxury-browser-products"><BrandSwatch compact/><BrandSwatch compact/><BrandSwatch compact/></div></div><div className="luxury-web-rules"><b>THE SPLIT</b><p>Brand moments — homepage hero, campaign pages, menus — sit on Vert Aurélion. Long reading and product pages sit on Crème de Lune.</p><b>INTERACTION</b><p>Primary button — cream fill, green label. Hover — invert the pair or underline.</p><b>ACCESSIBILITY</b><p>The pair contrasts at 9.2:1 — passing WCAG AAA in both directions.</p></div></div>
      </LuxurySheet>
      <LuxurySheet section="11" title="Packaging Expressions" page="13" tone="green">
        <div className="luxury-packaging"><div className="perfume-bottle"><i/><span>Aurélion</span><small>EAU DE PARFUM</small></div><div className="perfume-carton"><span>Aurélion</span><small>ÉVEIL<br/>EAU DE PARFUM</small></div><div className="perfume-bag"><i/><span>Aurélion</span><small>PARIS — BERLIN</small></div></div><div className="luxury-package-labels"><span>THE FLACON</span><span>THE CARTON</span><span>THE BAG</span></div>
      </LuxurySheet>
      <LuxurySheet section="12B" title="Printing on the Green Carton" page="15" tone="green">
        <div className="luxury-carton-print"><div><AurelionWordmark/><span>ÉVEIL — EAU DE PARFUM</span><hr/><small>INGREDIENTS<br/><br/>ALCOHOL DENAT., PARFUM, AQUA, LIMONENE, LINALOOL, CITRONELLOL, GERANIOL.</small><hr/><small>PRECAUTION<br/><br/>For external use only. Keep away from heat and flame.</small><div className="luxury-barcode">|||| ||| || ||||</div></div><aside><b>NO LABEL AT ALL</b><p>On a full green carton the regulatory block is not a sticker — it is printed directly in Crème de Lune ink.</p><b>TYPE STEPS UP</b><p>Light text on a dark ground fills in on press. Running copy moves from Jost Light to Jost Regular.</p><b>TWO LIGHT WINDOWS</b><p>GHS pictograms already carry their own white diamond — the brief anticipated this.</p><b>THE BASE OPTION</b><p>For the cleanest back panel, move the full regulatory block to the bottom face.</p></aside></div>
      </LuxurySheet>
    </div>
  </div>
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const study = studies[slug]
  if (!study) return null
  const sections = slug === 'stretus' ? <StretusSections/> : slug === 'sroi' ? <SroiSections/> : <TokenSections/>
  return <div className={`case-study case-study-${slug}`}><Sidebar slug={slug}/><div className="study-main">{slug === 'luxury-perfume' ? <><Topbar study={study}/><LuxuryCaseStudy/></> : <><div className="study-overview-screen"><Topbar study={study}/><Hero slug={slug}/><AtGlance items={glance[slug]}/></div>{sections}</>}</div></div>
}
