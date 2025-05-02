import { urlBase } from "./urlBase"
import { handleGetAuthorization } from "./handleGetAuthorization"

export async function handleUserEdit(e, wiinpayApiKey, pixelId, password, newPassword, confirmNewPassword, setMessage) {

  // Limpando o evento padrão do formulário
  e.preventDefault()

  // Capturando o token
  const authorization = handleGetAuthorization()

  // Verificando se o campo de senha está vazio
  if (!password || password.trim() == '') {
    return setMessage('Preencha sua senha atual.')
  }

  if (newPassword != '') {
    // Verificando se a senha está segura o suficiente
    if (!newPassword || newPassword.trim().length < 8) {
      return setMessage('Para sua segurança, a sua nova senha deve conter pelo menos 8 caracteres.')
    }

    // Verificando se a senha está vazia
    if (!confirmNewPassword || confirmNewPassword.trim() == '') {
      return setMessage('Confirme sua nova senha.')
    }

    // Verificando se a senha está vazia
    if (newPassword.trim() != confirmNewPassword.trim()) {
      return setMessage('A confirmação da nova senha está incorreta.')
    }
  }

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}user/edit`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': authorization
    },
    body: JSON.stringify({
      wiinpayApiKey: wiinpayApiKey.trim(),
      pixelId: pixelId.trim(),
      password: password.trim(),
      newPassword: newPassword.trim(),
      confirmNewPassword: confirmNewPassword.trim(),
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

    // Redirecionando o usuário
    return setMessage(data.message)

  }
}