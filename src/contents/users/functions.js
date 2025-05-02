import { urlBase } from "@/functions/urlBase"
import { handleGetAuthorization } from "@/functions/handleGetAuthorization"

export async function handleUserList(setMessage, setUsers) {

  // Capturando o token
  const authorization = handleGetAuthorization()

  setMessage('Carregando...')

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}user/list-all`, {
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
    setMessage(`Você possui ${data.users.length} usuários 😃`)
    setUsers(data.users)
    return true
  }
}

export async function handleUserRegister(name, surname, email, password, confirmPassword, setMessage, setUsers) {

  // Limpando o evento padrão do formulário
  const authorization = handleGetAuthorization()

  // Verificando o nome
  if (name.trim() == '') {
    return setMessage('Preencha seu nome.')
  }

  // Verificando o sobrenome
  if (surname.trim() == '') {
    return setMessage('Preencha seu sobrenome.')
  }

  // Verificando se o email está vazio
  if (email.trim() == '') {
    return setMessage('Preencha seu email.')
  }

  // Verificando se o email é inválido
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) == false) {
    return setMessage('Preencha um email válido.')
  }

  // Verificando se a senha está vazia
  if (password.trim() == '') {
    return setMessage('Preencha sua senha.')
  }

  // Verificando se a senha está segura o suficiente
  if (password.trim().length < 8) {
    return setMessage('Para sua segurança, a sua senha deve conter pelo menos 8 caracteres.')
  }

  // Verificando se a senha está vazia
  if (confirmPassword.trim() == '') {
    return setMessage('Preencha a confirmação da sua senha.')
  }

  // Verificando se a senha é diferente da confirmação dela
  if (password.trim() != confirmPassword.trim()) {
    return setMessage('Confirmação de senha incorreta.')
  }

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}user/register`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': authorization
    },
    body: JSON.stringify({
      name: name.trim(),
      surname: surname.trim(),
      email: email.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim()
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

    setUsers(data.users)

    // Capturando os dados do usuário
    return setMessage(data.message)

  }

}

export async function handleUserDelete(id, setMessage, setUsers) {

  // Limpando o evento padrão do formulário
  const authorization = handleGetAuthorization()

  // Verificando o nome
  if (id.trim() == '') {
    return setMessage('Preencha o ID do usuário.')
  }

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}user/delete/${id}`, {
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
    return setMessage(error.message)
  }

  // Verificando se deu certo
  if (data) {

    setUsers(data.users)

    // Capturando os dados do usuário
    return setMessage(data.message)

  }

}

export async function handleUserEdit(id, pixelAccess, setMessage, setUsers) {

  // Limpando o evento padrão do formulário
  const authorization = handleGetAuthorization()

  // Verificando o nome
  if (id.trim() == '') {
    return setMessage('Preencha o ID do usuário.')
  }

  // Verificando se o campo de senha está vazio
  if (pixelAccess !== true && pixelAccess != false && pixelAccess != 'false' && pixelAccess != 'true') {
    return setMessage('Preencha se o usuário pode ter acesso ao pixel ou não.')
}

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}user/edit-admin/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': authorization
    },
    body: JSON.stringify({
      pixelAccess: pixelAccess
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

    setUsers(data.users)

    // Capturando os dados do usuário
    return setMessage(data.message)

  }

}