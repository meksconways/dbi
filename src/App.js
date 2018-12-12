import React, { Component } from 'react';


import LoginPage from "./Pages/Components/LoginPage";
import RegisterPage from "./Pages/Components/RegisterPage";
import {
    Redirect,
    BrowserRouter,
    Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>

          <BrowserRouter>
              <div>
                  <Route exact path={'/login'} component={LoginPage}/>
                  <Route exact path={'/register'} component={RegisterPage}/>
              </div>

          </BrowserRouter>


      </div>
    );
  }
}

export default App;
