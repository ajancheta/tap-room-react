import React from 'react';
import Splash from './Splash';
import Beer from './Beer';
import NewBeerForm from './NewBeerForm';
import About from './About';
import NewFormControl from './NewFormControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/beer' component={Beer} />
        <Route path='/newform' component={NewFormControl} />
        <Route path='/about' component={About} />   <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;