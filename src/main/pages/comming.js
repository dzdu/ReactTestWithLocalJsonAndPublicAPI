import React, {Component} from 'react'
import '../../App.css'
import Emoji from '../emoji'
import {withRouter, Link } from 'react-router-dom'
import Footer from '../footer'
import $ from 'jquery'

class Comming extends Component{
    constructor(props){
        super(props)
        this.state = {}
       
       
       
        this.Comming("")
    }

    Comming(){ 
        var  api_key = "api_key=b375cb96718be93954abeb974e86312e";
        const urlString= "https://api.themoviedb.org/3/discover/movie?" + api_key + 
        "&language=en-US&region=se&sort_by=primary_release_date.asc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2020-04-01"
        
        $.ajax({
            url: urlString,
            success: (CommingResults) =>{
              // console.log('Fetched data ;)');
               const results = CommingResults.results
               //console.log(results[0])


                var CommingRows = []
                results.forEach((Comming) =>{
                    Comming.poster_url = "https://image.tmdb.org/t/p/w300" + Comming.poster_path
                   // console.log(searchedmovie.poster_url)
                    const url = "https://www.themoviedb.org/movie/" + Comming.id
                    CommingRows.push(
                       <div key={Comming.id} className="Movies" /* style=
                       {
                         {backgroundImage: `url(${searchedmovie.poster_url})`}
                         
                         }>  */ >
                       <br/>
                       <img src={Comming.poster_url} alt="poster" className="poster" height="400px"/>
                       <p className="MovieTitle">{Comming.title}</p> 
                       <p className="MovieDescription">{Comming.overview}</p>
                       <a href={url} 
                       target="_blank" rel="noopener noreferrer" className="seemorelink2">
                            Se mer <Emoji symbol="🍿"/>
                            </a>
                       <br/>
                       <br/></div>
                    )
                })

               this.setState({rows:CommingRows})

            },
            error: (status, err) =>{
                console.error("Failed to fetch :c");
            }
        })
    }

    render(){
        return(
            <div>
                <div className="Body"><br/>
                <div><Link to={'./'}><button className="Homebtn" id="homebtn" style={{margin: '10px'}}>  <Emoji symbol="🏡"/></button></Link>
                <h1 className="Titel"> Kommande <Emoji symbol="🕝"/></h1>
                </div>
                <br/>
                {this.state.rows}
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

export default withRouter(Comming)