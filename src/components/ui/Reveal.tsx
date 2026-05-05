'use client'
import { useEffect, useRef } from 'react'
interface Props { children: React.ReactNode; className?: string; delay?: number; dir?: 'up'|'left'|'right' }
export default function Reveal({ children, className = '', delay = 0, dir = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add('on'), delay); obs.unobserve(el) }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  const cls = dir === 'left' ? 'reveal-l' : dir === 'right' ? 'reveal-r' : 'reveal'
  return <div ref={ref} className={`${cls} ${className}`}>{children}</div>
}
