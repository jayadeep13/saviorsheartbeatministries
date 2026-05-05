'use client'

import { BookOpen, Clock3, Moon, Sparkles, Users } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

const services = [
  {
    icon: Clock3,
    title: 'Sunday Worship Service',
    sub: 'Every Sunday',
    times: ['Morning Service - 10:30 AM', 'Evening Service - 07:30 PM'],
    day: 0,
    eventTimes: ['10:30 AM', '07:30 PM'],
    accent: '#B51657',
  },
  {
    icon: Sparkles,
    title: 'Fasting Prayer',
    sub: 'Every Friday',
    times: ['07:30 PM'],
    day: 5,
    eventTimes: ['07:30 PM'],
    accent: '#8B1A4A',
  },
  {
    icon: Users,
    title: 'Youth Meeting',
    sub: 'Sunday afternoon',
    times: ['02:00 PM'],
    day: 0,
    eventTimes: ['02:00 PM'],
    accent: '#C9A96E',
  },
  {
    icon: BookOpen,
    title: 'Sunday School',
    sub: 'Every Sunday',
    times: ['During Worship Service'],
    day: 0,
    eventTimes: ['10:30 AM'],
    accent: '#B51657',
  },
  {
    icon: Moon,
    title: 'All Night Prayers',
    sub: 'Last Friday of every month',
    times: ['09:00 PM onwards'],
    day: 5,
    eventTimes: ['09:00 PM'],
    lastFriday: true,
    accent: '#C9A96E',
  },
]

function parseTime(time: string) {
  const [rawTime, period] = time.split(' ')
  let [hours, minutes] = rawTime.split(':').map(Number)

  if (period === 'PM' && hours !== 12) hours += 12
  if (period === 'AM' && hours === 12) hours = 0

  return { hours, minutes }
}

function getLastFriday(year: number, month: number) {
  const date = new Date(year, month + 1, 0)

  while (date.getDay() !== 5) {
    date.setDate(date.getDate() - 1)
  }

  return date
}

function getNextDate(service: any) {
  const now = new Date()
  const dates: Date[] = []

  if (service.lastFriday) {
    const thisMonth = getLastFriday(now.getFullYear(), now.getMonth())
    const nextMonth = getLastFriday(now.getFullYear(), now.getMonth() + 1)

    service.eventTimes.forEach((time: string) => {
      const { hours, minutes } = parseTime(time)

      const thisEvent = new Date(thisMonth)
      thisEvent.setHours(hours, minutes, 0, 0)

      const nextEvent = new Date(nextMonth)
      nextEvent.setHours(hours, minutes, 0, 0)

      dates.push(thisEvent, nextEvent)
    })
  } else {
    service.eventTimes.forEach((time: string) => {
      const { hours, minutes } = parseTime(time)
      const date = new Date()
      const daysUntil = (service.day - date.getDay() + 7) % 7

      date.setDate(date.getDate() + daysUntil)
      date.setHours(hours, minutes, 0, 0)

      if (date.getTime() < now.getTime()) {
        date.setDate(date.getDate() + 7)
      }

      dates.push(date)
    })
  }

  return dates.sort((a, b) => a.getTime() - b.getTime())[0]
}

function getServiceInfo(service: any) {
  const nextDate = getNextDate(service)

  return {
    nextDate,
    dayName: nextDate.toLocaleDateString('en-IN', { weekday: 'long' }),
    date: nextDate.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
    }),
    time: nextDate.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }),
  }
}

export default function ServiceTimings() {
  const serviceInfos = services.map((service) => getServiceInfo(service))

  const nextUpcomingIndex = serviceInfos.reduce((nearestIndex, item, index) => {
    return item.nextDate.getTime() < serviceInfos[nearestIndex].nextDate.getTime()
      ? index
      : nearestIndex
  }, 0)

  return (
    <section className="relative overflow-hidden bg-[#080304] py-24 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,22,87,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(201,169,110,0.12),transparent_36%)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:72px_72px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <SectionLabel text="Service Times" light />

            <h2 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">
              Join Us in
              <span className="block font-semibold italic text-[#B51657]">
                Worship
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-8 text-white/65">
              All are welcome to come and experience the presence of God at Savior&apos;s Heartbeat Ministries, Vijayawada.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon
            const info = serviceInfos[index]
            const isNextUpcoming = index === nextUpcomingIndex

            return (
              <Reveal key={service.title} delay={index * 70}>
                <div
                  className={`group relative overflow-hidden rounded-[1.7rem] border p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${
                    isNextUpcoming
                      ? 'border-[#B51657]/70 bg-[#B51657]/12 shadow-[0_26px_80px_rgba(181,22,87,0.28)]'
                      : 'border-white/10 bg-white/[0.045] hover:border-[#C9A96E]/40 hover:bg-white/[0.07]'
                  }`}
                >
                  <div
                    className="absolute inset-y-0 left-0 w-[4px]"
                    style={{ backgroundColor: isNextUpcoming ? '#B51657' : service.accent }}
                  />

                  <div className="relative z-10 grid items-center gap-5 md:grid-cols-[70px_1.2fr_0.75fr_1fr_1.2fr]">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-black/20"
                      style={{
                        borderColor: `${isNextUpcoming ? '#B51657' : service.accent}75`,
                        color: isNextUpcoming ? '#B51657' : service.accent,
                      }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.9} />
                    </div>

                    <div>
                      <div className="mb-1 font-body text-[11px] font-bold tracking-[0.28em] text-white/30">
                        0{index + 1}
                      </div>
                      <h3 className="font-heading text-2xl font-semibold leading-tight text-white">
                        {service.title}
                      </h3>
                    </div>

                    <div>
                      {isNextUpcoming ? (
                        <span className="inline-flex rounded-full bg-[#B51657] px-4 py-2 text-[11px] font-bold tracking-[0.16em] text-white">
                          UPCOMING
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold tracking-[0.16em] text-white/25">
                          SCHEDULED
                        </span>
                      )}
                    </div>

                    <div>
                      <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#B51657]">
                        {info.dayName}
                      </p>
                      <p className="mt-1 font-body text-sm font-semibold text-white/80">
                        {info.date} · {info.time}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 md:justify-end">
                      {service.times.map((time) => (
                        <div
                          key={time}
                          className={`rounded-full border px-5 py-3 font-body text-sm font-semibold ${
                            isNextUpcoming
                              ? 'border-[#B51657]/45 bg-[#B51657]/14 text-white'
                              : 'border-white/15 bg-black/25 text-white/85'
                          }`}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={450}>
          <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.055] px-6 py-5 text-center backdrop-blur-xl">
            <p className="font-body text-sm leading-7 text-white/68">
              Vijayawada, Andhra Pradesh
              <span className="mx-3 text-white/25">•</span>
           
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
