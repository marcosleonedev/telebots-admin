import { urlBase } from "./urlBase"
import { handleGetAuthorization } from "./handleGetAuthorization"

export async function handleTokenCreate(e, setToken, setMessage) {

  // Limpando o evento padrão do formulário
  e.preventDefault()

  // Capturando o token
  const authorization = handleGetAuthorization()

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}token/create`, {
    method: 'POST',
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

    setToken(data.token)

    // Redirecionando o usuário
    return setMessage(data.message)

  }
}