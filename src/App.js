import { BrowserRouter as Rout,
         Routes,
         Route,
} from "react-router-dom"

import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
    <Rout>
        <Header />
        <Routes>
        <Route path="/" exact component= {ProductListing} />
        <Route path="/product/:productId" exact component= {ProductDetail} />
        <Route>404 Not Found </Route>
        </Routes>
    </Rout>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
