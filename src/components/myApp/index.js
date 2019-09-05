import React from 'react';
import Sites from '../sites/index'
import SitePicker from '../sitePicker/index'
import Feeds from '../../services/feeds'
import './myApp.css'


class FeedItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render = () => {
        //console.log(this.props.item)
        let item = this.props.item
        return (
            <React.Fragment>
            <div className="field" key={this.props.index}>
                    <video key={this.props.index +"-"+ item.site} controls poster={item.image_url}>
                    <source src={item.stream_url} type="application/x-mpegURL"/>
                    <source src={item.link} type="video/mp4"/>
                    Your browser does not support the video tag.
                    </video>
                    Title: <a href={item.link}>{item.title}</a>  <br />
                    stream_url: {item.stream_url} <br />
                    Body: {item.body} <br />
                     <br />
                    </div><br /><br /><br /><br />
            </React.Fragment>
        )
    }
}

class Feed extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render = () => {
        return (
            <div className="feed">
                    <div className="FeedItem">
                    {this.props.feed.map((item,idx) => {
                        return (
                            <FeedItem key={idx} item={item} index={idx}></FeedItem>
                        )
                    })
                    }
                    </div>
            </div>
        )
    }
}


class MyApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "",
            site: "wcpo",
            feed: []
        }
        this.feeds = new Feeds();
        this.textInput = React.createRef();
    }

    onClick = (event) => {
        console.log("yo what up we blurrin")
        let url = this.textInput.current.value
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
                    console.log(data.data)
                }
                
            })
    }

    render = () => {
        
        return (
            <div className="config">
                <SitePicker site={this.state.site} setSite={this.setSite}></SitePicker>
                <input ref={this.textInput} type="text" defaultValue="https://feedmachine.ewscloud.com/fm/api/v1/video/search/" />
                <button onClick={this.onClick} >Get Feed</button>
                <div>
                    {this.state.url}
                </div>
                
                <div className="feedPreview">
                    <Feed feed={this.state.feed}></Feed>
                </div>
            </div>
        )
    }
}

export default MyApp;