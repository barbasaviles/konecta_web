import axios from 'axios'
const api = axios.create({
    baseURL: API_ENDPOINT
});
export {api as default};