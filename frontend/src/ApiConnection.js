import axios from 'axios';
export default class ApiConnection
{
    constructor(){
        this.get();
    }
    get(){
        axios.get('http://127.0.0.1:8000/api/products/')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }
}