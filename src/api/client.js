import axios from 'axios';

export default axios.create({
    baseURL: 'https://my-json-server.typicode.com/tdmichaelis/typicode/',
    params: {
        part: 'snippet',
        maxResults: 25,
    }
})