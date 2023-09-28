import axios from 'axios'
const apiUrl = 'http://localhost:3000/cards/goleiros'

const getAll = () => {
    const request = axios.get(apiUrl)
    return request.then(response => response.data)
}

export default { getAll }