'use client'

import { FormEvent, useState } from 'react'
import { Mail, MessageSquareHeart, Phone, Send, UserRound } from 'lucide-react'

type PrayerRequestFormProps = {
  className?: string
}

export default function PrayerRequestForm({ className = '' }: PrayerRequestFormProps) {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [request, setRequest] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = encodeURIComponent(`Prayer Request from ${name || 'Website Visitor'}`)
    const body = encodeURIComponent(
      [
        `Name: ${name || 'Not provided'}`,
        `Contact: ${contact || 'Not provided'}`,
        '',
        'Prayer Request:',
        request || 'Not provided',
      ].join('\n')
    )

    window.location.href = `mailto:saviorsheartbeatin@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col border border-[#E8DDE2] bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-9 ${className}`}
    >
      <div className="mb-7">
        <div className="mb-4 flex h-14 w-14 items-center justify-center bg-[#B51657] text-white shadow-[0_14px_30px_rgba(181,22,87,0.22)]">
          <MessageSquareHeart className="h-7 w-7" strokeWidth={1.8} />
        </div>
        <p className="mb-3 font-accent text-[10px] font-bold uppercase tracking-[0.32em] text-[#B51657]">
          Send a Prayer Request
        </p>
        <h2 className="font-[Playfair_Display] text-3xl font-bold leading-tight text-[#1E1E22] md:text-4xl">
          Share what we can pray for.
        </h2>
        <p className="mt-3 font-body text-sm leading-7 text-[#625B61]">
          Your request opens in your email app so you can review and send it directly to the ministry.
        </p>
      </div>

      <div className="grid gap-4">
        <label className="block">
          <span className="mb-2 flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.18em] text-[#5F575E]">
            <UserRound className="h-4 w-4 text-[#B51657]" strokeWidth={1.9} />
            Name
          </span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-13 w-full border border-[#E8DDE2] bg-[#FDF8F2] px-4 py-3 font-body text-sm text-[#1E1E22] outline-none transition-colors focus:border-[#B51657]"
            placeholder="Your name"
            type="text"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.18em] text-[#5F575E]">
            <Phone className="h-4 w-4 text-[#B51657]" strokeWidth={1.9} />
            Phone or Email
          </span>
          <input
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            className="h-13 w-full border border-[#E8DDE2] bg-[#FDF8F2] px-4 py-3 font-body text-sm text-[#1E1E22] outline-none transition-colors focus:border-[#B51657]"
            placeholder="How can we contact you?"
            type="text"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.18em] text-[#5F575E]">
            <Mail className="h-4 w-4 text-[#B51657]" strokeWidth={1.9} />
            Prayer Need
          </span>
          <textarea
            value={request}
            onChange={(event) => setRequest(event.target.value)}
            className="min-h-40 w-full resize-y border border-[#E8DDE2] bg-[#FDF8F2] px-4 py-3 font-body text-sm leading-7 text-[#1E1E22] outline-none transition-colors focus:border-[#B51657]"
            placeholder="Write your prayer request here..."
            required
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-14 items-center justify-center gap-3 bg-[#B51657] px-7 font-body text-sm font-bold text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#8B0A35]"
      >
        <Send className="h-4 w-4" strokeWidth={2} />
        Send Prayer Request
      </button>
    </form>
  )
}
