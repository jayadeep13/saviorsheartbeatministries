import { redirect } from 'next/navigation'

export const metadata = { title: "Widows | Savior's Heartbeat Ministries" }

export default function WidowsMinistryPage() {
  redirect('/charity/widows-care')
}
