import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import { Splash } from './Splash';
// import { Admin } from './Admin';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Splash} />
        {/* <Route path='/admin' component={Admin} /> */}
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;