import DemoApp from './components/DemoApp'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'

function App() {
  return (
    <main>
      <section className="hero-section">
        <HeroSection />
      </section>
      <section className="problem-section">
        <ProblemSection />
        <SolutionSection />
      </section>
      <DemoApp />
    </main>
  )
}

export default App
