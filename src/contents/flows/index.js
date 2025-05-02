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
import { handleFlowList } from "@/functions/handleFlowList";
import { ArrowRightLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { handleFlowTransfer } from "./functions";

export function FlowsContent() {

  const [message, setMessage] = useState('Carregando...')
  const [dialogTransfer, setDialogTransfer] = useState({
    open: false,
    flowId: '',
    flowName: '',
    email: ''
  })
  const [messageFlowTransfer, setMessageFlowTransfer] = useState('')
  const [flows, setFlows] = useState([])
  const { push } = useRouter()

  useEffect(() => {
    handleFlowList(setMessage, setFlows)
  }, [])

  return (
    <Layout page={'Meus fluxos'} titulo={'Meus fluxos'}>

      <Dialog open={dialogTransfer.open}>
        <DialogContent className="data-[state=open]:max-w-[400px] rounded-xl max-h-[80vh] overflow-auto">
          <DialogTitle className='text-primary text-lg font-semibold'>Transferir fluxo</DialogTitle>

          <div className='flex-col w-full'>
            <Label className={'mb-2'}>Nome do fluxo</Label>
            <Input value={dialogTransfer.flowName} defaultValue={dialogTransfer.flowName} disbled/>
          </div>

          <div className='flex-col w-full'>
            <Label className={'mb-2'}>Para qual email você quer transferir?</Label>
            <Input value={dialogTransfer.email} defaultValue={dialogTransfer.email} onChange={(e)=> setDialogTransfer({
              open: dialogTransfer.open,
              flowId: dialogTransfer.flowId,
              flowName: dialogTransfer.flowName,
              email: e.target.value,
            })}/>
          </div>

          {
            messageFlowTransfer != '' ? <div className="w-full text-left text-sm my-[-5px]">{messageFlowTransfer}</div> : ''
          }

          <div className='w-full grid grid-cols-2 gap-4'>
            <Button onClick={()=> handleFlowTransfer(dialogTransfer.flowId, dialogTransfer.email, setMessageFlowTransfer, setFlows)}>Transferir</Button>
            <Button onClick={() => {
              setDialogTransfer({ open: false, flowId: '', flowName: '', email: '' })
              setMessageFlowTransfer('')
            }}>Fechar</Button>
          </div>
        </DialogContent>
      </Dialog>

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
              <TableHead className='font-semibold'>ID</TableHead>
              <TableHead className='font-semibold'>Email</TableHead>
              <TableHead className='font-semibold'>Nome</TableHead>
              <TableHead className='font-semibold'>Criado em</TableHead>
              <TableHead className="font-semibold text-right rounded-tr-lg pr-5">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {flows.map((flow, index) => (
              <TableRow key={index} className={'h-12 cursor-pointer'}>
                <TableCell className="font-normal pl-5" onClick={()=> push(`/flow?id=${flow.id}`)}>{index + 1}</TableCell>
                <TableCell className="font-normal" onClick={()=> push(`/flow?id=${flow.id}`)}>{flow.id}</TableCell>
                <TableCell className="font-normal" onClick={()=> push(`/flow?id=${flow.id}`)}>{flow.email}</TableCell>
                <TableCell className="font-normal" onClick={()=> push(`/flow?id=${flow.id}`)}>{flow.name}</TableCell>
                <TableCell className="font-normal" onClick={()=> push(`/flow?id=${flow.id}`)}>{formatDate(flow.createdAt)}</TableCell>
                <TableCell className="font-normal text-right pr-5">
                  <Button className={'ml-2.5'} onClick={()=> setDialogTransfer({ open: true, flowId: flow.id, flowName: flow.name, email: '' })}>
                    <ArrowRightLeft/>
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