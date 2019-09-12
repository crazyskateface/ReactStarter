import React from 'react';



const Sites =  {
    ScrippsSiteData : {
        "wmar" : {
            "uhAppId" : "com.abc2news"
        },
        "wkbw" : {
            "uhAppId" : "com.wkbw"
        },
        "wxyz" : {
            "uhAppId" : "com.wxyz"
        },
        "wmyd" : {
            "uhAppId" : "com.tv20detroit"
        },
        "wews" : {
            "uhAppId" : "com.newsnet5"
        },
        "wcpo" : {
            "uhAppId" : "com.wcpo"
        },
        "wptv" : {
            "uhAppId" : "com.wptv"
        },
        "wfts" : {
            "uhAppId" : "com.abcactionnews"
        },
        "kshb" : {
            "uhAppId" : "com.kshb"
        },
        "kjrh" : {
            "uhAppId" : "com.kjrh"
        },
        "knxv" : {
            "uhAppId" : "com.abc15"
        },
        "kmgh" : {
            "uhAppId" : "com.thedenverchannel"
        },
        "wrtv" : {
            "uhAppId" : "com.theindychannel"
        },
        "kgtv" : {
            "uhAppId" : "com.10news"
        },
        "kero" : {
            "uhAppId" : "com.turnto23"
        },
        "kivi" : {
            "uhAppId" : "com.kivitv"
        },
        "wftx" : {
            "uhAppId" : "com.fox4now"
        },
        "wgba" : {
            "uhAppId" : "com.nbc26"
        },
        "wsym" : {
            "uhAppId" : "com.fox47news"
        },
        "kmtv" : {
            "uhAppId" : "com.kmtv"
        },
        "kgun" : {
            "uhAppId" : "com.kgun9"
        },
        "wtvf" : {
            "uhAppId" : "com.newschannel5"
        },
        "tmj4" : {
            "uhAppId" : "com.tmj4"
        },
        "wtmj" : { 
            "uhAppId" : "com.tmj4"
        },
        "ktnv" : {
            "uhAppId" : "com.ktnv"
        },
        "kxxv" : {
            "uhAppId" : "com.kxxv"
        },
        "wtxl" :{
            "uhAppId" : "com.wtxl"
        }
        ,"kris":{
            "uhAppId" : "com.kristv"
        }
        ,"kztv":{
            "uhAppId" : "com.kztv10"
        }
        ,"kaja":{
            "uhAppId" : "com.telemundocc"
        }
        ,"wlex":{
            "uhAppId" : "com.lex18"
        }
        ,"hky":{
            "uhAppId" : "com.heykentucky"
        }
        ,"koaa":{
            "uhAppId" : "com.koaa"
        }
        ,"katc":{
            "uhAppId" : "com.katc"
        }
        ,"ksby":{
            "uhAppId" : "com.ksby"
        }
        ,"kpax":{
            "uhAppId" : "com.kpax"
        }
        ,"ktvq":{
            "uhAppId" : "com.ktvq"
        }
        ,"kxlf":{
            "uhAppId" : "com.kxlf"
        }
        ,"kbzk":{
            "uhAppId" : "com.kbzk"
        }
        ,"krtv":{
            "uhAppId" : "com.krtv"
        }
        ,"kxlh":{
            "uhAppId" : "com.kxlh"
        }
        ,"ktvh":{
            "uhAppId" : "com.ktvh"
        }
        ,"mtspx":{
            "uhAppId" : "com.montanasports"
        }
        
        },//end ScrippsSiteData
    

    getSites : () => {
        console.log(Sites.ScrippsSiteData)
        return Object.keys(Sites.ScrippsSiteData).sort()
    },

    getAppId : (site) => {
        if (site!=null) {
            return Sites.ScrippsSiteData[site].uhAppId;
        } else {
            return Sites.ScrippsSiteData["wcpo"].uhAppId; //wcpo default? 
        }
    },

    getDomain : (site) => {
        if (site!=null) {
            let domain = ".com"
            let appId = Sites.ScrippsSiteData[site].uhAppId
            if (appId != null) {
                //convert to domain
                let parts = appId.split('.')
                return parts[1] + domain
            }


        }
    }
}

export default Sites