import { externalLinks, navLinks, socials } from '../data/site'
import { Icon } from './Icon'

export function Footer({ logo }) {
  return (
    <footer id="community" className="border-t border-fuchsia-400/15 bg-[#05030b]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_1fr_.8fr] lg:px-10">
        <div><a href="#home" className="flex items-center gap-2.5"><img src={logo} alt="WINA logo" className="h-10 w-10 rounded-full object-cover" /><span className="font-display text-2xl font-black">WINA</span></a><p className="mt-5 max-w-xs text-xs leading-6 text-zinc-500">A deflationary meme coin built for education, adoption and fun within the Win.co DAO ecosystem.</p><small className="mt-8 block text-[10px] text-zinc-600">© 2025 WINA COIN. All rights reserved.</small></div>
        <FooterColumn title="QUICK LINKS">{navLinks.map(link => <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>)}<FooterLink href={externalLinks.whitepaper}>Whitepaper</FooterLink></FooterColumn>
        <FooterColumn title="OFFICIAL LINKS">{socials.map(s => <a key={s.detail} href={s.href} className="group mb-4 flex items-center gap-3 text-xs text-zinc-400 transition hover:text-fuchsia-300"><span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/3"><Icon name={s.icon} size={15} /></span><span>{s.label}<small className="block text-[10px] text-zinc-600 group-hover:text-zinc-500">{s.detail}</small></span></a>)}</FooterColumn>
        <FooterColumn title="RESOURCES"><FooterLink href={externalLinks.whitepaper} icon="book">Whitepaper</FooterLink><FooterLink href={externalLinks.firescreener} icon="coins">Contract (BSC)</FooterLink><FooterLink href={externalLinks.dexScreener} icon="chart">DexScreener</FooterLink><FooterLink href={externalLinks.prukLock} icon="lock">Pink Lock</FooterLink></FooterColumn>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }) { return <div><h4 className="mb-5 text-[11px] font-black tracking-[.15em] text-fuchsia-400">{title}</h4>{children}</div> }
function FooterLink({ href, children, icon }) { return <a href={href} rel="noopener" target="_blank" className="mb-3 flex items-center gap-2 text-xs text-zinc-500 transition hover:text-fuchsia-300">{icon && <Icon name={icon} size={14} />}{children}</a> }
