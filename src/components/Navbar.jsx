import { useEffect, useState } from 'react'
import { navLinks, externalLinks } from '../data/site'
import { Icon } from './Icon'

export function Navbar({ logo }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
    return () => document.body.classList.remove('overflow-hidden')
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-fuchsia-400/15 bg-[#07030f]/85 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)} aria-label="WINA home">
          <img src={logo} alt="WINA logo" className="h-10 w-10 rounded-full object-cover ring-1 ring-fuchsia-400/40" />
          <span className="font-display text-2xl font-black tracking-tight">WINA</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="text-xs font-extrabold uppercase tracking-wide text-zinc-200 transition hover:text-fuchsia-300">{link.label}</a>)}
          <a href={externalLinks.buy} rel="noopener" target="_blank"  className="rounded-lg bg-linear-to-r from-violet-700 to-fuchsia-500 px-6 py-3 text-xs font-black shadow-[0_0_30px_rgba(168,60,255,.25)] transition hover:-translate-y-0.5">BUY WINA</a>
        </nav>

        <button type="button" className="rounded-lg p-2 text-white lg:hidden" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          <Icon name={open ? 'x' : 'menu'} size={27} />
        </button>
      </div>

      {open && (
        <nav className="mx-5 mb-4 rounded-2xl border border-fuchsia-400/20 bg-[#0b0616]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-bold text-zinc-200 hover:bg-fuchsia-500/10 hover:text-fuchsia-300">{link.label}</a>)}
            <a href={externalLinks.buy} onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-linear-to-r from-violet-700 to-fuchsia-500 px-4 py-3 text-center text-sm font-black">BUY WINA</a>
          </div>
        </nav>
      )}
    </header>
  )
}
