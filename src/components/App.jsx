import React from 'react';
import Splash from './Splash';
import BeerList from './BeerList';
import Admin from './Admin';
import About from './About';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/beerlist' component={BeerList} />
        <Route path='/admin' component={Admin} />     
        <Route path='/about' component={About} />   <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;