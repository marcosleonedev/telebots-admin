export async function handleUserLogout(push) {

  // Salvando o token no cookie
  document.cookie = 'token=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'

  // Redirecionando
  return push('/')

}