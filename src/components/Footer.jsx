import { externalLinks, navLinks, socials } from '../data/site'
import { Icon } from './Icon'

export function Footer({ logo }) {
  return (
    <footer
      id="community"
      className="border-t border-fuchsia-400/15 bg-gradient-to-tr from-[#060316] via-[#121028] to-[#05030b]"
    >
      <div className="max-w-2xl mx-auto py-16">
        <div className="flex items-center gap-10 justify-center font-display mb-12">
          <a
            href={externalLinks.buy}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-fuchsia-300 hover:text-fuchsia-500 font-display transition"
          >
            Contract
          </a>
          <img
            src={logo}
            alt="WINA coin"
            className="h-20 w-20 rounded-full object-cover ring-1 ring-fuchsia-300/50 shadow-[0_0_32px_rgba(168,60,255,.25)]"
          />
          <a
            href={externalLinks.dexScreener}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-fuchsia-300 hover:text-fuchsia-500 font-display transition"
          >
            Chart
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href={externalLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-12 w-12 place-items-center rounded-full bg-fuchsia-700/70 hover:bg-fuchsia-500 transition shadow-lg"
            aria-label="Telegram"
          >
            <Icon name="telegram" size={28} className="text-white" />
          </a>
          <a
            href={externalLinks.xMain}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-12 w-12 place-items-center rounded-full bg-fuchsia-700/70 hover:bg-fuchsia-500 transition shadow-lg"
            aria-label="X"
          >
            <Icon name="x" size={28} className="text-white" />
          </a>
        </div>

        <div className="text-center text-base text-zinc-500 font-medium">
          © {new Date().getFullYear()} Wina Coin. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
