import { urlBase } from "@/functions/urlBase"
import { handleGetAuthorization } from "@/functions/handleGetAuthorization"

export async function handleBotDelete(id, setMessage, setBots) {

  // Capturando o token
  const authorization = handleGetAuthorization()

  setMessage('Apagando...')

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}bot/delete/${id}`, {
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
    setBots(data.bots)
    return true

  }
}