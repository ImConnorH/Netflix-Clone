import axios from 'axios'

// base URL to make requests to the API
// whenever we make a get request, we will concatenate the url to the base URL
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default instance