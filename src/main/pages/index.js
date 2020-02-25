import React, {Component} from 'react'
import '../../App.css'
import jsonFile from '../../assets/favmovies.json'
import Emoji from '../emoji'
//import $ from 'jquery'
import {withRouter, Link } from 'react-router-dom'
import Footer from '../footer'

class Index extends Component{
    

    
  
    constructor(props){
        super(props);
        const movies = jsonFile
        var movieRows = []
        //style={{backgroundImage: poster}}
        //poster = movie.poster_path
        movies.forEach((movie) => {
            var poster = movie.poster_path
             movieRows.push(
             <div key={movie.id} className="Movies" /* style={{backgroundImage: `url(${poster})`}} */ > 
             <img src={poster} alt="poster" className="poster" width="300px" height="450px"/>
             <h1 className="MovieTitle">{movie.title}</h1> 
             <p className="MovieDescription">{movie.overview}</p>
             <a href={movie.see_more} target="_blank" rel="noopener noreferrer" className="seemorelink"> Se mer <Emoji symbol="🍿"/></a>
             <br/></div>)
        });

        this.state= {rows: movieRows}

        
        
    }


    render(){
        
        return(
            <div>
            <div className="Body">
                <a href="#upp" id="down"><button className="DownEmoji" > 
                <Emoji symbol="👇"/>
                    n e r
                    <Emoji symbol="👇"/>
                </button></a> 
                <h3 className="Titel" id="titel">Här kommer lista över filmer som jag gillar</h3>
                {this.state.rows}
                <Link to={'./search'}><div className="searchDiv"><button type="button" className="search" > Sök efter andra filmer  <Emoji symbol="🍿🎬" /></button> </div></Link>
               <a href="#down"><button className="UppEmoji" id="upp"> 
               <Emoji symbol="👆"/>
                u p p 
                <Emoji symbol="👆"/>
               </button></a>
            </div> <br/>
            <Footer/>
            
            </div>
        )
    }
}

export default withRouter(Index);