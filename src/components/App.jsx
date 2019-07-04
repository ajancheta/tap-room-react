import React from 'react';
import Navbar from './Navbar';
import Splash from './Splash';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;