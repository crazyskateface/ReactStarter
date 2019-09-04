import React from 'react';
import Sites from '../sites/index'
import SitePicker from '../sitePicker/index'
import Feeds from '../../services/feeds'
import './myApp.css'


class MyApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "",
            site: "wcpo",
            feed: []
        }
        this.feeds = new Feeds();
    }

    onBlur = (event) => {
        console.log("yo what up we blurrin")
        let url = event.target.value
        this.setState({url:url})
        this.getFeed(url)
    }

    setSite = (site) => {
        this.setState({site:site})
    }

    getFeed = (url) => {
        let that = this
        this.feeds.getFeed(
            {
                url:url,
                site:this.state.site
            })
            .then(function(data){
                if (data != null && data.data != null && data.data.items != null && data.data.items.length > 0) {
                    that.setState({feed:data.data.items})
                }
                
            })
    }

    render = () => {
        
        return (
            <div className="config">
                <SitePicker site={this.state.site} setSite={this.setSite}></SitePicker>
                <input type="text" onBlur={this.onBlur} defaultValue="https://feedmachine.ewscloud.com/fm/api/v1/video/search/" />
                <div>
                    {this.state.url}
                </div>
                
                <div className="feedPreview">
                    <div className="feed">
                    <ol>
                    {this.state.feed.map((item,idx) => {
                        return (
                            
                            <li >Title: {item.title} stream_url: {item.stream_url}</li>
                            )
                    })
                    }</ol>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default MyApp;