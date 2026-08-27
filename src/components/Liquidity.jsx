import { Icon } from './Icon'

export function Liquidity() {
  return (
    <section id="liquidity" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
      <div className="relative flex h-64 items-center justify-center">
        <div className="absolute h-52 w-52 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="grid h-44 w-44 place-items-center rounded-full border border-fuchsia-400/50 bg-[radial-gradient(circle,#2b1649,#10071b)] shadow-[0_0_70px_rgba(168,60,255,.35)]"><Icon name="shield" size={76} className="text-fuchsia-200" /></div>
        <span className="absolute right-[20%] top-4 grid h-11 w-11 place-items-center rounded-full bg-fuchsia-500 font-black shadow-lg"><Icon name="check" size={21} /></span>
      </div>
      <div>
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[.24em] text-fuchsia-400">LIQUIDITY</p>
        <h2 className="font-display text-4xl font-black sm:text-5xl">SAFE. LOCKED. TRUSTED.</h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">To ensure a safe and trusted trading experience, the LP of WINA has been locked using Pruk Lock and removed (burnt). This prevents anyone from tampering with the pool.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <div className="rounded-xl border border-fuchsia-400/30 bg-white/[.025] px-5 py-4"><Icon name="lock" size={18} className="inline text-fuchsia-300" /><span className="ml-2 text-xs font-black">LP LOCKED</span><small className="ml-7 block text-[10px] text-zinc-500">91 DAYS</small></div>
          <div className="rounded-xl border border-fuchsia-400/30 bg-white/[.025] px-5 py-4"><Icon name="flame" size={18} className="inline text-orange-300" /><span className="ml-2 text-xs font-black">LP REMOVED</span><small className="ml-7 block text-[10px] text-zinc-500">(BURNT)</small></div>
        </div>
      </div>
    </section>
  )
}
