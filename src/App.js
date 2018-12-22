import React, {Component} from 'react';


import LoginPage from "./Pages/Login/LoginPage";
import ManagerHomePage from "./Pages/Manager/ManagerHomePage";
import {fetchCheckToken} from "./Networking/ApiFetchService";
import UserHomePage from "./Pages/User/UserHomePage";
import {BrowserRouter, Route} from "react-router-dom";
import RegisterPage from "./Pages/User/RegisterPage";
import VerificationCode from "./Pages/Login/VerificationCode";


class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            isAdmin:false,
            login:false
        }

    }


    tokenCheck = () => {

        fetchCheckToken(res =>{

            if ((typeof res).toString() === "undefined") {

                this.setState({})

            }else{

                if (res.status >= 400 && res.status <= 500){


                    this.setState({isAdmin: false});
                    this.setState({login:false});


                } else if (res.status >=200 && res.status < 300) {


                    let isAdmin = res.data.data.is_admin;

                    if (isAdmin === 1){


                        localStorage.setItem('is_admin',1);
                        this.setState({isAdmin: true});
                        this.setState({login:true});


                    }else{
                        localStorage.setItem('is_admin',0);
                        this.setState({isAdmin: false});
                        this.setState({login:true});

                    }





                }



            }



        });




    };

    componentWillMount() {

        let token = localStorage.getItem('token');
        let isAdmin = localStorage.getItem('is_admin');

        console.log(token === null);

        if(token === null){



            this.setState({isAdmin: false});
            this.setState({login:false});



        }else{


            this.tokenCheck();

        }


    }


    render() {
    return (




      <div>

          {this.state.login ?

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
                          </BrowserRouter>}


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
