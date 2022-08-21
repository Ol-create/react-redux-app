import { BrowserRouter as Rout,
         Switch,
         Route,
} from "react-router-dom"

import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
    <Rout>
        <Header />
        <Switch>
        <Route path="/" exact component= {ProductListing} />
        <Route path="/product/:productId" exact component= {ProductDetail} />
        <Route>404 Not Found </Route>
        </Switch>
    </Rout>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
