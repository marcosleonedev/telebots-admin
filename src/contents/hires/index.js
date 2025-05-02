import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CircleCheckBig } from "lucide-react";
import { Input } from "@/components/ui/input";
import { handleGeneratePayment } from "./functions";
import { useState } from "react";

export function HiresContent() {

  const [planoBasico, setPlanoBasico] = useState('Contratar')
  const [planoPadrao, setPlanoPadrao] = useState('Contratar')
  const [planoPremium, setPlanoPremium] = useState('Contratar')

  return (
    <Layout page={'Contratações'} titulo={'Contratações'}>
      <div className="w-full">

        <h2 className="font-semibold text-lg text-primary">Contratações 😃</h2>
        <p className="font-medium text-sm text-foreground mt-1">Acompanhe todos os seus planos ativos e inativos e contrate um novo caso necessário.</p>
        <Separator className={'mt-3'} />

        <div className="w-full grid grid-cols-3 gap-4 mt-5 max-[1300px]:grid-cols-2 max-[960px]:grid-cols-1">
          <div className="border p-4 rounded-xl">
            <h1 className="text-primary font-bold text-xl text-left">Plano básico</h1>
            <h5 className="font-light text-sm mt-2.5 mb-2.5">De <span className="line-through text-base font-bold">R$ 149,90</span> por apenas <span className="font-bold text-base">R$ 99,90</span></h5>
            <div className="text-sm mt-4">
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>30 dias de acesso</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Até 1 bot cadastrado</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Até 1 fluxo personalizado</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Relatório completo</p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className={'mt-2.5'} onClick={()=> handleGeneratePayment('basico', setPlanoBasico)}>{planoBasico}</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[340px]">
                <DialogHeader>
                  <DialogTitle>Realizar pagamento</DialogTitle>
                </DialogHeader>
                <div className="w-full">
                  <img className="rounded-lg mt-2" src="data:image/jpeg;base64,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" />
                  <Input className={'mt-2.5'} disabled defaultValue={'00020126360014br.gov.bcb.pix0114+5561991663171520400005303986540599.905802BR5911LEMA36486856009Sao Paulo62250521mpqrinter1061159156426304B29E'}/>
                </div>
                <DialogFooter>
                  <Button type="submit">Copiar código</Button>
                  <Button type="submit">Já paguei</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="bg-primary/20 border border-primary p-4 rounded-xl">
            <h1 className="text-primary font-bold text-xl text-left">Plano recomendado</h1>
            <h5 className="font-light text-sm mt-2.5 mb-2.5">De <span className="line-through text-base font-bold">R$ 249,90</span> por apenas <span className="font-bold text-base">R$ 199,90</span></h5>
            <div className="text-sm mt-4">
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>30 dias de acesso</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Até 5 bots cadastrados</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Até 5 fluxos personalizados</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Relatório completo</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Redirecionador inteligente de bots</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Selecionar qual bot usa qual fluxo</p>
              </div>
            </div>
            <Button className={'mt-2.5'}>Contratar</Button>
          </div>

          <div className="border p-4 rounded-xl">
            <h1 className="text-primary font-bold text-xl text-left">Plano premium</h1>
            <h5 className="font-light text-sm mt-2.5 mb-2.5">De <span className="line-through text-base font-bold">R$ 299,90</span> por apenas <span className="font-bold text-base">R$ 249,90</span></h5>
            <div className="text-sm mt-4">
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>30 dias de acesso</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Até 10 bots cadastrados</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Até 10 fluxos personalizados</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Relatório completo</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Redirecionador inteligente de bots</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Selecionar qual bot usa qual fluxo</p>
              </div>
              <div className="flex items-center mb-1.5">
                <CircleCheckBig className="text-primary w-4 h-4 min-w-4 min-h-4 mr-2" />
                <p>Enviar mensagem para todos que passaram pelo bot</p>
              </div>
            </div>
            <Button className={'mt-2.5'}>Contratar</Button>
          </div>

        </div>

      </div>
    </Layout>
  )
}