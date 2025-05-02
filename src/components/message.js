import { clsx } from "clsx";

export function Message({ children, className, ...props }) {
  return (
    <span className={clsx('mb-2 text-sm text-foreground', className)} {...props}>{children}</span>
  )
}