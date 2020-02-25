import React, {Component} from 'react';
import {withRouter, Link } from 'react-router-dom'
import Emoji from "../emoji"
import $ from 'jquery'
import '../../App.css'
import Footer from '../footer'

class Search extends Component{
    
    constructor(props){
        super(props)
        this.state ={}



        this.Search("")
    }
  
      
    Search(searchRes){
        //console.log("search")
        var  api_key = "api_key=b375cb96718be93954abeb974e86312e";
         const urlString = "https://api.themoviedb.org/3/search/movie?" + api_key + "&query=" + searchRes;
         $.ajax({
             url: urlString,
             success: (searchResults) =>{
               // console.log('Fetched data ;)');
                const results = searchResults.results
                //console.log(results[0])
 
 
                 var searchedmovieRows = []
                 results.forEach((searchedmovie) =>{
                     searchedmovie.poster_url = "https://image.tmdb.org/t/p/w300" + searchedmovie.poster_path
                    // console.log(searchedmovie.poster_url)
                     const url = "https://www.themoviedb.org/movie/" + searchedmovie.id
                     searchedmovieRows.push(
                        <div key={searchedmovie.id} className="Movies" /* style=
                        {
                          {backgroundImage: `url(${searchedmovie.poster_url})`}
                          
                          }>  */ >
                        <br/>
                        <img src={searchedmovie.poster_url} alt="poster" className="poster" height="400px"/>
                        <p className="MovieTitle">{searchedmovie.title}</p> 
                        <p className="MovieDescription">{searchedmovie.overview}</p>
                        <a href={url} 
                        target="_blank" rel="noopener noreferrer" className="seemorelink2">
                             Se mer <Emoji symbol="🍿"/>
                             </a>
                        <br/>
                        <br/></div>
                     )
                 })
 
                this.setState({rows:searchedmovieRows})
 
             },
             error: (status, err) =>{
                 console.error("Failed to fetch :c");
             }
         })
     }
     
     searched(event) {
     // console.log(event.target.value)
      const newObj = this
      const searchRes = event.target.value
      newObj.Search(searchRes)
    }
     

    render(){
        return(
            <div>
              <div className="Body">
                <div className="searchDiv">
                    <Link to={'./'}><button className="Homebtn" id="homebtn">  <Emoji symbol="🏡"/></button></Link>
                    <input type="text" className="searchiput" 
                    placeholder="Sök efter andra filmer 🍿🎬" 
                    onChange={this.searched.bind(this)}/>
                    <br/> <br/>
                    {this.state.rows}
                </div>
                  <a href="#homebtn"><button className="UppEmoji" > 
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

export default withRouter(Search)