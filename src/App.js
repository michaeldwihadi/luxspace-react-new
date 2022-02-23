import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'assets/css/app.css';
import HomePage from 'pages/HomePage';
import Details from 'pages/Details';
import Cart from 'pages/Cart';
import Congratulations from 'pages/Congratulations';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <HomePage/> */}
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/categories/:idc" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/congratulation" component={Congratulations}/>
          <Route path="/*" component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
