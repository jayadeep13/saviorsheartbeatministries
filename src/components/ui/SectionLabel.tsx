interface Props { text: string; light?: boolean }
export default function SectionLabel({ text, light = false }: Props) {
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      <span className={`h-px w-10 ${light ? 'bg-crimson-400/50' : 'bg-crimson-500/50'}`} />
      <span className={`font-accent text-[10px] tracking-[0.35em] uppercase ${light ? 'text-crimson-400' : 'text-crimson-500'}`}>{text}</span>
      <span className={`h-px w-10 ${light ? 'bg-crimson-400/50' : 'bg-crimson-500/50'}`} />
    </div>
  )
}
