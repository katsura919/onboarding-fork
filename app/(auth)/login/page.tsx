"use client"
 
import { LoginForm } from "@/components/login-form"
import { cn } from "@/lib/utils"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"

export default function LoginPage() {
  return (
    <div className="relative min-h-svh w-full flex flex-col items-center justify-center p-6 md:p-10 bg-background overflow-hidden">
      <HexagonPattern
        hexagons={[
          [1, 1],
          [4, 4],
          [2, 2],
          [3, 4],
          [5, 4],
          [8, 2],
          [6, 3],
          [8, 5],
          [10, 10],
        ]}
        className={cn(
          "mask-[radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-0 skew-y-6 opacity-40 animate-pulse"
        )}
      />
      
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-8">
        <div className="flex justify-center">
          <a href="#" className="flex items-center gap-2 font-medium">
            <img src="/assets/logo.png" alt="Logo" className="size-20 object-contain" />
          </a>
        </div>
        <div className="w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
