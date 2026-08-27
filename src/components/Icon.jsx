import {
  ArrowUpRight, BarChart3, BookOpen, CalendarDays, Check, ChevronDown, CircleDollarSign,
  Coins, ExternalLink, Flame, Gamepad2, Github, HandCoins, LockKeyhole,
  Menu, MessageCircle, Rocket, ShieldCheck, Smartphone, Sparkles, WalletCards,
  X, XIcon, Zap,
} from 'lucide-react'

const icons = {
  arrow: ArrowUpRight, chart: BarChart3, book: BookOpen, calendar: CalendarDays, check: Check, chevron: ChevronDown,
  coin: CircleDollarSign, coins: Coins, external: ExternalLink, flame: Flame, game: Gamepad2,
  github: Github, hand: HandCoins, lock: LockKeyhole, menu: Menu, telegram: MessageCircle,
  rocket: Rocket, shield: ShieldCheck, smartphone: Smartphone, sparkles: Sparkles,
  wallet: WalletCards, x: XIcon, zap: Zap,
}

export function Icon({ name, size = 20, strokeWidth = 1.8, className = '' }) {
  const Component = icons[name] ?? Sparkles
  return <Component aria-hidden="true" size={size} strokeWidth={strokeWidth} className={className} />
}
