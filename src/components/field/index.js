import { Input } from "../ui/input"
import { twMerge } from "tailwind-merge"

function Field({ children, className, ...props }) {
  return (
    <div className={twMerge('w-full flex flex-col mb-2', className)} {...props}>
      {children}
    </div>
  )
}

function FieldTitle({ children, className, ...props }) {
  return (
    <label className={twMerge('text-sm mb-1', className)} {...props}>{children}</label>
  )
}

function FieldInput({ className, ...props }) {
  return (
    <Input className={twMerge('text-sm disabled:opacity-100 disabled:cursor-default', className)} {...props} />
  )
}

export {
  Field,
  FieldTitle,
  FieldInput
}