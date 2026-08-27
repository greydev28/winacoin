import { Icon } from './Icon'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const details = [
  ['Launch date', '15 October 2025', 'calendar'],
  ['Launch time', '8:00 PM WAT', 'zap'],
  ['Blockchain', 'Binance Smart Chain', 'coins'],
  ['Mission', 'Education. Adoption. Fun. To be a Top 10 Meme Coin.', 'sparkles'],
]

export function About({ logo }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px' })

  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-fuchsia-400/15 bg-[#0c0718] py-24 sm:py-28"
    >
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 w-125 -translate-y-1/2 opacity-[.045]"
      />
      <motion.div
        ref={ref}
        className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-10"
        initial={{ opacity: 0, y: 45 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
        transition={{ duration: 0.9, ease: [0.4, 0.12, 0.2, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          transition={{ duration: 0.88, delay: 0.07 }}
        >
          <div className="flex flex-col items-center text-center">
            <img
              src={logo}
              alt="WINA coin"
              className="mb-5 h-24 w-24 rounded-full object-cover ring-1 ring-fuchsia-300/50 shadow-[0_0_50px_rgba(168,60,255,.45)]"
            />
            <h2 className="font-display text-2xl font-bold mb-4 text-white">WINA COIN</h2>
            <div className="space-y-4 text-sm leading-7 text-zinc-400 max-w-lg mx-auto">
              <p>
                Wina coin is a deflationary token created by Sir Talus for the Win.co DAO ecosystem to drive blockchain education, adoption, and enhance interaction and fun within the ecosystem. “Wina” is a pidgin English word that means “winner”.
              </p>
              <p>
                Launched on the Binance Smart Chain on 15 October 2025 at exactly 8pm WAT, Wina aims to be among the top 10 meme coins by market capitalization.
              </p>
            </div>
          </div>
    
     
        </motion.div>
        <motion.div
          className="rounded-2xl border border-fuchsia-400/35 bg-white/2.5 p-5 shadow-[inset_0_1px_rgba(255,255,255,.05)] sm:p-7"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.85, delay: 0.18 }}
        >
          {details.map(([label, value, icon], index) => (
            <div
              key={label}
              className={`flex gap-4 py-5 ${index < details.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <Icon name={icon} size={22} className="mt-0.5 text-fuchsia-400" />
              <div>
                <p className="text-[9px] font-black uppercase tracking-wider text-fuchsia-400">
                  {label}
                </p>
                <strong className="mt-1 block text-sm leading-6 text-white">{value}</strong>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
