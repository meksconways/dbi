import React, {Component} from 'react'
import {Button, Card, Divider, Form, Grid, Header, Icon, Input, Segment} from 'semantic-ui-react'

import {NavLink} from "react-router-dom";
import {fetchLogin} from "../../Networking/ApiFetchService";
import ErrorMessage from "../../Components/ErrorMessage";


export default class LoginPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            buttonDisabled:true,
            loading:false,
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

    login=()=>{



        this.setState({loading:true});

        fetchLogin(this.state.data,res => {

            this.setState({errorMessage:[]});
            this.setState({loading:false});

            if ((typeof res).toString() === "undefined") {

                this.setState({errorMessage:["Sunucu ile bağlantı hatası yaşandı"]})

            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {

                    localStorage.setItem('token',res.data.data.token);


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

                    textAlign={'center'}
                    style={{paddingTop:'8em'}}

                >

                    <Grid.Row

                    >

                        <Card>
                            <Card.Content>
                                <Card.Header style={{textAlign:'center'}}>Giriş Yap</Card.Header>
                                <Card.Meta>
                                    <Form>
                                        <Form.Field>
                                            <label>E-Posta</label>
                                            <Input iconPosition='left'
                                                   placeholder='Email'
                                                   type = 'Email'
                                                    onChange={this.handleEmailChange}>
                                                <Icon name='at'/>
                                                <input />
                                            </Input>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Parola</label>
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
                                                circular
                                                disabled={this.state.buttonDisabled}
                                                onClick={this.login}
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
                                            <Button color='facebook'
                                                    fluid
                                            >
                                                <Icon name='facebook' /> Facebook ile Giriş Yap
                                            </Button>
                                        </Form.Field>
                                        <Form.Field>
                                            <Button color='google plus'
                                                    fluid
                                            >
                                                <Icon name='google plus' /> Google + ile Giriş Yap
                                            </Button>
                                        </Form.Field>


                                    </Form>
                                </Card.Meta>

                            </Card.Content>

                        </Card>

                    </Grid.Row>
                    <Segment basic>Hesabın yok mu ? &nbsp;
                        <NavLink to={'/register'}>
                           Kaydol
                        </NavLink>


                    </Segment>

                </Grid>
            </Segment>



        );
    }

}