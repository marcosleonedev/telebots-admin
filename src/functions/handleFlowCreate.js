import { urlBase } from "./urlBase"
import { handleGetAuthorization } from "./handleGetAuthorization"

export async function handleFlowCreate(flowName, setMessage, setFlows, setMessage2) {

  // Capturando o token
  const authorization = handleGetAuthorization()

  // Verificando se o campo de senha está vazio
  if (!flowName || flowName.trim() == '') {
    return setMessage('Preencha o nome do seu fluxo.')
  }

  setMessage('Carregando...')

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}flow/create`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': authorization
    },
    body: JSON.stringify({
      name: flowName.trim(),
    })
  })

  // Capturando a resposta da api
  const { data, error } = await api.json()

  // Verificando se deu algum erro
  if (error) {
    return setMessage(error)
  }

  // Verificando se deu certo
  if (data) {
    setMessage(data.message)
    setFlows(data.flows)
    setMessage2(`Você possui ${data.flows.length} fluxos 😃`)
    return true

  }
}