import { urlBase } from "./urlBase"
import { setCookie } from "./setCookie"
import { jwtDecode } from "jwt-decode"

export async function handleUserLogin(e, email, password, setMessage, router) {

  // Limpando o evento padrão do formulário
  e.preventDefault()

  // Verificando se o email está vazio
  if (email.trim() == '') {
    return setMessage('Preencha seu email.')
  }

  // Verificando se a senha está vazia
  if (password.trim() == '') {
    return setMessage('Preencha sua senha.')
  }

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}user/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.trim(),
      password: password.trim()
    })
  })

  // Capturando a resposta da api
  const { data, error } = await api.json()

  // Verificando se deu algum erro
  if (error) {
    return setMessage(error.message)
  }

  // Verificando se deu certo
  if (data) {

    // Capturando os dados do usuário
    const { token } = data.user

    setCookie('authorization', token, 1)

    // Redirecionando o usuário
    return router.push('/ferramentas')

  }
}