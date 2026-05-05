import PrayerRequestForm from '@/components/sections/PrayerRequestForm'
import PageHero from '@/components/ui/PageHero'

export default function PrayerRequestPage() {
  return (
    <div>
      <PageHero
        eyebrow="Ministry"
        title="Prayer Request"
        subtitle="We believe in the power of prayer. Share your needs - our prayer team intercedes daily."
      />

      <section className="bg-[#FDF8F2] py-20">
        <div className="mx-auto max-w-2xl px-6">
          <PrayerRequestForm />
        </div>
      </section>
    </div>
  )
}
