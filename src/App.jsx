import { useRef } from 'react'
import DemoApp from './components/DemoApp'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'

function App() {
  const targetRef = useRef()
  return (
    <main>
      <section className="hero-section">
        <HeroSection targetRef={targetRef} />
      </section>
      <section className="problem-section" ref={targetRef}>
        <ProblemSection />
        <SolutionSection />
        <DemoApp />
      </section>
    </main>
  )
}

export default App
