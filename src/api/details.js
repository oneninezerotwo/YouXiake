import axios from 'axios';

// axios.defaults.baseURL = 'https://www.nanshig.com/mobile';
var instance = axios.create({
    baseURL: 'http://localhost:3300'
});

function getData1(url,options={}){
    return instance(url,options);
}
export {
    getData1,
    axios
}