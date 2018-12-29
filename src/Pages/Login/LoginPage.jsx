import React, {Component} from 'react'
import {Button, Card, Divider, Form, Grid, Header, Icon, Input, Segment} from 'semantic-ui-react'

import {NavLink} from "react-router-dom";
import {fetchGirisYap, fetchLogin} from "../../Networking/ApiFetchService";
import ErrorMessage from "../../Components/ErrorMessage";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from "react-google-login";

// 375028986601258 app_id for facebook;

//560183493731-sqg46cjedb50b774tajj46vq9ooc30n8.apps.googleusercontent.com   ... google client id
//UbPDpG_bC1g8G2T0387dYfqw  ... client secret

export default class LoginPage extends Component{

    responseFacebook(response) {
        console.log(response.email);
        console.log(response.userID);
        console.log(response.name);


        localStorage.setItem('email',response.email);
        localStorage.setItem('userid',response.userID);
        localStorage.setItem('name',response.name);
        localStorage.setItem('type','fb');

        window.location.href = "/add-phone";



    };

    responseGoogle = (response) => {
        console.log(response);

        localStorage.setItem('email',response.profileObj.email);
        localStorage.setItem('userid',response.profileObj.googleId);
        localStorage.setItem('name',response.profileObj.name);
        localStorage.setItem('type','google');

        window.location.href = "/add-phone";


    };


    constructor(props) {
        super(props);
        this.state = {
            fbData:{

            },
            phoneAddPageVisibility:false,
            buttonDisabled:true,
            loading:false,
            user_id:0,
            errorMessage:[],
            data:{
                email:"",
                password:""
            }
        }
    }



    componentWillMount() {
        document.title = 'Giriş Yap • Diyabetli Birey İzlem'
    }


    handleEmailChange=(e)=>{

        this.setState({
            data:{
                email: e.target.value,
                password:this.state.data.password
            }
        });
        this.buttonStateUpdate()

    };

    handlePasswordChange=(e)=>{

        this.setState({
            data:{
                email: this.state.data.email,
                password:e.target.value
            }
        });
        this.buttonStateUpdate()

    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.data !== this.state.data){
            this.buttonStateUpdate()
        }
    }

    chechInputs=()=>{

      return this.state.data.email.length > 0 && this.state.data.password.length > 0;
    };

    buttonStateUpdate=()=>{
      if (this.chechInputs()) {
          this.setState({buttonDisabled:false})
      } else {
          this.setState({buttonDisabled:true})
      }
    };


    girisYap = () => {
        this.setState({loading:true});

        fetchGirisYap(this.state.data,res=> {

            this.setState({errorMessage:[]});
            this.setState({loading:false});
            this.props.history.push('/verification/'+res.data.data.userid);

        },err=> {

            if (err.status === 500){
                this.setState({errorMessage:["Sunucu ile bağlantı hatası yaşandı"]})
                this.setState({loading:false});
            } else{
                this.setState({errorMessage:err.response.data.errors})
                this.setState({loading:false});
            }

        });


    };


    login=()=>{



        this.setState({loading:true});

        fetchLogin(this.state.data,res => {

            this.setState({errorMessage:[]});
            this.setState({loading:false});

            console.log(typeof res);

            if ((typeof res).toString() === "undefined") {

                this.setState({errorMessage:["Sunucu ile bağlantı hatası yaşandı"]})

            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {


                    /*VerificationCode.setState({data:{
                        user_id:res.data.data.user_id,
                            key:""
                        }}); */

                    this.props.history.push('/verification/'+res.data.data.userid);

                }

            }

            });

    };

    render() {
        return(

            <Segment
                basic
                loading = {this.state.loading}

               >
                <Grid
                    textAlign='center' style={{height:'100vh',backgroundColor:'#fafafa'}} verticalAlign='middle'


                >

                    <Grid.Column
                        computer={4} tablet={8} mobile={16}
                    >

                        <Card fluid>
                            <Card.Content>
                                <Card.Header style={{textAlign:'center'}}>Giriş Yap</Card.Header>
                                <Divider clearing={true}
                                         hidden
                                >

                                </Divider>
                                <Card.Meta>
                                    <Form>
                                        <Form.Field>
                                            <label style={{textAlign:'left'}}>E-Posta</label>
                                            <Input iconPosition='left'
                                                   placeholder='Email'
                                                   type = 'Email'
                                                    onChange={this.handleEmailChange}>
                                                <Icon name='at'/>
                                                <input />
                                            </Input>
                                        </Form.Field>
                                        <Form.Field>
                                            <label style={{textAlign:'left'}}>Parola</label>
                                            <Input iconPosition='left' placeholder='Parola' type ='Password'
                                                   onChange={this.handlePasswordChange}>
                                                <Icon name='lock' />
                                                <input />
                                            </Input>
                                        </Form.Field>

                                        <Divider clearing={true}
                                                 hidden
                                        >

                                        </Divider>

                                        <Button inverted color='green'
                                                fluid
                                                style={{borderRadius:'7px'}}
                                                disabled={this.state.buttonDisabled}
                                                onClick={this.girisYap}
                                        >
                                            Giriş Yap
                                        </Button>
                                        <Divider horizontal>
                                            <Header as='h6'>

                                                VEYA
                                            </Header>
                                        </Divider>

                                            {this.state.errorMessage.length > 0 ?
                                                this.state.errorMessage.map((m,i)=> {

                                                   return <ErrorMessage message = {m} message_key = {i+1}/>

                                                })

                                                :null}

                                        <Form.Field>
                                            <FacebookLogin
                                                appId="375028986601258"
                                                autoLoad={false}
                                                fields="name,email"
                                                textButton={'Facebook ile Giriş Yap'}
                                                callback={this.responseFacebook}
                                            >
                                            </FacebookLogin>
                                        </Form.Field>


                                        <Form.Field>
                                            <GoogleLogin
                                                clientId="246159249813-rm9qb52q1cdfch7suv6e4732goo5e0eh.apps.googleusercontent.com"
                                                buttonText="Google ile Giriş Yap"
                                                onSuccess={this.responseGoogle}
                                                onFailure={this.responseGoogle}
                                                scope={'profile email'}
                                            >
                                            </GoogleLogin>

                                        </Form.Field>


                                    </Form>
                                </Card.Meta>

                            </Card.Content>

                        </Card>

                        <Segment basic style={{textAlign:'center'}}>
                            Hesabın yok mu ? &nbsp;
                            <NavLink to={'/register'}>
                                Kaydol
                            </NavLink>


                        </Segment>
                    </Grid.Column>


                </Grid>
            </Segment>



        );
    }

}