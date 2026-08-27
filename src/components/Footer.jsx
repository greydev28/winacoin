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
        <div className="flex sm:flex-row items-center gap-4 md:gap-7 justify-center font-display mb-10 sm:mb-12">
          <a
            href={externalLinks.contract}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xl sm:text-2xl text-fuchsia-300 hover:text-fuchsia-500 font-display font-semibold transition underline-offset-4 hover:underline"
          >
            Contract
          </a>

          <span className="relative flex items-center justify-center">
            <span className="absolute inset-0 blur-lg rounded-full bg-fuchsia-400/40 animate-pulse opacity-50" />
            <img
              src={logo}
              alt="WINA coin"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-2 ring-fuchsia-300/70 shadow-[0_0_56px_0_rgba(168,60,255,.48)] border-4 border-fuchsia-900/60 z-10 transition-transform hover:scale-105 duration-300"
            />
            {/* Decorative sparkles */}
            <span className="absolute -top-2 -right-2 h-4 w-4 bg-fuchsia-300 rounded-full blur-sm opacity-60 animate-bounce" />
            <span className="absolute bottom-0 left-0 h-3 w-3 bg-fuchsia-500 rounded-full blur-[2px] opacity-50 animate-ping" />
          </span>

          {/* Right: Chart Link */}
          <a
            href={externalLinks.dexScreener}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xl sm:text-2xl text-fuchsia-300 hover:text-fuchsia-500 font-display font-semibold transition underline-offset-4 hover:underline"
          >
            Chart
            
          </a>
        </div>
  

        {/* Responsive socials */}
        <div className="flex justify-center items-center gap-5 sm:gap-6 mb-10 sm:mb-12">
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
