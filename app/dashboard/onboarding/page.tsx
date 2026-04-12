import Link from "next/link"
import { ArrowLeft, Construction } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OnboardingPathwayPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl min-h-[80vh] flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="p-6 rounded-full bg-primary/10 border border-primary/20">
        <Construction className="h-16 w-16 text-primary" />
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 text-pretty">
          Pathway Activation in Progress
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          We are currently fine-tuning your personalized Peace-Driven Leader™ pathway. Your unique roadmap will be ready shortly.
        </p>
      </div>

      <div className="pt-4">
        <Button asChild variant="outline" className="rounded-xl h-12 px-8">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  )
}
