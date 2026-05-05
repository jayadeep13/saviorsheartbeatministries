import Hero from '@/components/sections/Hero'
import AboutPreview from '@/components/sections/AboutPreview'
import MinistryHighlights from '@/components/sections/MinistryHighlights'
import CharityImpact from '@/components/sections/CharityImpact'
import ServiceTimings from '@/components/sections/ServiceTimings'
import GalleryPreview from '@/components/sections/GalleryPreview'
import BoardPreview from '@/components/sections/BoardPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <MinistryHighlights />
      <CharityImpact />
      <ServiceTimings />
      <GalleryPreview />
      <BoardPreview />
      <ContactCTA />
    </>
  )
}
