import React from 'react';
import ReactDOM from 'react-dom';
import CriarObra from './pages/CriarObra';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={CriarObra} path="/criar" />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
