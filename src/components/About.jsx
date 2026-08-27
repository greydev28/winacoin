import { Icon } from './Icon'

const details = [
  ['Launch date', '15 October 2025', 'calendar'],
  ['Launch time', '8:00 PM WAT', 'zap'],
  ['Blockchain', 'Binance Smart Chain', 'coins'],
  ['Mission', 'Education. Adoption. Fun. To be a Top 10 Meme Coin.', 'sparkles'],
]

export function About({ logo }) {
  return (
    <section id="about" className="relative overflow-hidden border-y border-fuchsia-400/15 bg-[#0c0718] py-24 sm:py-28">
      <img src={logo} alt="" aria-hidden="true" className="pointer-events-none absolute left-[-80px] top-1/2 w-[500px] -translate-y-1/2 opacity-[.045]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-10">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[.24em] text-fuchsia-400">ABOUT</p>
          <h2 className="font-display text-4xl font-black sm:text-5xl">WINA COIN</h2>
          <h3 className="mt-1 text-lg font-extrabold text-fuchsia-400">Detail Book</h3>
          <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-400">
            <p>Wina coin is a deflationary token created by Sir Talus for the Win.co DAO ecosystem to drive blockchain education, adoption, and enhance interaction and fun within the ecosystem. “Wina” is a pidgin English word that means “winner”.</p>
            <p>Wina was launched on the BSC blockchain on 15 October 2025 at exactly 8pm WAT and is positioned to be among the top 10 meme coins by market capitalization.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-fuchsia-400/35 bg-white/[.025] p-5 shadow-[inset_0_1px_rgba(255,255,255,.05)] sm:p-7">
          {details.map(([label, value, icon], index) => <div key={label} className={`flex gap-4 py-5 ${index < details.length - 1 ? 'border-b border-white/10' : ''}`}><Icon name={icon} size={22} className="mt-0.5 text-fuchsia-400" /><div><p className="text-[9px] font-black uppercase tracking-wider text-fuchsia-400">{label}</p><strong className="mt-1 block text-sm leading-6 text-white">{value}</strong></div></div>)}
        </div>
      </div>
    </section>
  )
}
