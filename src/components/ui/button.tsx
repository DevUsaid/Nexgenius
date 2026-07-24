import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-brand-primary text-black shadow-[0_0_15px_rgba(57,255,20,0.2)] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(57,255,20,0.4)]",
        destructive:
          "bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90",
        outline:
          "border border-border-subtle bg-transparent text-white shadow-sm hover:border-brand-primary hover:text-brand-primary hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)]",
        secondary:
          "bg-surface text-white shadow-sm hover:bg-surface/80",
        ghost: "hover:bg-surface hover:text-brand-primary",
        link: "text-brand-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 text-base",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-12 rounded-full px-10 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
