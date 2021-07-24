import React from 'react';
import arr from './pages';
import {Switch, Redirect, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        {
          arr.map((page, id) =>(
            <Route key={id} path={page.link}>
              {page.component}
            </Route>
          ))
        }
        
        <Redirect to="/main"/>
      </Switch>
      
    </div>
  );
}

export default App;
