'use client'

import { type FormEvent, useState } from 'react'

type PrayerFormState = {
  name: string
  email: string
  phone: string
  request: string
  urgent: boolean
}

type PrayerRequestFormProps = {
  className?: string
}

const initialForm: PrayerFormState = {
  name: '',
  email: '',
  phone: '',
  request: '',
  urgent: false,
}

export default function PrayerRequestForm({ className = '' }: PrayerRequestFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState('')
  const [form, setForm] = useState(initialForm)
  const set = (key: keyof PrayerFormState, value: string | boolean) => {
    setForm(current => ({ ...current, [key]: value }))
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setResult('')

    const formData = new FormData(event.currentTarget)
    formData.append('access_key', '74a309d8-11c6-4271-a839-fc0a6c960100')
    formData.append('from_name', "Savior's Heartbeat Website")
    formData.append('subject', 'Prayer Request')
    formData.append('form_type', 'Prayer Request')
    formData.append('urgent', form.urgent ? 'Yes' : 'No')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
        setForm(initialForm)
      } else {
        setResult('Something went wrong. Please try again.')
      }
    } catch {
      setResult('Unable to send right now. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className={`flex h-full flex-col justify-center border border-[#E8DDE2] bg-white px-7 py-12 text-center shadow-[0_18px_60px_rgba(0,0,0,0.08)] md:px-10 ${className}`}>
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#B51657] text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_16px_34px_rgba(181,22,87,0.24)]">
          OK
        </div>
        <h2 className="font-[Playfair_Display] text-4xl font-bold leading-tight text-[#1E1E22]">Prayer Received</h2>
        <p className="mx-auto mt-4 max-w-md font-body text-sm leading-7 text-[#625B61]">
          Thank you for trusting us with your prayer need. Our prayer team will lift you up before the Lord with care and confidentiality.
        </p>
        <blockquote className="mx-auto mt-7 max-w-md border-l-4 border-[#B51657] pl-5 text-left">
          <p className="font-[Playfair_Display] text-lg italic leading-relaxed text-[#2B272A]">
            "The prayer of a righteous person is powerful and effective." - James 5:16
          </p>
        </blockquote>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#B51657] px-8 py-3.5 font-body text-sm font-bold text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)] transition-colors hover:bg-[#9E134D]"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <div className={`flex h-full flex-col overflow-hidden bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)] ring-1 ring-[#E8DDE2] ${className}`}>
      <div className="h-1.5 bg-[#B51657]" />
      <div className="flex h-full flex-col p-7 md:p-10">
        <div className="mb-8">
          <p className="mb-3 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">Prayer Request</p>
          <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.05] text-[#1E1E22] md:text-[2.75rem] lg:text-5xl">
            Share Your <span className="italic text-[#B51657]">Prayer Need</span>
          </h2>
          <p className="mt-3 font-body text-sm leading-6 text-[#625B61]">
            All prayer requests are kept completely confidential and prayed over with care.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-1 flex-col justify-between gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-accent text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E1E22]">Full Name *</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={event => set('name', event.target.value)}
                className="w-full border border-[#DDD6DB] bg-[#FDF8F2] px-4 py-3.5 font-body text-sm text-[#1E1E22] outline-none transition-all placeholder:text-[#9C94A0] focus:border-[#B51657] focus:ring-4 focus:ring-[#B51657]/10"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block font-accent text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E1E22]">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={event => set('phone', event.target.value)}
                className="w-full border border-[#DDD6DB] bg-[#FDF8F2] px-4 py-3.5 font-body text-sm text-[#1E1E22] outline-none transition-all placeholder:text-[#9C94A0] focus:border-[#B51657] focus:ring-4 focus:ring-[#B51657]/10"
                placeholder="+91 ..."
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-accent text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E1E22]">Email Address</label>
            <input
              name="email"
              value={form.email}
              onChange={event => set('email', event.target.value)}
              type="email"
              className="w-full border border-[#DDD6DB] bg-[#FDF8F2] px-4 py-3.5 font-body text-sm text-[#1E1E22] outline-none transition-all placeholder:text-[#9C94A0] focus:border-[#B51657] focus:ring-4 focus:ring-[#B51657]/10"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="mb-2 block font-accent text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E1E22]">Your Prayer Request *</label>
            <textarea
              required
              name="prayer_request"
              value={form.request}
              onChange={event => set('request', event.target.value)}
              rows={6}
              className="w-full resize-none border border-[#DDD6DB] bg-[#FDF8F2] px-4 py-3.5 font-body text-sm text-[#1E1E22] outline-none transition-all placeholder:text-[#9C94A0] focus:border-[#B51657] focus:ring-4 focus:ring-[#B51657]/10"
              placeholder="Please share your prayer need with us..."
            />
          </div>

          <label className="group flex cursor-pointer items-center gap-3">
            <span className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center">
              <input
                type="checkbox"
                checked={form.urgent}
                onChange={event => set('urgent', event.target.checked)}
                className="peer h-6 w-6 appearance-none border-2 border-[#DDD6DB] bg-white transition-all checked:border-[#B51657] checked:bg-[#B51657] focus:outline-none focus:ring-4 focus:ring-[#B51657]/15 group-hover:border-[#B51657]"
              />
              <svg className="pointer-events-none absolute h-4 w-4 text-white opacity-0 transition-opacity peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="font-body text-sm font-medium text-[#625B61]">This is an urgent prayer request</span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#B51657] px-6 py-4 font-body text-sm font-bold tracking-wide text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)] transition-colors hover:bg-[#9E134D] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Submit Prayer Request'}
          </button>

          <div>
            {result && <p className="mb-2 text-center font-body text-sm text-[#B51657]">{result}</p>}
            <p className="text-center font-body text-xs leading-5 text-[#8B8289]">Your request is confidential and will be prayed over with care.</p>
          </div>
        </form>
      </div>
    </div>
  )
}
