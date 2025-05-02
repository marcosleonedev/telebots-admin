import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatDate } from "@/functions/formatDate";
import { handleFlowCreate } from "@/functions/handleFlowCreate";
import { handleFlowList } from "@/functions/handleFlowList";
import { ArrowRightLeft, Ellipsis, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/router";
import { handleBotList } from "@/functions/handleBotList";
import { handleBotCreate } from "@/functions/handleBotCreate";
import { handleBotDelete } from "./functions";

export function BotsContent() {

  const [message, setMessage] = useState('Carregando...')
  const [dialog, setDialog] = useState(false)
  const [usernameBot, setUsernameBot] = useState('')
  const [tokenBot, setTokenBot] = useState('')
  const [flowBot, setFlowBot] = useState('')
  const [messageBotCreate, setMessageBotCreate] = useState('')
  const [bots, setBots] = useState([])
  const [messageBotDelete, setMessageBotDelete] = useState('')
  const [dialogTrash, setDialogTrash] = useState({
    open: false,
    botUsername: '',
    botId: ''
  })

  useEffect(() => {
    handleBotList(setMessage, setBots)
  }, [])

  return (
    <Layout page={'Meus bots'} titulo={'Meus bots'}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg text-primary">{message}</h2>
            <p className="font-medium text-sm text-foreground mt-1">Acompanhe todos os seus fluxos cadastrados.</p>
          </div>
        </div>
        <Table className={'mt-5'}>
          <TableHeader>
            <TableRow className={'bg-muted/20 h-12 hover:bg-muted/20'}>
              <TableHead className={'font-semibold pl-5 rounded-tl-lg'}>#</TableHead>
              <TableHead className='font-semibold'>Email</TableHead>
              <TableHead className='font-semibold'>Usuário</TableHead>
              <TableHead className='font-semibold'>Token</TableHead>
              <TableHead className='font-semibold'>Fluxo</TableHead>
              <TableHead className='font-semibold'>Criado em</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bots.map((bot, index) => (
              <TableRow key={index} className={'h-12'}>
                <TableCell className="font-normal pl-5">{index + 1}</TableCell>
                <TableCell className="font-normal">{bot.email}</TableCell>
                <TableCell className="font-normal">{bot.username}</TableCell>
                <TableCell className="font-normal">{bot.token}</TableCell>
                <TableCell className="font-normal">{bot.flow}</TableCell>
                <TableCell className="font-normal">{formatDate(bot.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Layout>
  )
}