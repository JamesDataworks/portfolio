import { sections } from './data/portfolio'
import TabStrip from './components/TabStrip'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Section from './components/Section'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

/* Page order lives here. The four project sections come straight
   from src/data/portfolio.js — reorder them there, not here. */
export default function App() {
  return (
    <>
      <a
        href="#power-bi"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to projects
      </a>

      <Hero />
      <TabStrip />
      <Skills />

      <main>
        {sections.map((section, i) => (
          <Section key={section.id} section={section} index={i} />
        ))}
        <Certifications />
      </main>

      <Footer />
    </>
  )
}
