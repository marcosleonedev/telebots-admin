import { urlBase } from "@/functions/urlBase"
import { handleGetAuthorization } from "@/functions/handleGetAuthorization"

export async function handleFlowDelete(id, setMessage, setFlows) {

  // Capturando o token
  const authorization = handleGetAuthorization()

  setMessage('Apagando...')

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}flow/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'authorization': authorization
    }
  })

  // Capturando a resposta da api
  const { data, error } = await api.json()

  // Verificando se deu algum erro
  if (error) {
    setMessage(error)
    return false
  }

  // Verificando se deu certo
  if (data) {
    setMessage(data.message)
    setFlows(data.flows)
    return true

  }
}

export async function handleFlowTransfer(id, email, setMessage, setFlows) {

  // Capturando o token
  const authorization = handleGetAuthorization()

  if(!email || email.trim() == ''){
    return setMessage('Preencha o email de quem você quer transferir o fluxo.')
  }

  setMessage('Transferindo...')

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}flow/transfer-admin/${id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': authorization
    },
    body: JSON.stringify({
      email: email.trim()
    })
  })

  // Capturando a resposta da api
  const { data, error } = await api.json()

  // Verificando se deu algum erro
  if (error) {
    setMessage(error)
    return false
  }

  // Verificando se deu certo
  if (data) {
    setMessage(data.message)
    setFlows(data.flows)
    return true

  }
}