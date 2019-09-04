import axios from 'axios';
import https from 'https';
import { inherits } from 'util';
import Sites from '../components/sites/index'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export default class request {
    constructor() {
        this.baseUrl = "";
        this.init()
    }
    init() {
        this.feedInstance = axios.create({
            baseURL: this.baseUrl,
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        })
    }

    getFeed = (params) => {
        if (!params.limit) {
            params.limit = "10"
        }
        var query = "page_size=" + params.limit
        if (params.site){
            var appId = Sites.getDomain(params.site)
            if(appId) params.site = appId
            query += "&site=" + params.site
        }
        if (params.url == null) {
            return Promise.resolve({error:true})
        }
        let url = params.url + '?'+ query

        //call for feed
        return this.feedInstance.get(url)
        .then(function(response) {
            console.log('got the response')
            return response
        })
        .catch(function(error) {
            console.log("encountered an error")
            return error
        })
    }
}