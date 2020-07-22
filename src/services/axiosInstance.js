import axios from 'axios'

export const FORM_DATA_ENDPOINT = '/formData.json'

const instance = axios.create({
    baseURL: 'https://voyagechallenge-48926.firebaseio.com/'
})

export default instance