import axios from 'axios'
// const apiUrl = 'https://catalogodt.fly.dev/cards/jogadores'
const apiUrl = 'http://localhost:3000/cards/jogadores'

const getAll = () => {
    const request = axios.get(apiUrl)
    return request.then(response => response.data)
}

export default { getAll }