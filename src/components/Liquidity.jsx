import { Icon } from './Icon'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export function Liquidity() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px' })

  return (
    <section
      id="liquidity"
      ref={ref}
      className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10"
    >
      <motion.div
        className="relative flex h-64 items-center justify-center"
        initial={{ opacity: 0, y: 45 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
        transition={{ duration: 0.85, ease: [0.4, 0.12, 0.2, 1] }}
      >
        <div className="absolute h-52 w-52 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="grid h-44 w-44 place-items-center rounded-full border border-fuchsia-400/50 bg-[radial-gradient(circle,#2b1649,#10071b)] shadow-[0_0_70px_rgba(168,60,255,.35)]">
          <Icon name="shield" size={76} className="text-fuchsia-200" />
        </div>
        <span className="absolute right-[20%] top-4 grid h-11 w-11 place-items-center rounded-full bg-fuchsia-500 font-black shadow-lg">
          <Icon name="check" size={21} />
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
        transition={{ duration: 0.9, delay: 0.13, ease: [0.4, 0.12, 0.2, 1] }}
      >
        <p className="mb-3 uppercase tracking-[.24em] text-fuchsia-400 font-display font-black sm:text-2xl">LIQUIDITY</p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
          To ensure a safe and trusted trading experience, the LP of WINA has been locked using Pink Lock and renounced (burnt🔥). This prevents anyone from tampering with the pool.
        </p>
        <div className="mt-8 flex flex-col gap-4">
  {/* Row 1 */}
  <motion.div 
    whileHover={{ scale: 1.01 }}
    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-fuchsia-500 bg-linear-to-r from-fuchsia-950/10 to-transparent p-5"
  >
    <div className="flex items-center gap-4">
      <Icon name="lock" size={24} className="text-fuchsia-400 shrink-0" />
      <div>
        <h4 className="text-sm font-bold text-zinc-200">Unbreakable LP Lock</h4>
        <p className="text-xs text-zinc-400 mt-0.5">WINA liquidity pool tokens are entirely restricted from withdrawal mechanisms.</p>
      </div>
    </div>
    <div className="shrink-0 self-start sm:self-center">
      <span className="inline-block rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 px-3 py-1 text-xs font-mono font-bold text-fuchsia-300">
        SECURED FOR 91 DAYS
      </span>
    </div>
  </motion.div>

  {/* Row 2 */}
  <motion.div 
    whileHover={{ scale: 1.01 }}
    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-fuchsia-500 bg-linear-to-r from-orange-950/10 to-transparent p-5"
  >
    <div className="flex items-center gap-4">
      <Icon name="flame" size={24} className="text-orange-400 shrink-0" />
      <div>
        <h4 className="text-sm font-bold text-zinc-200">Permanently Burned</h4>
        <p className="text-xs text-zinc-400 mt-0.5">Contract ownership rights are completely removed and destroyed forever.</p>
      </div>
    </div>
    <div className="shrink-0 self-start sm:self-center">
      <span className="inline-block rounded-full bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-xs font-mono font-bold text-orange-300">
        OWNERSHIP REVOKED
      </span>
    </div>
  </motion.div>
</div>

      </motion.div>
    </section>
  )
}
