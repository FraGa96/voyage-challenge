import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://voyagechallenge-48926.firebaseio.com/'
})

export default instance