import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "fade-in flex min-h-[160px] max-h-[250px] min-w-[800px] w-3/4 rounded-md border border-slate-200 bg-white px-3 py-2 text-lg text-bold ring-offset-gray-600 placeholder:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#045b72] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 shadow-2xl drop-shadow-2xl shadow-[#03485d] mb-6",
          className
        )}
        ref={ref}
        {...props}
        
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea } 
