import { urlBase } from "./urlBase"
import { handleGetAuthorization } from "./handleGetAuthorization"

export async function handleFlowList(setMessage, setFlows) {

  // Capturando o token
  const authorization = handleGetAuthorization()

  setMessage('Carregando...')

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}flow/list-all`, {
    method: 'GET',
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
    setMessage(`Você possui ${data.flows.length} fluxos 😃`)
    setFlows(data.flows)
    return true
  }
}