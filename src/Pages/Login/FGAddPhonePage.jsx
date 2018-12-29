import React, {Component} from 'react'


import ErrorMessage from "../../Components/ErrorMessage";
import {Button, Card, Divider, Form, Grid, Icon, Input, Segment} from "semantic-ui-react";
import {fetchUserLoginwithFB, fetchUserLoginwithGoogle} from "../../Networking/ApiFetchService";


export default class FGAddPhonePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info:{
                email:'',
                name:'',
                userid:'',
                type:''
            },
            phone:'',
            btnLoading:false,
            btnDisabled:true,
            errorMessage:[]
        }

    }

    componentWillMount() {
        const _email = localStorage.getItem('email');
        const _name = localStorage.getItem('name');
        const _userid = localStorage.getItem('userid');
        const _type = localStorage.getItem('type');

        this.setState({info:{

                email:_email,
                name:_name,
                userid:_userid,
                type:_type

            }});
    }

    handleActCode = (e) => {

        this.setState({phone:e.target.value});
        if (e.target.value.length !== 13){
            this.setState({btnDisabled:true});
        } else{
            this.setState({btnDisabled:false});
        }

    };

    render() {
        return (
            <div>

                <Segment
                    basic

                >

                    <Grid

                        textAlign='center' style={{height: '100%', paddingTop: '8em'}} verticalAlign='middle'


                    >
                        <Grid.Column
                            computer={4} tablet={8} mobile={16}
                        >
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header style={{textAlign: 'center'}}>Telefon Numarası Ekle</Card.Header>
                                    <Card.Meta>
                                        <Form>
                                            <Form.Field>
                                                <label>Telefon Numarası</label>
                                                <Divider clearing={true}
                                                         hidden
                                                >

                                                </Divider>
                                                <Input iconPosition='left'
                                                       placeholder='Numara'
                                                       type='text'
                                                       onChange={this.handleActCode}
                                                >
                                                    <Icon name='text telephone'/>
                                                    <input/>
                                                </Input>
                                                <Divider clearing={true}
                                                         hidden
                                                >

                                                </Divider>

                                                {
                                                    this.state.errorMessage.length > 0 ?

                                                        <ErrorMessage message={this.state.errorMessage}/>
                                                        : null
                                                }


                                                <Button color='blue'
                                                        fluid
                                                        compact
                                                        colored={true}
                                                        disabled={this.state.btnDisabled}
                                                        loading={this.state.btnLoading}
                                                        onClick={this.login}

                                                >
                                                    Devam
                                                </Button>
                                            </Form.Field>
                                        </Form>
                                    </Card.Meta>
                                </Card.Content>

                            </Card>

                        </Grid.Column>


                    </Grid>

                </Segment>


            </div>
        );
    }

    login = () => {

      if (this.state.info.type === 'fb'){
          this.facebookLogin();
      } else{
          this.googlePlusLogin();
      }

    };

    facebookLogin = () => {

        this.setState({btnLoading:true});
        fetchUserLoginwithFB({

            email:this.state.info.email,
            facebook_user_id:this.state.info.userid,
            name_surname:this.state.info.name,
            phone:this.state.phone

        }, res => {

            if ((typeof res).toString() === "undefined") {

                this.setState({errorMessage:["Sunucu ile bağlantı hatası yaşandı"]});
            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({errorMessage:res.data.errors});
                    this.setState({buttonLoading:false});


                } else if (res.status >=200 && res.status < 300) {



                    localStorage.removeItem('email');
                    localStorage.removeItem('name');
                    localStorage.removeItem('userid');
                    localStorage.removeItem('type');


                    this.props.history.push('/verification/'+res.data.data.userid);


                }



            }

        })



    };

    googlePlusLogin = () => {
        this.setState({btnLoading:true});

        fetchUserLoginwithGoogle({

            email:this.state.info.email,
            google_user_id:this.state.info.userid,
            name_surname:this.state.info.name,
            phone:this.state.phone,


        },res=>{

            if ((typeof res).toString() === "undefined") {

                this.setState({errorMessage:["Sunucu ile bağlantı hatası yaşandı"]});
            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({errorMessage:res.data.errors});
                    this.setState({buttonLoading:false});


                } else if (res.status >=200 && res.status < 300) {


                    localStorage.removeItem('email');
                    localStorage.removeItem('name');
                    localStorage.removeItem('userid');
                    localStorage.removeItem('type');


                    this.props.history.push('/verification/'+res.data.data.userid);


                }



            }


        });


    };


}