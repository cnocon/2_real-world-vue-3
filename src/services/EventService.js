// import axios instance
import axios from 'axios'

// create an apiClient constant, which
// holds our singular Axios instance
const apiClient = axios.create({
  // set up a baseURL and some other configurations
  // for Axios to use as it communicates with our server.
  baseURL: 'http://my-json-server.typicode.com/cnocon/json-data',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

// Now, export a method that gets our events,
// using our new Axios apiClient.
export default {
  getEvents() {
    return apiClient.get('/events')
  }
}