import { externalLinks } from '../data/site'
import { Icon } from './Icon'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export function Hero({ heroImage, logo }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px' })

  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(126,34,206,.22),transparent_30%),radial-gradient(circle_at_30%_70%,rgba(79,70,229,.10),transparent_30%)]" />
      <div className="stars absolute inset-0 opacity-30" />
      <motion.div
        ref={ref}
        className="relative mx-auto grid min-h-175 max-w-7xl items-center gap-8 px-5 pb-24 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:px-10"
        initial={{ opacity: 0, y: 45 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
        transition={{ duration: 0.88, ease: [0.4, 0.12, 0.2, 1] }}
      >
        <motion.div
          className="relative z-10 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[.24em] text-fuchsia-400">WIN.CO DAO • BSC MEME COIN</p>
          <h1 className="font-display text-[clamp(4rem,10vw,7rem)] font-black leading-[.82] tracking-[-.07em]">BE A <span className="block bg-linear-to-r from-fuchsia-300 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,60,255,.35)]">WINA!</span></h1>
          <p className="mt-7 text-base font-extrabold tracking-wide text-white sm:text-lg">WINNER TODAY, LEGEND TOMORROW.</p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-zinc-400 lg:mx-0">A deflationary token created by Sir Talus for the Win.co DAO ecosystem to drive blockchain education, adoption, interaction and fun.</p>
          <div id="buy" className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href={externalLinks.buy}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-violet-700 to-fuchsia-500 px-6 py-3.5 text-xs font-black shadow-[0_0_35px_rgba(168,60,255,.3)] transition hover:-translate-y-0.5"
            >
              BUY WINA <Icon name="arrow" size={16} />
            </a>
            <a
              href={externalLinks.telegram}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/3 px-6 py-3.5 text-xs font-black transition hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10"
            >
              JOIN COMMUNITY <Icon name="telegram" size={16} />
            </a>
            <a
              href={externalLinks.firescreener}
              target="_blank"
              rel="noopener"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-white/3 px-6 py-3.5 text-xs font-black text-zinc-300 transition hover:border-orange-400/60 hover:bg-linear-to-r hover:from-yellow-500/20 hover:to-orange-500/30 hover:text-orange-200"
            >
              FIRESCREENER <Icon name="chart" size={16} />
            </a>
       
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 text-[10px] font-extrabold text-zinc-400 lg:justify-start">
            <span className="inline-flex items-center gap-2"><Icon name="coin" size={15} className="text-amber-300" /> BINANCE SMART CHAIN</span>
            <span className="inline-flex items-center gap-2"><Icon name="lock" size={15} className="text-fuchsia-300" /> LP LOCKED 91 DAYS</span>
            <span className="inline-flex items-center gap-2"><Icon name="shield" size={15} className="text-fuchsia-300" /> CONTRACT VERIFIED</span>
          </div>
        </motion.div>

        <motion.div
          className="relative flex min-h-105 items-center justify-center lg:min-h-142.5"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          <div className="absolute h-80 w-80 rounded-full bg-violet-600/30 blur-[100px]" />
          <img src={heroImage} alt="WINA coin hero artwork" className="relative w-full max-w-2xl rounded-4xl object-cover mix-blend-screen drop-shadow-[0_25px_80px_rgba(126,34,206,.28)]" />
          <img src={logo} alt="WINA coin" className="float-animation absolute right-0 top-12 h-24 w-24 rounded-full object-cover ring-1 ring-fuchsia-300/50 shadow-[0_0_50px_rgba(168,60,255,.45)] sm:right-5" />
          <div className="orbit-line absolute h-[72%] w-[70%] rounded-[50%] border-r border-dashed border-fuchsia-400/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
