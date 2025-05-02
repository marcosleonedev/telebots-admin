import { urlBase } from "./urlBase"
import { handleGetAuthorization } from "./handleGetAuthorization"

export async function handleToolsList(setTools) {

    // Capturando o token
    const authorization = handleGetAuthorization()

    // Fazendo a requisição de login
    const api = await fetch(`${urlBase}tool/list`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': authorization
        }
    })

    // Capturando a resposta da api
    const { data, error } = await api.json()

    // Verificando se deu algum erro
    if (error) {
        return window.alert('Deu ruim')
    }

    // Verificando se deu certo
    if (data) {

        // Redirecionando o usuário
        return setTools(data.tools)

    }
}