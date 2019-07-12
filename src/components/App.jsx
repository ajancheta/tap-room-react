import React from 'react';
import Splash from './Splash';
import BeerList from './BeerList';
import NewBeerForm from './NewBeerForm';
import About from './About';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onTap: [
        {
          name: 'Cubensis',
          style: 'Cold IPA',
          description: 'Crisp, light, refreshing, brilliantly effervescent with a floral, noble hop aroma.',
          ABV: '6.7'
        },
        {
          name: 'Psilocybin Sour',
          style: 'Flanders Red Ale',
          description: 'Double-decocted, judiciously-hopped with old-World favorites. Our unique celebratory beer for our 2 year birthday.',
          ABV: '6.7'
        },
        {
          name: 'Gravity Drop',
          style: 'Baltic Porter',
          description: 'Intense chocolate, fig and caramel aroma that drinks warmly and falls off the deep end.',
          ABV: '9.2'
        },
        {
          name: 'Amanita muscaria',
          style: 'Hazy IPA',
          description: 'Bucketloads of juicy Mosaic hops between Amarillo and grapefruit forward Simcoe.',
          ABV: '6.5'
        },
        {
          name: 'Foragers True Gold',
          style: 'KÖLSCH Style',
          description: 'Spritzy ale brewed with a touch of wheat, fermented cool to exhibit a crisp mouthfeel and a slightly tart finish.',
          ABV: '4.7'
        },
        {
          name: 'Shiitake Stout',
          style: 'A Not-So-Rainy Day Stout',
          description: 'Rich, deep and dark but you will be surprised by how easy it is on the palate with notes of caramel, chocolate and roasted coffee driven by wonderfully nuanced blend of savory, earthy and smoky.',
          ABV: '7.7'
        },
        {
          name: 'Chantrelle in the Pocket',
          style: 'New School IPA',
          description: 'A hazy and pale IPA with velvety undertones. Juicy, woodsy and making you feel one with the network of mycelium under us!',
          ABV: '6.8'
        }
      ]
    };
    this.handleAddingNewBeer = this.handleAddingNewBeer.bind(this);
  }

  handleAddingNewBeer(newBeer) {
    var newOnTap = this.state.onTap.slice();
    newOnTap.unshift(newBeer);
    this.setState({onTap: newOnTap});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route
            path="/beer"
            render={() => <BeerList beerList={this.state.onTap} />}
          />
          <Route
            exact
            path="/admin"
            render={() => (
              <NewBeerForm onNewBeerAddition={this.handleAddingNewBeer} />
            )}
          />
          <Route path='/about' component={About} />   <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;