import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Flow } from './components/Flow'
import { Guide } from './components/Guide'
import { Download } from './components/Download'
import { Footer } from './components/Footer'
import './App.less'

export default function App() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Flow />
        <Guide />
        <Download />
      </main>
      <Footer />
    </div>
  )
}
