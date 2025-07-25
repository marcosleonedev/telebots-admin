import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatDate } from "@/functions/formatDate";
import { Edit, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { handleUserList } from "./functions";
import { handleUserDelete } from "./functions";
import { handleUserEdit } from "./functions";
import { handleFormatRealValue } from "@/functions/handleFormatRealValue";

export function UsersContent() {

  const [message, setMessage] = useState('Carregando...')
  const [users, setUsers] = useState([])
  const [messageUserTrash, setMessageUserTrash] = useState('')
  const [messageUserEdit, setMessageUserEdit] = useState('')
  const [dialogTrash, setDialogTrash] = useState({
    open: false,
    id: '',
    name: '',
    email: ''
  })

  const [dialogEdit, setDialogEdit] = useState({
    open: false,
    id: '',
    name: '',
    email: '',
    fee: 0,
    percentage: 0
  })

  useEffect(() => {
    handleUserList(setMessage, setUsers)
  }, [])

  return (
    <Layout page={'Usuários'} titulo={'Usuários'}>
      
      <Dialog open={dialogEdit.open}>
        <DialogContent className="data-[state=open]:max-w-[400px] rounded-xl max-h-[80vh] overflow-auto">
          <DialogTitle className='text-primary text-lg font-semibold'>Editar usuário</DialogTitle>

          <div className='flex-col w-full'>
            <Label className={'mb-2'}>Nome do usuário</Label>
            <Input value={dialogEdit.name} defaultValue={dialogEdit.name} disbled />
          </div>

          <div className='flex-col w-full'>
            <Label className={'mb-2'}>Email do usuário</Label>
            <Input value={dialogEdit.email} defaultValue={dialogEdit.email} disbled />
          </div>

          <div className='flex-col w-full'>
            <Label className={'mb-2'}>Taxa</Label>
            <Input value={dialogEdit.fee} defaultValue={dialogEdit.fee} onChange={(e)=> {
              setDialogEdit({
                open: dialogEdit.open,
                id: dialogEdit.id,
                name: dialogEdit.name,
                email: dialogEdit.email,
                fee: e.target.value,
                percentage: dialogEdit.percentage
              })
            }}/>
          </div>

          <div className='flex-col w-full'>
            <Label className={'mb-2'}>Porcentagem</Label>
            <Input type={'number'} value={dialogEdit.percentage} defaultValue={dialogEdit.percentage} onChange={(e)=> {
              setDialogEdit({
                open: dialogEdit.open,
                id: dialogEdit.id,
                name: dialogEdit.name,
                email: dialogEdit.email,
                fee: dialogEdit.fee,
                percentage: e.target.value
              })
            }}/>
          </div>
          {
            messageUserEdit != '' ? <div className="w-full text-left text-sm my-[-5px]">{messageUserEdit}</div> : ''
          }

          <div className='w-full grid grid-cols-2 gap-4'>
            <Button onClick={()=> handleUserEdit(dialogEdit.id, dialogEdit.fee, dialogEdit.percentage, setMessageUserEdit, setUsers)}>Salvar</Button>
            <Button onClick={() => {
              setDialogEdit({
                open: false,
                id: '',
                name: '',
                email: '',
                pixelAccess: ''
              })
              setMessageUserEdit('')
            }}>Fechar</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={dialogTrash.open}>
        <DialogContent className="data-[state=open]:max-w-[400px] rounded-xl max-h-[80vh] overflow-auto">
          <DialogTitle className='text-primary text-lg font-semibold'>Apagar usuário</DialogTitle>

          <div className='flex-col w-full'>
            <Label className={'mb-2'}>Nome do usuário</Label>
            <Input value={dialogTrash.name} defaultValue={dialogTrash.name} disabled />
          </div>

          <div className='flex-col w-full'>
            <Label className={'mb-2'}>Email do usuário</Label>
            <Input value={dialogTrash.email} defaultValue={dialogTrash.email} disabled />
          </div>

          {
            messageUserTrash != '' ? <div className="w-full text-left text-sm my-[-5px]">{messageUserTrash}</div> : ''
          }

          <div className='w-full grid grid-cols-2 gap-4'>
            <Button onClick={() => handleUserDelete(dialogTrash.id, setMessageUserTrash, setUsers)}>Apagar</Button>
            <Button onClick={() => {
              setDialogTrash({
                open: false,
                id: '',
                name: '',
                email: ''
              })
              setMessageUserTrash('')
            }}>Fechar</Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg text-primary">{message}</h2>
            <p className="font-medium text-sm text-foreground mt-1">Acompanhe todos os seus usuários cadastrados.</p>
          </div>
        </div>
        <Table className={'mt-5'}>
          <TableHeader>
            <TableRow className={'bg-muted/20 h-12 hover:bg-muted/20'}>
              <TableHead className={'font-semibold pl-5 rounded-tl-lg'}>#</TableHead>
              <TableHead className='font-semibold'>ID</TableHead>
              <TableHead className='font-semibold'>Nome</TableHead>
              <TableHead className='font-semibold'>Email</TableHead>
              <TableHead className='font-semibold'>Taxa</TableHead>
              <TableHead className='font-semibold'>Porcentagem</TableHead>
              <TableHead className='font-semibold'>Criado em</TableHead>
              <TableHead className="font-semibold text-right rounded-tr-lg pr-5">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index} className={'h-12'}>
                <TableCell className="font-normal pl-5">{index + 1}</TableCell>
                <TableCell className="font-normal">{user.id}</TableCell>
                <TableCell className="font-normal">{user.name}</TableCell>
                <TableCell className="font-normal">{user.email}</TableCell>
                <TableCell className="font-normal text-center">{handleFormatRealValue(user.fee)}</TableCell>
                <TableCell className="font-normal text-center">{user.percentage}%</TableCell>
                <TableCell className="font-normal">{formatDate(user.createdAt)}</TableCell>
                <TableCell className="font-normal text-right pr-5">
                  <Button className={'ml-2.5'} onClick={() => {
                    setDialogTrash({
                      open: true,
                      id: user.id,
                      name: user.name,
                      email: user.email
                    })
                    setMessageUserTrash('')
                  }}>
                    <Trash />
                  </Button>
                  <Button className={'ml-2.5'} onClick={() => {
                    setDialogEdit({
                      open: true,
                      id: user.id,
                      name: user.name,
                      email: user.email,
                      fee: user.fee,
                      percentage: user.percentage
                    })
                    setMessageUserEdit('')
                  }}>
                    <Edit />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Layout>
  )
}