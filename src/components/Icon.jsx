import {
  ArrowUpRight, BarChart3, BookOpen, CalendarDays, Check, ChevronDown, CircleDollarSign,
  Coins, ExternalLink, Flame, Gamepad2, Github, HandCoins, LockKeyhole,
  Menu, MessageCircle, Rocket, ShieldCheck, Smartphone, Sparkles, WalletCards,
  X, XIcon, Zap,
} from 'lucide-react'
// Phosphor includes both!
import { XLogo, TelegramLogo } from "@phosphor-icons/react";


const icons = {
  arrow: ArrowUpRight, chart: BarChart3, book: BookOpen, calendar: CalendarDays, check: Check, chevron: ChevronDown,
  coin: CircleDollarSign, coins: Coins, external: ExternalLink, flame: Flame, game: Gamepad2,
  github: Github, hand: HandCoins, lock: LockKeyhole, menu: Menu, telegram: TelegramLogo,
  rocket: Rocket, shield: ShieldCheck, smartphone: Smartphone, sparkles: Sparkles,
  wallet: WalletCards, x: XLogo, zap: Zap,
}

export function Icon({ name, size = 20, strokeWidth = 1.8, className = '' }) {
  const Component = icons[name] ?? Sparkles
  return <Component aria-hidden="true" size={size} strokeWidth={strokeWidth} className={className} />
}
