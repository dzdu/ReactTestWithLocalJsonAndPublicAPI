import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
//import Content from './main/body'

import Header from './main/header'
import Search from './main/pages/search'
import Index from './main/pages/index'
import Popular from './main/pages/popular'
import TopRated from './main/pages/toprated'
import Comming from './main/pages/comming'
import Showstoday from './main/pages/showstoday'
/* import { library } from '@fontawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 */

// library.add(fab, faCheckSquare, faCoffee)
function App() {
  

  return (
    <Router>
    <div className="App">
      <Header />
      <br/><br/>
      <Switch>
        <Route path="/" exact component={withRouter(Index)} />
        <Route path="/search"  component={withRouter(Search)} />
        <Route path="/popular" component={withRouter(Popular)}/>
        <Route path="/toprated" component ={withRouter(TopRated)}/>
        <Route path="/comming" component ={withRouter(Comming)}/>
        <Route path="/showstoday" component = {withRouter(Showstoday)}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
