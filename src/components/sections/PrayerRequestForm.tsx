'use client'

import { FormEvent, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MessageSquareHeart, Phone, Send, UserRound, CheckCircle2, Heart, ShieldCheck } from 'lucide-react'

type PrayerRequestFormProps = {
  className?: string
}

export default function PrayerRequestForm({ className = '' }: PrayerRequestFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  
  // Form values
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [request, setRequest] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setError('Prayer request service is not configured yet. Please add the Web3Forms access key.')
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `🙏 Urgent Prayer Request from ${name}`,
          from_name: name,
          name: name,
          email: email,
          phone: phone,
          message: request,
          form_type: 'Prayer Request',
          to_email: 'saviorsheartbeatin@gmail.com',
        }),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send prayer request.')
      }

      setSubmitted(true)
      setName('')
      setEmail('')
      setPhone('')
      setRequest('')
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : 'Unable to send prayer request. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 text-gray-800 shadow-xl md:p-10 ${className}`}>
      
      {/* Subtle Cross watermark line graphics in the background layout */}
      <div className="absolute right-[-5%] top-[-5%] text-gray-100 opacity-40 pointer-events-none select-none">
        <svg width="300" height="500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.7">
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="20" y1="35" x2="80" y2="35" />
        </svg>
      </div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-100 bg-white shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B51657] text-white">
                  <MessageSquareHeart className="h-5 w-5 animate-pulse" strokeWidth={2} />
                </div>
              </div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Prayer Request
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Share with us how we can pray for you.
              </p>
              
              {/* Confidentiality Notice */}
              <div className="mx-auto mt-4 inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3.5 py-1 text-xs font-medium text-gray-600 border border-gray-100 shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-[#B51657]" strokeWidth={2.5} />
                <span>Your request is strictly confidential</span>
              </div>
            </div>

            {/* Form Container */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div className="relative">
                <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-gray-700">
                  <UserRound className="h-4 w-4 text-[#B51657]" strokeWidth={2} /> Name
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none shadow-sm transition-all focus:border-[#B51657] focus:ring-1 focus:ring-[#B51657]"
                />
              </div>

              {/* Grid Layout for Email & Mobile Inputs */}
              <div className="grid gap-5 md:grid-cols-2">
                {/* Email Address */}
                <div>
                  <label className="mb-1.5 flex items-center justify-between text-sm font-medium text-gray-700">
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[#B51657]" strokeWidth={2} /> Email Address
                    </span>
                    <span className="text-xs font-bold text-amber-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none shadow-sm transition-all focus:border-[#B51657] focus:ring-1 focus:ring-[#B51657]"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="mb-1.5 flex items-center justify-between text-sm font-medium text-gray-700">
                    <span className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[#B51657]" strokeWidth={2} /> Mobile Number
                    </span>
                    <span className="text-xs font-bold text-amber-500">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    pattern="[0-9\-+\s]{7,15}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your number"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none shadow-sm transition-all focus:border-[#B51657] focus:ring-1 focus:ring-[#B51657]"
                  />
                </div>
              </div>

              {/* Prayer Need Message Textarea */}
              <div>
                <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Heart className="h-4 w-4 text-[#B51657]" strokeWidth={2} /> Prayer Need
                </label>
                <textarea
                  required
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  placeholder="Describe your need..."
                  className="min-h-[120px] w-full resize-y rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm leading-relaxed text-gray-900 placeholder-gray-400 outline-none shadow-sm transition-all focus:border-[#B51657] focus:ring-1 focus:ring-[#B51657]"
                />
              </div>

              {/* Submit CTA Button matched to your banner reference color */}
              <div className="flex justify-center pt-2">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitting}
                  className="flex min-h-[46px] min-w-[200px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#B51657] to-[#910e43] px-6 text-sm font-semibold uppercase tracking-wider text-white shadow-md shadow-[#B51657]/10 transition-all hover:brightness-110 disabled:opacity-50"
                >
                  <span className="text-base font-normal">+</span>
                  {submitting ? 'Submitting...' : 'Submit Request'}
                </motion.button>
              </div>

              {/* Component Validation Failure Feedback Display */}
              {error && (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="mt-3 text-center text-sm font-medium text-red-600"
                >
                  {error}
                </motion.p>
              )}
            </form>
          </motion.div>
        ) : (
          /* Animated Minimalist Success Layout View */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[400px] flex-col items-center justify-center p-4 text-center"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.05 }}
              className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-sm"
            >
              <CheckCircle2 className="h-9 w-9" strokeWidth={1.8} />
            </motion.div>
            
            <h2 className="font-serif text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Prayer Request Sent!
            </h2>
            
            <p className="mx-auto mb-6 mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
              Thank you. Your confidential prayer request has been safely received by our team.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => setSubmitted(false)}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50"
            >
              Send Another Prayer Request
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}