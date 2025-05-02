import { clsx } from "clsx"
import { Input } from "../ui/input"

function FormBackground({ children, className, ...props }) {
  return (
    <div className={clsx('w-full min-h-svh flex items-center justify-center p-5', className)} {...props}>
      {children}
    </div>
  )
}

function Form({ children, className, ...props }) {
  return (
    <form className={clsx('border rounded-xl p-5', className)} {...props}>
      {children}
    </form>
  )
}

function FormHeader({ children, className, ...props }) {
  return (
    <form className={clsx('', className)} {...props}>
      {children}
    </form>
  )
}

export {
  FormBackground,
  Form,
  FormHeader
}