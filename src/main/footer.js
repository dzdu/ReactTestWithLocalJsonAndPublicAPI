import React, {Component} from 'react'
import '../App.css'
import logo from '../wattermark.png'

class Footer extends Component{

    render(){
        return(
            <footer className="Footer">
                <div>
                <img src={logo}  alt="logo" width='70px'/>
                <br/>
                Footer info
                </div>
            </footer>
        )
    }
}
export default Footer