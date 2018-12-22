import React, {Component} from 'react'
import {Button, Card, Container, Divider, Form, Grid, Icon, Input, Segment} from 'semantic-ui-react'

import {NavLink} from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage";
import {fetchRegister} from "../../Networking/ApiFetchService";


export default class RegisterPage extends Component{

    constructor(props) {
        super(props);

        this.state = {
            loading:false,
            errorMessage:[],
            data : {
                email:"",
                password:"",
                password_confirmation:"",
                name_surname:""
            }
        }

    }

    handleEmailChange=(e)=>{

        this.setState({
            data:{
                email: e.target.value,
                password:this.state.data.password,
                password_confirmation: this.state.data.password_confirmation,
                name_surname: this.state.data.name_surname
            }
        });


    };

    handleNameChange=(e)=>{

        this.setState({
            data:{
                email: this.state.data.email,
                password:this.state.data.password,
                password_confirmation: this.state.data.password_confirmation,
                name_surname: e.target.value
            }
        });


    };
    handlePasswordChange=(e)=>{

        this.setState({
            data:{
                email: this.state.data.email,
                password:e.target.value,
                password_confirmation: this.state.data.password_confirmation,
                name_surname: this.state.data.name_surname
            }
        });


    };

    handlePasswordConfirmationChange=(e)=>{

        this.setState({
            data:{
                email: this.state.data.email,
                password:this.state.data.password,
                password_confirmation: e.target.value,
                name_surname: this.state.data.name_surname
            }
        });


    };

    componentWillMount() {

        document.title = 'Kaydol • Diyabetli Birey İzlem'
    }

    signUp = () => {



        this.setState({errorMessage:[]});

        this.setState({loading:true});


        fetchRegister(this.state.data,res=>{


            this.setState({loading:false});

            if ((typeof res).toString() === "undefined") {

                this.setState({errorMessage:["Sunucu ile bağlantı hatası yaşandı"]});

            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {

                    const rootJsonObj = JSON.parse(res.data);

                    console.log(rootJsonObj);
                    return;

                    const isAdmin = rootJsonObj.data.is_admin;

                    if (isAdmin){

                    }

                    localStorage.setItem('token',res.data.data.token);


                }



            }



        })

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
                                    <Card.Header style={{textAlign:'center'}}>Kaydol</Card.Header>
                                    <Card.Meta>
                                        <Form>
                                            <Form.Field>
                                                <label>E-Posta</label>
                                                <Input iconPosition='left'
                                                       placeholder='Email'
                                                       type = 'Email'
                                                       onChange={this.handleEmailChange}
                                                       id={'txt_email'}>
                                                    <Icon name='at'/>
                                                    <input />
                                                </Input>
                                            </Form.Field>
                                            <Form.Field>
                                                <label>İsim ve Soyisim</label>
                                                <Input iconPosition='left' placeholder='İsim ve Soyisim'
                                                       type = 'text'
                                                       id={'txt_name'}
                                                        onChange={this.handleNameChange}
                                                >
                                                    <Icon name='user circle'/>
                                                    <input />
                                                </Input>
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Parola</label>
                                                <Input iconPosition='left'
                                                       placeholder='Parola'
                                                       type ='Password'
                                                       id={'txt_password'}
                                                       onChange={this.handlePasswordChange}
                                                >
                                                    <Icon name='lock' />
                                                    <input />
                                                </Input>
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Parola Tekrar</label>
                                                <Input iconPosition='left'
                                                       placeholder='Parola Tekrar'
                                                       type ='Password'
                                                       id={'txt_password_confirmation'}
                                                       onChange={this.handlePasswordConfirmationChange}
                                                >
                                                    <Icon name='lock' />
                                                    <input />
                                                </Input>
                                            </Form.Field>

                                            <Divider clearing={true}
                                                     hidden
                                            >

                                            </Divider>

                                            {this.state.errorMessage.length > 0 ?
                                                this.state.errorMessage.map((m,i)=> {

                                                    return <ErrorMessage message = {m} message_key = {i+1}/>

                                                })

                                                :null}


                                            <Button inverted color='blue'
                                                    fluid
                                                    circular
                                                    onClick={this.signUp}
                                            >
                                                Kaydol
                                            </Button>





                                        </Form>
                                    </Card.Meta>

                                </Card.Content>

                            </Card>

                        </Grid.Row>

                        <Segment basic>Zaten bir hesabın mı var ? &nbsp;
                            <NavLink to={'/login'}>
                                Giriş Yap
                            </NavLink>


                        </Segment>


                    </Grid>

            </Segment>





        );
    }

}