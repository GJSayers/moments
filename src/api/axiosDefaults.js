import axios from "axios";

axios.defaults.baseURL = 'https://gemma-moments-drf-api.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredientials = true;