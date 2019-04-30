
import axios from "axios";
import WebServiceProperties from '../constants/web-service-properties';

class Http {

    static hostname = WebServiceProperties.hostname;

    static post = (entity, body) => {
        return axios.post(this.buildUrl(entity), body);
    }

    static get = (entity, params) => {
        return axios.get(this.buildUrl(entity), params);
    }

    static put = (entity, id, body) => {
        return axios.put(this.buildUrl(entity, id), body);
    }

    static delete = (entity, id) => {
        return axios.delete(this.buildUrl(entity, id));
    }

    static buildUrl = (entity, id) => {
        if (id !== undefined) {
            return this.hostname + entity + '/' + id
        }
        return this.hostname + entity;
    }

}

export default Http;