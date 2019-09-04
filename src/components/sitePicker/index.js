import React from 'react';
import './sitePicker.css'
import Sites from '../sites/index'


class ImageViewer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ""
        }
    }

    onBlur = (event) => {
        console.log("yo what up we blurrin")
        let url = event.target.value
        this.setState({url:url})
    }


    render = () => {
        return (
            <div className="config">
                <input type="text" onBlur={this.onBlur} defaultValue="https://s3.amazonaws.com/assets.scrippsdigital.com/dca-brand-assets/KATC/Fire%20TV/KATC_FireTV_Background_Image_1920x1080.png" />
                <div>
                    {this.state.url}
                </div>
                <div className="imagePreview">
                    <img src={this.state.url}/>
                </div>
            </div>
        )
    }
}

class SitePicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            site: null,
            sites: ['wcpo','kgtv']
        }
    }

    componentDidMount = () => {
        
        this.setState({sites:Sites.getSites()})
        this.setState({site:this.props.site})
        //this.props.setSite()
    } 

    onChange = (optionSelected) => {
        console.log("changed to " + optionSelected.target.value)
        this.props.setSite(optionSelected.target.value)
        this.setState({site:optionSelected.target.value})
    }

    render = () => {
        return (
            <div>
                <select onChange={this.onChange} value={this.props.site}>
                    {this.state.sites.map((item,idx) => {
                        return (
                            <option key={idx} val={item}>{item}</option>
                        )
                    })
                    }
                </select>
            </div>
        )
    }
}

export default SitePicker;