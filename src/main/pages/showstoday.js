import React, {Component} from 'react'
import '../../App.css'
import Emoji from '../emoji'
import {withRouter, Link } from 'react-router-dom'
import Footer from '../footer'
import $ from 'jquery'

class Showstoday extends Component{
    constructor(props){
        super(props)
        this.state = {}
       
       
       
        this.Showstoday("")
    }

    Showstoday(){ 
        var  api_key = "api_key=b375cb96718be93954abeb974e86312e";
        var release_date = '&release_date.lte=2020-02-15'
        const urlString= "https://api.themoviedb.org/3/discover/movie?" + api_key + 
        "&region=se&sort_by=release_date.desc&include_adult=false&include_video=false&page=1" + release_date
        
        $.ajax({
            url: urlString,
            success: (ShowstodayResults) =>{
              // console.log('Fetched data ;)');
               const results = ShowstodayResults.results
               //console.log(results[0])


                var ShowstodayRows = []
                results.forEach((Showstoday) =>{
                    Showstoday.poster_url = "https://image.tmdb.org/t/p/w300" + Showstoday.poster_path
                   // console.log(searchedmovie.poster_url)
                    const url = "https://www.themoviedb.org/movie/" + Showstoday.id
                    ShowstodayRows.push(
                       <div key={Showstoday.id} className="Movies" /* style=
                       {
                         {backgroundImage: `url(${searchedmovie.poster_url})`}
                         
                         }>  */ >
                       <br/>
                       <img src={Showstoday.poster_url} alt="poster" className="poster" height="400px"/>
                       <p className="MovieTitle">{Showstoday.title}</p> 
                       <p className="MovieDescription">{Showstoday.overview}</p>
                       <a href={url} 
                       target="_blank" rel="noopener noreferrer" className="seemorelink2">
                            Se mer <Emoji symbol="🍿"/>
                            </a>
                       <br/>
                       <br/></div>
                    )
                })

               this.setState({rows:ShowstodayRows})

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
                <h1 className="Titel"> Visas Idag <Emoji symbol="🎦"/></h1>
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

export default withRouter(Showstoday)