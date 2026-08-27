import { roadmap } from '../data/site'
import { Icon } from './Icon'
import { SectionTitle } from './SectionTitle'
import { useRef } from 'react'
import { useInView, motion } from 'motion/react'

export function Roadmap({ background }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px' })

  return (
    <section id="roadmap" className="relative overflow-hidden py-24 sm:py-28">
      <img src={background} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[.045]" />
      <motion.div
        ref={ref}
        className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"
        initial={{ opacity: 0, y: 45 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
        transition={{ duration: 0.95, ease: [0.4, 0.12, 0.2, 1] }}
      >
        <SectionTitle title="Roadmap" />
        <div className="grid gap-5 lg:grid-cols-3">
          {roadmap.map((item, idx) => (
            <motion.article
              key={item.phase}
              className="relative rounded-2xl border border-fuchsia-400/25 bg-[#0c0718]/80 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
              transition={{ duration: 0.9, delay: 0.08 * idx }}
            >
              <span className="inline-flex rounded-lg border border-fuchsia-400/50 bg-[#0b0615] px-4 py-2 text-xs font-black text-fuchsia-300">{item.phase}</span>
              <ul className="mt-5 space-y-3">
                {item.items.map((x) => (
                  <li key={x} className="flex gap-2 text-xs leading-5 text-zinc-300">
                    <Icon name="check" size={15} className="mt-0.5 shrink-0 text-fuchsia-400 text-sm" />
                    {x}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
