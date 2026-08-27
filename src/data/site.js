export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Liquidity', href: '#liquidity' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Utilities', href: '#utilities' },
]

// Replace every placeholder with the project's official URLs before deployment.
export const externalLinks = {
  buy: '#',
  telegram: '#',
  xMain: '#',
  xDao: '#',
  dexScreener: '#',
  whitepaper: '#',
  contract: '#',
  prukLock: '#',
}

export const socials = [
  { label: 'Telegram', detail: 'Main Channel', href: externalLinks.telegram, icon: 'telegram' },
  { label: 'X / Twitter', detail: 'Main Channel', href: externalLinks.xMain, icon: 'x' },
  { label: 'X / Twitter', detail: 'DAO', href: externalLinks.xDao, icon: 'x' },
  { label: 'X / Twitter', detail: 'DexScreener', href: externalLinks.dexScreener, icon: 'x' },
]

export const roadmap = [
  {
    phase: 'PHASE 1',
    items: ['Fairlaunch', '250 hodlers', 'Website launch', '1,000 organic X and Telegram community', '1,500 hodlers', 'Whitepaper creation'],
  },
  {
    phase: 'PHASE 2',
    items: ['Introduction of utilities', 'CEX listing', 'Introduction of educational game', '20,000 community on X'],
  },
  { phase: 'PHASE 3', items: ['………'] },
]
