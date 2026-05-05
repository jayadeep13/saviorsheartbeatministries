import { redirect } from 'next/navigation'

export const metadata = { title: "Support Our Mission | Savior's Heartbeat Ministries" }

export default function SupportRedirectPage() {
  redirect('/support/financial-partnership')
}
