import axios from 'axios';

// axios.defaults.baseURL = 'https://www.nanshig.com/mobile';
var instance = axios.create({
    baseURL: 'http://139.196.121.18:3300'
});

function getData1(url,options={}){
    return instance(url,options);
}
export {
    getData1,
    axios
}