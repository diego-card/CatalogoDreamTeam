import axios from 'axios'
const apiUrl = 'https://restcountries.com/v3.1/all?fields=name,flags,translations'

const getAll = () => {
    const request = axios.get(apiUrl)
    return request.then(response => response.data)
}

export default { getAll }