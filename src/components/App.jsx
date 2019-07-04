import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';

import Error404 from './Error404';

function App() {
  return(
    <div>
      <Navbar/>
      <Switch>
        
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;