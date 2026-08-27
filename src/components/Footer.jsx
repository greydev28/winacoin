import { externalLinks, navLinks, socials } from '../data/site'
import { Icon } from './Icon'

export function Footer({ logo }) {
  return (
    <footer
      id="community"
      className="border-t border-fuchsia-400/15 bg-linear-to-tr from-[#060316] via-[#121028] to-[#05030b]"
    >
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Responsive link/logo/links row */}
        <div className="flex flex-col sm:flex-row items-center gap-7 sm:gap-10 justify-center font-display mb-10 sm:mb-12">
          <a
            href={externalLinks.buy}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl text-fuchsia-300 hover:text-fuchsia-500 font-display transition mb-3 sm:mb-0"
          >
            Contract
          </a>
          <img
            src={logo}
            alt="WINA coin"
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-1 ring-fuchsia-300/50 shadow-[0_0_32px_rgba(168,60,255,.25)] mb-3 sm:mb-0"
          />
          <a
            href={externalLinks.dexScreener}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl text-fuchsia-300 hover:text-fuchsia-500 font-display transition"
          >
            Chart
          </a>
        </div>

        {/* Responsive socials */}
        <div className="flex justify-center gap-5 sm:gap-6 mb-10 sm:mb-12">
          <a
            href={externalLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full bg-fuchsia-700/70 hover:bg-fuchsia-500 transition shadow-lg"
            aria-label="Telegram"
          >
            <Icon name="telegram" size={24} className="sm:size-7 text-white" />
          </a>
          <a
            href={externalLinks.xMain}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full bg-fuchsia-700/70 hover:bg-fuchsia-500 transition shadow-lg"
            aria-label="X"
          >
            <Icon name="x" size={24} className="sm:size-7 text-white" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-base text-zinc-500 font-medium px-2">
          © {new Date().getFullYear()} Wina Coin. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
