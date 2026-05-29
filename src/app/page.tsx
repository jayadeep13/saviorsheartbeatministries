import Hero from '@/components/sections/Hero'
import AboutPreview from '@/components/sections/AboutPreview'
import HeartbeatFocus from '@/components/sections/HeartbeatFocus'
import FaithfulnessStats from '@/components/sections/FaithfulnessStats'
import MissionSupportPreview from '@/components/sections/MissionSupportPreview'
import PrayerBlessing from '@/components/sections/PrayerBlessing'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <HeartbeatFocus />
      <FaithfulnessStats />
      <MissionSupportPreview />
      <PrayerBlessing />
    </>
  )
}
