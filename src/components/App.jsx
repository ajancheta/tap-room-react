import React from 'react';
import Splash from './Splash';
import BeerList from './BeerList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/beerlist' component={BeerList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;