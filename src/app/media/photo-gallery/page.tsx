import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'
import MediaShowcase from '@/components/media/MediaShowcase'

export const metadata = { title: "Photo Gallery | Savior's Heartbeat Ministries" }

export default function GalleryPage() {
  return (
    <div>
      <PageHero eyebrow="Media" title="Photo Gallery" subtitle="Moments of ministry, worship, outreach, and God's faithfulness in India" />
      <section className="py-24 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-[#B51657]/50" />
                <span className="font-accent text-[#B51657] text-[10px] tracking-[0.35em] uppercase font-bold">Gallery</span>
                <span className="h-px w-10 bg-[#B51657]/50" />
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-semibold text-onyx-950 mb-4">
                Moments of <span className="italic text-[#B51657] font-light">Grace</span>
              </h2>
              <p className="text-onyx-600 max-w-2xl mx-auto font-body text-lg leading-relaxed">
                Each photograph tells a story of transformation, faith, and God's faithfulness in India.
              </p>
            </div>
          </Reveal>
          <MediaShowcase category="gallery" />
        </div>
      </section>
    </div>
  )
}
