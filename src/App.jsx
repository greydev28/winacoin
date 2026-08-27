import logo from './assets/wina-logo.jpeg'
import heroImage from './assets/wina-hero.jpeg'
import communityImage from './assets/wina-community.jpeg'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Liquidity } from './components/Liquidity'
import { Tokenomics } from './components/Tokenomics'
import { Roadmap } from './components/Roadmap'
import { Utilities } from './components/Utilities'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07030f] text-white selection:bg-fuchsia-500/30">
      <Navbar logo={logo} />
      <main>
        <Hero heroImage={heroImage} logo={logo} />
        <About logo={logo} />
        <Liquidity />
        <Tokenomics logo={logo}/>
        <Roadmap background={communityImage} />
        <Utilities />
        <FAQ />
      </main>
      <Footer logo={logo} />
    </div>
  )
}
