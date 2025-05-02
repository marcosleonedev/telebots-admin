import logoSVG from '@/public/favicon.ico'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { handleLogin } from "./functions";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export function LoginContent() {

  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <form className="w-full max-w-[420px] flex flex-col items-center p-5" onSubmit={(e) => handleLogin(e, email, password, setMessage, router)}>

        {/* Logo */}
        <a href="#" className="h-12 w-12 mb-2" >
          <img src={logoSVG.src} />
        </a>

        {/* Titulo */}
        <h1 className="text-xl font-bold mb-2">Entrar na minha conta.</h1>

        {/* Campo de email */}
        <div className="grid gap-2 w-full mt-5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Campo de senha */}
        <div className="grid gap-2 w-full mt-5">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Mensagem */}
        {message != '' ? <span className="text-sm mt-2.5 my-[-10px] text-left w-full">{message}</span> : ''}

        {/* Botão */}
        <Button className='w-full mt-5'>Entrar</Button>

      </form>
    </div >
  )
}