import { urlBase } from "./urlBase"
import { handleGetAuthorization } from "./handleGetAuthorization"
import { toast } from "sonner"

export async function handleFlowEdit(id, name, nodes, edges) {

  // Capturando o token
  const authorization = handleGetAuthorization()

  toast('Salvando alterações...', { action: { label: "X" }})

  // Fazendo a requisição de login
  const api = await fetch(`${urlBase}flow/edit/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': authorization
    },
    body: JSON.stringify({
      name: name.trim(), 
      nodes: nodes, 
      edges: edges,
    })
  })

  // Capturando a resposta da api
  const { data, error } = await api.json()

  // Verificando se deu algum erro
  if (error) {
    toast(error, { action: { label: "X" }})
    return false
  }

  // Verificando se deu certo
  if (data) {
    toast('Suas alterações foram salvas com sucesso.', { action: { label: "X" }})
    return true

  }
}