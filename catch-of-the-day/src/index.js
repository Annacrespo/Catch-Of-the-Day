
import React from 'react';
import ReactDOM from 'react-dom';
import StorePicker from './components/StorePicker';
import './css/style.css';
import App from './components/app';
// import Header from './components/header';
// import Inventory from './components/inventory';
// import Order from './components/order';
// import NotFound from './components/notFound';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={StorePicker} />
          <Route path="/store/:storeId" component={App} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.querySelector('#main'));

