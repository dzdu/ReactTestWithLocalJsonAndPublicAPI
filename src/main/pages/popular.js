import React, {Component} from 'react'
import '../../App.css'
import Emoji from '../emoji'
import {withRouter, Link } from 'react-router-dom'
import Footer from '../footer'
import $ from 'jquery'

class Popular extends Component{
    constructor(props){
        super(props)
        this.state = {}
       
       
       
        this.PopularMovies("")
    }

    PopularMovies(){ 
        var  api_key = "api_key=b375cb96718be93954abeb974e86312e";
        const urlString= "https://api.themoviedb.org/3/discover/movie?" + api_key + "&sort_by=popularity.desc&include_adult=true&include_video=false&page=1"
        
        $.ajax({
            url: urlString,
            success: (PopularMoviesResults) =>{
              // console.log('Fetched data ;)');
               const results = PopularMoviesResults.results
               //console.log(results[0])


                var PopularMoviesRows = []
                results.forEach((PopularMovies) =>{
                    PopularMovies.poster_url = "https://image.tmdb.org/t/p/w300" + PopularMovies.poster_path
                   // console.log(searchedmovie.poster_url)
                    const url = "https://www.themoviedb.org/movie/" + PopularMovies.id
                    PopularMoviesRows.push(
                       <div key={PopularMovies.id} className="Movies" /* style=
                       {
                         {backgroundImage: `url(${searchedmovie.poster_url})`}
                         
                         }>  */ >
                       <br/>
                       <img src={PopularMovies.poster_url} alt="poster" className="poster" height="400px"/>
                       <p className="MovieTitle">{PopularMovies.title}</p> 
                       <p className="MovieDescription">{PopularMovies.overview}</p>
                       <a href={url} 
                       target="_blank" rel="noopener noreferrer" className="seemorelink2">
                            Se mer <Emoji symbol="🍿"/>
                            </a>
                       <br/>
                       <br/></div>
                    )
                })

               this.setState({rows:PopularMoviesRows})

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
                <h1 className="Titel"> Popular <Emoji symbol="🤩"/></h1>
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

export default withRouter(Popular)