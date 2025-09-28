import * as React from "react"

import { cn } from "@/lib/utils"

// Removed TypeScript type annotation from props
function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // === DARK THEME & ACCENT MODIFICATIONS ===
        // Background, Border, and Text colors for the dark theme
        "bg-gray-700 border-gray-600 text-gray-100", 
        // Placeholder text color
        "placeholder:text-gray-400", 
        
        // Base styling copied from your original file
        "flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        
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

export { Textarea }