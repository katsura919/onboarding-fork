import { DashboardHeader } from "@/components/dashboard-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-neutral-50/50 dark:bg-neutral-950">
      <DashboardHeader />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}
