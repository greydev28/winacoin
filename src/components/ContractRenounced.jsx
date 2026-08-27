import { Icon } from './Icon'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export function ContractRounced() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px' })

  return (
    <section
      id="contract-renounced"
      ref={ref}
      className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10"
    >
      {/* Contract Visual */}
      <motion.div
        className="relative flex h-64 items-center justify-center"
        initial={{ opacity: 0, y: 45 }}
        animate={
          inView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 45 }
        }
        transition={{
          duration: 0.85,
          ease: [0.4, 0.12, 0.2, 1],
        }}
      >
        {/* Glow */}
        <div className="absolute h-52 w-52 rounded-full bg-violet-600/20 blur-3xl" />

        {/* Main Contract Card */}
        <div className="relative flex h-44 w-44 flex-col items-center justify-center rounded-3xl border border-fuchsia-400/50 bg-[radial-gradient(circle,#2b1649,#10071b)] shadow-[0_0_70px_rgba(168,60,255,.35)]">
          {/* Contract Icon */}
          <div className="mb-3 grid h-20 w-20 place-items-center rounded-2xl border border-fuchsia-300/30 bg-fuchsia-500/10">
            <Icon
              name="filecode"
              size={48}
              className="text-fuchsia-200"
            />
          </div>

          <p className="text-xs font-black uppercase tracking-[.18em] text-fuchsia-300">
            RENOUNCED
          </p>

          <p className="mt-1 text-[10px] tracking-wider text-zinc-500">
            CONTRACT OWNERSHIP
          </p>
        </div>

        {/* Verified Badge */}
        <span className="absolute right-[17%] top-3 grid h-11 w-11 place-items-center rounded-full bg-fuchsia-500 font-black shadow-lg shadow-fuchsia-500/30">
          <Icon name="check" size={21} />
        </span>

        {/* Decorative Code Lines */}
        <div className="absolute bottom-5 left-[12%] flex gap-1 opacity-50">
          <span className="h-1 w-5 rounded-full bg-fuchsia-400" />
          <span className="h-1 w-8 rounded-full bg-violet-400" />
          <span className="h-1 w-3 rounded-full bg-fuchsia-300" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        animate={
          inView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 45 }
        }
        transition={{
          duration: 0.9,
          delay: 0.13,
          ease: [0.4, 0.12, 0.2, 1],
        }}
      >
        <p className="mb-3 font-display text-fuchsia-400 uppercase tracking-[.24em] font-black sm:text-2xl">
          CONTRACT RENOUNCED
        </p>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
          On <strong className="font-semibold text-zinc-200">October 16, 2025</strong>,
          the WINA Coin smart contract was renounced as part of the
          project's commitment to transparency, decentralization, and
          community trust. Contract renunciation removes the deployer's
          ownership privileges from the token contract, significantly
          reducing the possibility of unilateral changes to important
          owner-controlled functions.
        </p>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
          This step demonstrates WINA's intention to operate with greater
          transparency and give the community increased confidence in the
          integrity of the token. The WINA contract is deployed on{' '}
          <strong className="font-semibold text-zinc-200">
            BNB Smart Chain
          </strong>
          , with the verified contract publicly available for blockchain
          verification. Independent token-security data currently reports
          the contract's ownership as likely renounced.
        </p>
      </motion.div>
    </section>
  )
}