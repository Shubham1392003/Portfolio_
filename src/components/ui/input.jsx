import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // === DARK THEME & ACCENT MODIFICATIONS ===
        // Background, Border, and Text colors for the dark theme
        "bg-gray-700 border-gray-600 text-gray-100", 
        // Placeholder text color
        "placeholder:text-gray-400", 
        // Yellow selection highlight
        "selection:bg-yellow-400 selection:text-gray-900", 
        
        // Base styling copied from your original file
        "file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium", 
        "flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        
        // === ACCENT FOCUS STYLES (Focus is now yellow) ===
        "focus-visible:border-yellow-400 focus-visible:ring-yellow-400/50 focus-visible:ring-[3px]", 
        
        // Aria states
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }