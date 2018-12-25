import React, {Component} from 'react';


import LoginPage from "./Pages/Login/LoginPage";
import {fetchCheckToken} from "./Networking/ApiFetchService";
import UserHomePage from "./Pages/User/UserHomePage";
import {BrowserRouter, Route} from "react-router-dom";
import RegisterPage from "./Pages/User/RegisterPage";
import VerificationCode from "./Pages/Login/VerificationCode";
import {Menu} from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";
import UsersPage from "./Pages/Manager/UsersPage";
import DuyurularPage from "./Pages/Manager/DuyurularPage";
import ManagerTopMenu from "./Pages/Manager/ManagerTopMenu";
import ManagerFaqsPage from "./Pages/Manager/ManagerFaqsPage";
import {Grid, Icon, Segment} from "semantic-ui-react";
import ManagerSikayetPage from "./Pages/Manager/ManagerSikayetPage";
import ManagerProfile from "./Pages/Manager/ManagerProfile";
import UserProfile from "./Pages/Manager/UserProfile";
import ManagerGeriBildirimPage from "./Pages/Manager/ManagerGeriBildirimPage";
import ManagerBiyolojikDegerlerPage from "./Pages/Manager/ManagerBiyolojikDegerlerPage";
import ManagerKanDegerleriPage from "./Pages/Manager/ManagerKanDegerleriPage";


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            isAdmin:false,
            isLogin:"0"
        }

    }

    tokenCheck = () => {
        fetchCheckToken(res => {

            if((typeof res.data)==="undefined"){
                this.setState({isAdmin:false});
                this.setState({isLogin:"1"});
                if(window.location.pathname!=="/") window.location.href="/";

            }else{
                if (res.status >= 400 && res.status <= 500){

                    this.setState({isAdmin:false});
                    this.setState({isLogin:"1"});
                    if(window.location.pathname!=="/") window.location.href="/";



                } else if (res.status >=200 && res.status < 300) {

                    this.setState({isAdmin:true});
                    this.setState({isLogin:"2"});

                }
            }



        });
    };

    componentWillMount() {
        this.tokenCheck();
    }

    render() {
    return (
      <div>

          {this.state.isLogin==="2" ?
              <div>

                      {this.state.isAdmin ?
                                  <BrowserRouter>
                                      <div>
                                          <div><ManagerTopMenu/></div>
                                          <div>
                                              <Route exact path={"/"} component={UsersPage}/>
                                              <Route path={"/duyurular"} component={DuyurularPage}/>
                                              <Route path={"/biyolojik-degerler"} component={ManagerBiyolojikDegerlerPage}/>
                                              <Route path={"/kan-degerleri"} component={ManagerKanDegerleriPage}/>
                                              <Route path={"/sss"} component={ManagerFaqsPage}/>
                                              <Route path={"/sikayetler"} component={ManagerSikayetPage}/>
                                              <Route path={"/manager-profile"} component={ManagerProfile}/>
                                              <Route path={"/feedbacks"} component={ManagerGeriBildirimPage}/>
                                              <Route path={"/user/:user_id"} component={UserProfile}/>
                                          </div>
                                      </div>
                                  </BrowserRouter>
                          : <BrowserRouter>
                              <div>
                                  <Route exact path={"/"} component={UserHomePage}/>
                              </div>
                          </BrowserRouter>
                      }
              </div>
              : null

              }


          {this.state.isLogin==="1" ?
              <div>
                  <BrowserRouter>
                      <div>
                          <Route exact path={"/"} component={LoginPage}/>
                          <Route  path={"/register"} component={RegisterPage}/>
                          <Route  path={"/login"} component={LoginPage}/>
                          <Route  path={"/verification/:user_id"} component={VerificationCode}/>

                      </div>
                  </BrowserRouter>
              </div>
              :null}

          {this.state.isLogin==="0" ?
              <div>
                  <Segment basic>
                      <Grid textAlign={"center"} style={{height:"100vh",backgroundColor:"#fafafa"}}>
                          <Grid.Column computer={4} tablet={8} mobile={16}>
                              <h1 style={{marginTop:"30vh",color:"#ccc"}}>
                                  <Icon size={"large"} loading name='spinner' />
                              </h1>
                          </Grid.Column>

                      </Grid>
                  </Segment>
              </div>

              : null}
      </div>
    );
  }
}



export default App;
