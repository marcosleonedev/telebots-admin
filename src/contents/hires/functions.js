import { LoaderCircle } from "lucide-react"

export function handleGeneratePayment(plan, setPlan){
  setPlan(<LoaderCircle className="animate-spin"/>)
}