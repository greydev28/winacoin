export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Liquidity", href: "#liquidity" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Utilities", href: "#utilities" },
  { label: "FAQ", href: "#faq" },
];

// Replace every placeholder with the project's official URLs before deployment.
export const externalLinks = {
  buy: "https://pancakeswap.finance/swap?outputCurrency=0x23be6B07E8cd735F291F390A5FB1392bEdf6879C",
  telegram: "https://t.me/+wrdBW4xdh5kyYzU0",
  xMain: "https://x.com/WinacoinDao",
  xDao: "https://x.com/win_co_dao",
  dexScreener:
    "https://dexscreener.com/bsc/0xAA6b2AcBAd2A7Ff08226d50acdD63eb0c216f6fd",
  firescreener:
    "https://www.firescreener.com/bsc/0x23be6b07e8cd735f291f390a5fb1392bedf6879c",
  whitepaper: "#",
  prukLock: "#",
};

export const socials = [
  {
    label: "Telegram",
    detail: "Main Channel",
    href: externalLinks.telegram,
    icon: "telegram",
  },
  {
    label: "X / Twitter",
    detail: "Main Channel",
    href: externalLinks.xMain,
    icon: "x",
  },
  { label: "X / Twitter", detail: "DAO", href: externalLinks.xDao, icon: "x" },
  {
    label: "X / Twitter",
    detail: "DexScreener",
    href: externalLinks.dexScreener,
    icon: "x",
  },
];

export const roadmap = [
  {
    phase: "PHASE 1",
    items: [
      "Fairlaunch",
      "250 hodlers",
      "Website launch",
      "1,000 organic X and Telegram community",
      "1,500 hodlers",
      "Whitepaper creation",
    ],
  },
  {
    phase: "PHASE 2",
    items: [
      "Introduction of utilities",
      "CEX listing",
      "Introduction of educational game",
      "20,000 community on X",
    ],
  },
  { phase: "PHASE 3", items: ["………"] },
];
