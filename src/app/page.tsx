import Hero from '@/components/sections/Hero'
import AboutPreview from '@/components/sections/AboutPreview'
import MinistryHighlights from '@/components/sections/MinistryHighlights'
import CharityImpact from '@/components/sections/CharityImpact'
import GalleryPreview from '@/components/sections/GalleryPreview'
import MissionSupportPreview from '@/components/sections/MissionSupportPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <MinistryHighlights />
      <CharityImpact />
      <MissionSupportPreview />
      <GalleryPreview />
      <ContactCTA />
    </>
  )
}
