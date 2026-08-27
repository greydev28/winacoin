import { externalLinks } from '../data/site'
import { Icon } from './Icon'

export function Hero({ heroImage, logo }) {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(126,34,206,.22),transparent_30%),radial-gradient(circle_at_30%_70%,rgba(79,70,229,.10),transparent_30%)]" />
      <div className="stars absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-8 px-5 pb-24 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:px-10">
        <div className="relative z-10 text-center lg:text-left">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[.24em] text-fuchsia-400">WIN.CO DAO • BSC MEME COIN</p>
          <h1 className="font-display text-[clamp(4rem,10vw,7rem)] font-black leading-[.82] tracking-[-.07em]">BE A <span className="block bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,60,255,.35)]">WINA!</span></h1>
          <p className="mt-7 text-base font-extrabold tracking-wide text-white sm:text-lg">WINNER TODAY, LEGEND TOMORROW.</p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-zinc-400 lg:mx-0">A deflationary token created by Sir Talus for the Win.co DAO ecosystem to drive blockchain education, adoption, interaction and fun.</p>
          <div id="buy" className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href={externalLinks.buy} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-700 to-fuchsia-500 px-6 py-3.5 text-xs font-black shadow-[0_0_35px_rgba(168,60,255,.3)] transition hover:-translate-y-0.5">BUY WINA <Icon name="arrow" size={16} /></a>
            <a href="#community" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[.03] px-6 py-3.5 text-xs font-black transition hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10">JOIN COMMUNITY <Icon name="telegram" size={16} /></a>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 text-[10px] font-extrabold text-zinc-400 lg:justify-start">
            <span className="inline-flex items-center gap-2"><Icon name="coin" size={15} className="text-amber-300" /> BINANCE SMART CHAIN</span>
            <span className="inline-flex items-center gap-2"><Icon name="lock" size={15} className="text-fuchsia-300" /> LP LOCKED 91 DAYS</span>
            <span className="inline-flex items-center gap-2"><Icon name="shield" size={15} className="text-fuchsia-300" /> CONTRACT VERIFIED</span>
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[570px]">
          <div className="absolute h-80 w-80 rounded-full bg-violet-600/30 blur-[100px]" />
          <img src={heroImage} alt="WINA coin hero artwork" className="relative w-full max-w-2xl rounded-[2rem] object-cover mix-blend-screen drop-shadow-[0_25px_80px_rgba(126,34,206,.28)]" />
          <img src={logo} alt="WINA coin" className="float-animation absolute right-0 top-12 h-24 w-24 rounded-full object-cover ring-1 ring-fuchsia-300/50 shadow-[0_0_50px_rgba(168,60,255,.45)] sm:right-5" />
          <div className="orbit-line absolute h-[72%] w-[70%] rounded-[50%] border-r border-dashed border-fuchsia-400/70" />
        </div>
      </div>
    </section>
  )
}
