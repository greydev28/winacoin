import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Icon } from './Icon'
import { SectionTitle } from './SectionTitle'

// Assign a different icon name for each FAQ question
const faqs = [
  {
    question: 'What is WINA Coin?',
    answer:
      'WINA is a deflationary token created for the Win.co DAO ecosystem, built around blockchain education, adoption, community interaction and fun.',
    icon: 'coin',
  },
  {
    question: 'Which network is WINA on?',
    answer:
      'WINA runs on Binance Smart Chain, giving holders fast transactions and access to familiar BSC trading tools like PancakeSwap.',
    icon: 'network',
  },
  {
    question: 'Where can I buy WINA?',
    answer:
      'You can buy WINA through the official PancakeSwap link on this website. Always use the official contract link before making a swap.',
    icon: 'shopping',
  },
  {
    question: 'Is the liquidity locked?',
    answer:
      'Yes. WINA liquidity is structured with a 91-day LP lock, with the LP burn planned after the lock period to strengthen long-term trust.',
    icon: 'lock',
  },
  {
    question: 'What are the WINA token taxes?',
    answer:
      'Buy and sell tax is 4% total: 2% supports development, 1% is burned, and 1% goes back to liquidity.',
    icon: 'percent',
  },
  {
    question: 'What utilities are planned for WINA?',
    answer:
      'The WINA ecosystem includes products in production such as the WINA App and LEEF Pay, with more utilities planned as the community grows.',
    icon: 'sparkles',
  },
]

export function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px' })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" ref={ref} className="bg-[#090513] py-24 sm:py-28">
      <motion.div
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"
        initial={{ opacity: 0, y: 45 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
        transition={{ duration: 0.85, ease: [0.4, 0.12, 0.2, 1] }}
      >
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers for holders, new buyers and community members exploring the win.co DAO ecosystem."
        />

        <div className="mx-auto grid max-w-5xl gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <motion.article
                key={item.question}
                className="rounded-2xl border border-fuchsia-400/25 bg-white/2.5 transition hover:border-fuchsia-400/45"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.72, delay: 0.08 + index * 0.05 }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-200">
                      <Icon name={item.icon} size={20} />
                    </span>
                    <span className="font-display text-base font-black text-white sm:text-lg">{item.question}</span>
                  </span>
                  <Icon
                    name="chevron"
                    size={22}
                    className={`shrink-0 text-fuchsia-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.4, 0.12, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 pl-19 text-sm leading-7 text-zinc-400 sm:px-6 sm:pb-6 sm:pl-20">
                    {item.answer}
                  </p>
                </motion.div>
              </motion.article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
