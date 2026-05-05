import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'
import ContactCTA from '@/components/sections/ContactCTA'
import MediaShowcase from '@/components/media/MediaShowcase'

export const metadata = { title: "Books & Publications | Savior's Heartbeat Ministries" }

export default function BooksPage() {
  return (
    <div>
      <PageHero
        eyebrow="Media"
        title="Books & Publications"
        subtitle="Weekly and monthly SPANDANA magazines, books, and ministry publications"
        imageClassName="bg-[position:center_30%] md:bg-[position:center_22%]"
      />
      <section className="py-24 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-[#B51657]/50" />
                <span className="font-accent text-[#B51657] text-[10px] tracking-[0.35em] uppercase font-bold">Magazines</span>
                <span className="h-px w-10 bg-[#B51657]/50" />
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-semibold text-onyx-950 mb-4">
                Latest <span className="italic text-[#B51657] font-light">Publications</span>
              </h2>
              <p className="text-onyx-600 max-w-2xl mx-auto font-body text-lg leading-relaxed">
                Upload weekly or monthly magazine covers from the admin panel and the newest issue will appear first.
              </p>
            </div>
          </Reveal>
          <MediaShowcase category="books" />
        </div>
      </section>
      <ContactCTA />
    </div>
  )
}
