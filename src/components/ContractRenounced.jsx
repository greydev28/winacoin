import { Icon } from './Icon'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export function ContractRenounced({contractImage}) {
  const ref = useRef(null)

  const inView = useInView(ref, { margin: '-100px' })

  return (
    <section
      ref={ref}
      className="w-full px-6 py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-row-reverse items-center justify-between gap-12">

        {/* Image */}
        <motion.div
          className="flex w-full items-center justify-center md:w-1/2"
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
          <img
            src={contractImage}
            alt="WINA Contract Renounced"
            className="h-auto w-full max-w-md object-contain"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full text-left md:w-1/2"
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
         <p className="mb-3 uppercase tracking-[.24em] text-fuchsia-400 font-display font-black sm:text-2xl">CONTRACT RENOUNCED</p>

          <p className="max-w-xl text-base leading-8 text-white/70 sm:text-2xl">
            On <strong>October 16, 2025</strong>, the WINA Coin smart
            contract was renounced as part of the project's commitment
            to transparency, decentralization, and community trust.
            Contract renunciation removes the deployer's ownership
            privileges from the token contract, significantly reducing
            the possibility of unilateral changes to important
            owner-controlled functions.
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-white/70 sm:text-2xl">
            This step demonstrates WINA's intention to operate with
            greater transparency and give the community increased
            confidence in the integrity of the token. The WINA contract
            is deployed on <strong>BNB Smart Chain</strong>, with the
            verified contract publicly available for blockchain
            verification. Independent token-security data currently
            reports the contract's ownership as likely renounced.
          </p>
        </motion.div>

      </div>
    </section>
  )
}