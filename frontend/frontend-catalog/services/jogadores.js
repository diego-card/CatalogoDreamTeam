import axios from 'axios'
const apiUrl = 'https://cdtbackend.fly.dev/cards/jogadores'

const getAll = () => {
    const request = axios.get(apiUrl)
    return request.then(response => response.data)
}

export default { getAll }