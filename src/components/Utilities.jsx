import { Icon } from './Icon'
import { SectionTitle } from './SectionTitle'

const production = [
  { title: 'WINA APP', text: 'Your all-in-one gateway to education, trading tools, community and rewards.', icon: 'smartphone' },
  { title: 'LEEF PAY', text: 'Seamless crypto payments made simple, fast and secure.', icon: 'wallet' },
]

export function Utilities() {
  return (
    <section id="utilities" className="bg-[#0b0716] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionTitle title="Utilities" />
        <div className="mb-8"><p className="mb-3 text-[11px] font-black uppercase tracking-wider text-lime-300">● IN PRODUCTION</p><div className="grid gap-4 md:grid-cols-2">{production.map((item) => <Utility key={item.title} {...item} />)}</div></div>
        <div><p className="mb-3 text-[11px] font-black uppercase tracking-wider text-orange-300">● OTHER</p><Utility title="COMING SOON" text="More exciting utilities are on the way. Stay tuned!" icon="rocket" /></div>
      </div>
    </section>
  )
}

function Utility({ title, text, icon }) {
  return <article className="flex gap-5 rounded-2xl border border-fuchsia-400/25 bg-white/[.025] p-5 transition hover:-translate-y-1 hover:border-fuchsia-400/45"><Icon name={icon} size={34} className="shrink-0 text-fuchsia-300" /><div><h3 className="font-display text-lg font-black">{title}</h3><p className="mt-2 text-xs leading-6 text-zinc-400">{text}</p></div></article>
}
