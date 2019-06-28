import axios from 'axios';

// axios.defaults.baseURL = 'https://www.nanshig.com/mobile';
var instance = axios.create({
    baseURL: 'http://localhost:3300'
});

function getData(url,options={}){
    return instance(url,options);
}
function postData(url,options={}){
    return instance.post(url,options);
}
function deleteData(url,options={}){
    return instance.delete(url,options);
}
function putData(url,options={}){
    return instance.put(url,options);
}

export {
    getData,
    axios,
    postData,
    putData,
    deleteData
}