import React, {Component} from 'react'
import logo from '../wattermark.png'
import '../App.css';
import Emoji from './emoji'
import {withRouter, Link } from 'react-router-dom'

class Header extends Component{
    render(){
        return(<div className="App-header">
            <header >
                <img src={logo} className="App-logo" alt="logo" width=''/>
                <h1 className="header_text">Dzmitry's film bibliotek</h1>
            </header>
              <nav>
            
                <Link to={'/popular'}>
                <button className="MenuEmoji" > 
               <Emoji symbol="🌟"/>
                Populära
                <Emoji symbol="🌟"/>
               </button></Link>
               
               <Link to={'/toprated'}>
                <button className="MenuEmoji" > 
               <Emoji symbol="🤴"/>
                Top betyg
                <Emoji symbol="🤴"/>
               </button></Link>
               
               <Link to={'/comming'}>
                <button className="MenuEmoji" > 
               <Emoji symbol="🕔"/>
                Kommande
                <Emoji symbol="🕔"/>
               </button></Link>

               <Link to={'/showstoday'}>
                <button className="MenuEmoji" > 
                <Emoji symbol="🎦"/>
                Visas nu
                <Emoji symbol="🎦"/>
               </button></Link>
               </nav>
               </div>
        )
    }
}

export default withRouter(Header)