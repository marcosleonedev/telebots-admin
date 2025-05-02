import { urlBase } from "./urlBase"
import { handleGetAuthorization } from "./handleGetAuthorization"

export async function handleBotCreate(username, token, flowBot, setMessage, setBots, setMessage2) {

  // Capturando o token
  const authorization = handleGetAuthorization()

  // Verificando se o campo de senha está vazio
  if (!username || username.trim() == '') {
    return setMessage('Preencha o usuário do seu bot.')
  }

  // Verificando se o campo de senha está vazio
  if (!token || token.trim() == '') {
    return setMessage('Preencha o token do seu bot.')
  }

  // Verificando se o campo de senha está vazio
  if (!flowBot || flowBot.trim() == '') {
    return setMessage('Preencha o ID do fluxo do seu bot.')
  }

  setMessage('Carregando...')

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}bot/create`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': authorization
    },
    body: JSON.stringify({
      username: username.trim(),
      token: token.trim(),
      flow: flowBot.trim(),
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
    setBots(data.bots)
    setMessage2(`Você possui ${data.bots.length} bots 😃`)
    return true
  }
}