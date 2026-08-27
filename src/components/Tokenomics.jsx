import { Flame, Droplets, Settings2 } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const allocations = [
  ['Total Supply', '1,000,000,000 (1 Billion) WINA'],
  ['20% (200,000,000)', 'is burnt at launch (sent to a dead wallet)', 'flame'],
  ['55% (550,000,000)', 'is added to liquidity, locked for 91 days, and then burnt', 'drop'],
  ['25% (250,000,000)', 'is allocated for marketing/ecosystem development'],
]

export function Tokenomics() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px' })

  return (
    <section id="tokenomics" className="bg-[#0a0614] py-24 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionTitle title="Tokenomics" />
        <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div
            className="rounded-2xl border border-fuchsia-400/30 bg-white/2.5 p-5 sm:p-8"
            initial={{ opacity: 0, y: 45 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
            transition={{ duration: 0.85, ease: [0.4, 0.12, 0.2, 1] }}
          >
            <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
              <div className="donut mx-auto grid h-52 w-52 place-items-center rounded-full"><span className="relative z-10 font-display text-4xl font-black">W</span></div>
              <div className="space-y-5">
                {allocations.map(([title, value, icon], i) => (
                  <div key={title} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-fuchsia-500" />
                    <div>
                      <b className="text-sm">{title}</b>
                      <p className="mt-1 text-xs leading-5 text-zinc-400">
                        {icon === 'flame' ? '🔥 ' : ''}
                        {value}
                        {icon === 'drop' ? ' 💧' : ''}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-fuchsia-400/30 bg-white/2.5 p-5 sm:p-8"
            initial={{ opacity: 0, y: 45 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.4, 0.12, 0.2, 1] }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[.24em] text-fuchsia-400">TAX</p>
            <h3 className="mt-2 text-xl font-black">Buy / Sell: 4% total</h3>
            <TaxRow icon={<Settings2 />} title="2% to MW for development" note="30% of this allocation will be used for Wina Academy development" />
            <TaxRow icon={<Flame />} title="1% burnt" note="Manually" />
            <TaxRow icon={<Droplets />} title="1% to liquidity" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TaxRow({ icon, title, note }) {
  return <div className="flex gap-4 border-b border-white/10 py-5 last:border-0"><span className="text-fuchsia-400">{icon}</span><div><b className="text-sm">{title}</b>{note && <small className="mt-1 block text-xs leading-5 text-zinc-500">{note}</small>}</div></div>
}
