import { AboutSection } from '@/components/About'
import { StarCanvas } from '@/components/canvas/StarCanvas'
import { ContactSection } from '@/components/Contact'
import { ExperienceSection } from '@/components/Experience'
import { FeedbacksSection } from '@/components/Feedbacks'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'

import { TechSection } from '@/components/Tech'
import { WorksSection } from '@/components/Works'

export default function Home() {
  return (
    <main className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>

      <AboutSection />
      <ExperienceSection />
      <TechSection />
      <WorksSection />
      <FeedbacksSection />

      <div className="relative z-0">
        <ContactSection />
        <StarCanvas />
      </div>
    </main>
  )
}
