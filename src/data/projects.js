export const projects = [
  {
    slug: 'stretus', title: 'Stretus', index: '01',
    discipline: 'AI-Powered Algorithmic Trading Platform', duration: '7 Months', year: '2024', tone: 'violet',
    summary: 'Helping traders simplify complex execution, portfolio management, and strategy creation through a unified trading platform.',
    intro: 'From fragmented trading tools to one intelligent decision platform.',
    focus: ['Product strategy', 'UX research', 'UX/UI design'],
    challenge: 'Understanding why fragmented trading workflows slowed decision-making.',
    response: 'Designing an integrated trading ecosystem that simplified complex workflows.',
  },
  {
    slug: 'sroi', title: 'SROI', index: '02',
    discipline: 'Building trust for measurable social impact.', duration: '3 Months', year: '2024', tone: 'green',
    summary: 'Creating a transparent ecosystem where organizations can verify impact, attract funding, and build trust through measurable outcomes.',
    intro: 'Building trust for measurable social impact.',
    focus: ['Product strategy', 'Information design', 'UX/UI design'],
    challenge: 'Making measurable social impact understandable and trustworthy.',
    response: 'Creating a transparent ecosystem where organizations can verify impact and attract funding.',
  },
  {
    slug: 'erc20-token', title: 'ERC -20 Token', index: '03',
    discipline: 'Making token investing transparent and compliant.', duration: '3 Months', year: '2024', tone: 'blue',
    summary: 'Simplifying Web3 onboarding through transparent token utility, investor education, and compliance-focused product experiences.',
    intro: 'Making token investing transparent and compliant.',
    focus: ['Web3 product design', 'Investor education', 'UX/UI design'],
    challenge: 'Simplifying Web3 onboarding for token investors.',
    response: 'Using transparent token utility, investor education, and compliance-focused product experiences.',
  },
  {
    slug: 'luxury-perfume', title: 'Luxury Perfume', index: '04',
    discipline: 'Building a Luxury Perfume Brand Identity', duration: '3 Weeks', year: '2024', tone: 'sand',
    summary: 'Crafting a premium fragrance identity through refined branding, packaging systems, and visual storytelling.',
    intro: 'Building a Luxury Perfume Brand Identity',
    focus: ['Brand identity', 'Packaging design', 'Visual storytelling'],
    challenge: 'Creating a distinctive luxury fragrance identity.',
    response: 'Crafting a premium identity through refined branding, packaging systems, and visual storytelling.',
  },
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}
