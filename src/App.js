import React, {Component} from 'react';


import LoginPage from "./Pages/Login/LoginPage";
import ManagerHomePage from "./Pages/Manager/ManagerHomePage";
import {fetchCheckToken} from "./Networking/ApiFetchService";
import UserHomePage from "./Pages/User/UserHomePage";
import {BrowserRouter, Route} from "react-router-dom";
import RegisterPage from "./Pages/User/RegisterPage";
import VerificationCode from "./Pages/Login/VerificationCode";
import {Menu} from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";


class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            isAdmin:false,
            isLogin:false
        }

    }


    tokenCheck = () => {

        fetchCheckToken(res => {

            if (res.status >= 400 && res.status < 500){

                this.setState({isAdmin:false});
                this.setState({isLogin:false});


            } else if (res.status >=200 && res.status < 300) {

                this.setState({isAdmin:true});
                this.setState({isLogin:true});

            }

        });


    };

    componentWillMount() {

        this.tokenCheck();

    }


    render() {
    return (

      <div>

          {this.state.isLogin ?

              <div>

                      {this.state.isAdmin ?
                          <BrowserRouter>
                              <div>
                                  <Route exact path={"/"} component={ManagerHomePage}/>
                              </div>
                          </BrowserRouter>


                          : <BrowserRouter>
                              <div>
                                  <Route exact path={"/"} component={UserHomePage}/>
                              </div>
                          </BrowserRouter>
                      }


              </div>


              :
                <div>
                    <BrowserRouter>
                        <div>
                            <Route exact path={"/"} component={LoginPage}/>
                            <Route exact path={"/register"} component={RegisterPage}/>
                            <Route exact path={"/login"} component={LoginPage}/>
                            <Route exact path={"/verification/:user_id"} component={VerificationCode}/>

                        </div>
                    </BrowserRouter>
                </div>

              }

      </div>
    );
  }
}



export default App;
