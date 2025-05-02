export function handleGetAuthorization() {

  // Redirecionando
  return 'Bearer ' + document.cookie.split('token=')[1]

}