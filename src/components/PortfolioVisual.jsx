function TokenVisual() {
  return <div className="visual-token" aria-hidden="true"><div className="token-glow"/><div className="token-orbit"><span>🇮🇳</span><span>🇺🇸</span><span>🇪🇸</span><span>🇫🇷</span><span>🇧🇷</span><span>🇩🇪</span><span>🇯🇵</span><span>🇿🇦</span></div><span className="token-fox">🦊</span><div className="token-earth"/></div>
}

function PerfumeVisual() {
  return <div className="visual-perfume" aria-hidden="true"><div><span>Audélion</span><small>Discover the world. Honour the roots. Keep the places yours.</small><i>PERFUME · BRAND IDENTITY · 2024</i></div></div>
}

export default function PortfolioVisual({ slug }) {
  if (slug === 'stretus') return <img className="project-image" src="https://res.cloudinary.com/yhejafvu/image/upload/v1791453402/STRETUS_MAIN.png" alt="A parent and child planting a young tree in a community garden" loading="lazy" />
  if (slug === 'sroi') return <img className="project-image" src="https://res.cloudinary.com/yhejafvu/image/upload/v1791381760/Mask_group_1.png" alt="A parent and child planting a young tree in a community garden" loading="lazy" />
  if (slug === 'erc20-token') return <img className="project-image" src="https://res.cloudinary.com/yhejafvu/image/upload/v1791381841/maga.png" alt="MagaFox47 mascot standing on a globe surrounded by international flags" loading="lazy" />
  if (slug === 'luxury-perfume') return <img className="project-image" src="https://res.cloudinary.com/yhejafvu/image/upload/v1791381902/brand_2.png" alt="Aurélion luxury brand identity cover" loading="lazy" />
  return <PerfumeVisual />
}
