import { urlBase } from "./urlBase"
import { handleGetAuthorization } from "./handleGetAuthorization"

export async function handleTokenList(setToken, setMessage) {

  // Capturando o token
  const authorization = handleGetAuthorization()

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}token/list`, {
    method: 'GET',
    headers: {
      'authorization': authorization
    }
  })

  // Capturando a resposta da api
  const { data, error } = await api.json()

  // Verificando se deu algum erro
  if (error) {
    return setMessage(error)
  }

  // Verificando se deu certo
  if (data) {

    return setToken(data.token)

  }
}