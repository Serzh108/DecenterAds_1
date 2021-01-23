import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Page1} />
        <Route path="/2" exact component={Page2} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
