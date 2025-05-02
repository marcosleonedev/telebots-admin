import { Field, FieldInput, FieldTitle } from "@/components/field"
import { Layout } from "@/components/layout"
import { Message } from "@/components/message"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { handleUserEdit } from "@/functions/handleUserEdit"
import { Separator } from "@/components/ui/separator"

export function AccountContent({ name, email, wiinpayApiKey, pixelAccess, pixelId }) {

  const [newWiinpayApiKey, setNewWiinpayApiKey] = useState(wiinpayApiKey)
  const [newPixelId, setNewPixelId] = useState(pixelId)
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Layout page={'Minha conta'} titulo={'Minha conta'}>
      <form className="max-w- flex flex-col overflow-y-auto h-full" onSubmit={(e) => handleUserEdit(e, newWiinpayApiKey, newPixelId, password, newPassword, confirmNewPassword, setMessage)}>

        <h2 className="font-semibold text-lg text-primary">Minha conta 😃</h2>
        <p className="font-medium text-sm text-foreground mt-1">Veja e altere suas informações pessoais quando for necessário.</p>
        <Separator className='my-4' />
        <Field>
          <FieldTitle>Nome e sobrenome</FieldTitle>
          <FieldInput type='text' defaultValue={name} disabled />
        </Field>

        <Field>
          <FieldTitle>Email</FieldTitle>
          <FieldInput type='email' defaultValue={email} disabled />
        </Field>

        <Field>
          <FieldTitle>Senha atual</FieldTitle>
          <FieldInput type='password' defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
        </Field>

        <Field>
          <FieldTitle>Nova senha</FieldTitle>
          <FieldInput type='password' defaultValue={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </Field>

        <Field>
          <FieldTitle>Confirmar nova senha</FieldTitle>
          <FieldInput type='password' defaultValue={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
        </Field>

        {
          message != '' ? <Message className={'mb-[4px] mt-[4px]'}>{message}</Message> : ''
        }

        <Button className='mt-2 max-w-36'>Salvar alterações</Button>
      </form>
    </Layout >
  )
}