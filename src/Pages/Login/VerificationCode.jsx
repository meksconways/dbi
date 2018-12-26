import React, {Component} from 'react'
import {Button, Card, Divider, Form, Grid, Icon, Input, Segment} from "semantic-ui-react";
import {fetchPhoneSign, fetchTelefonlaGiris} from "../../Networking/ApiFetchService";
import ErrorMessage from "../../Components/ErrorMessage";


export default class VerificationCode extends Component {


    constructor(props) {
        super(props);
        this.state = {
            buttonLoading: false,
            errorMessage:[],
            data: {
                userid: this.props.match.params.user_id,
                key: ""

            }
        };
    }


    handleActCode = (e) =>{

        this.setState({
            data:{
                userid: this.props.match.params.user_id,
                key: e.target.value
            }
        });

    };


    fetchData = () => {

        this.setState({buttonLoading:true});

        fetchTelefonlaGiris(this.state.data,res=>{

            console.log('res döndü');
            console.log(res);
            const rootJsonObj = res.data;
            console.log(rootJsonObj);

            localStorage.setItem('token',rootJsonObj.data.token);
            localStorage.setItem('is_admin',rootJsonObj.data.is_admin);

            window.location.href = '/';

        },err =>{
            console.log('err döndü');

            if (err.status === 500){
                console.log('500 döndü');
                this.setState({buttonLoading:false});
                console.log(err.response.data.errors);
                this.setState({errorMessage:err.response.data.errors})
            } else{
                // 400 - 499
                this.setState({buttonLoading:false});
                console.log('err 400-499 döndü');
                console.log(err.response.data.errors);
                this.setState({errorMessage:err.response.data.errors})
            }



        });

    };


    verifyLogin = () =>{

        this.setState({buttonLoading:true});

        fetchPhoneSign(this.state.data,res=>{




            if ((typeof res).toString() === "undefined") {


                console.log('500000000');
                this.setState({errorMessage:["Sunucu ile bağlantı hatası yaşandı"]});

            }else{


                if (res.status >= 400 && res.status < 500){

                    console.log('400000000');

                    this.setState({errorMessage:res.data.errors});
                    this.setState({buttonLoading:false});
                    this.setState({errorMessage:["Girilen Kod Hatalı!"]})

                } else if (res.status >=200 && res.status < 300) {
                    console.log('200');
                    const rootJsonObj = res.data;
                    console.log(rootJsonObj);

                    localStorage.setItem('token',rootJsonObj.data.token);
                    localStorage.setItem('is_admin',rootJsonObj.data.is_admin);

                    window.location.href = '/';



                }



            }

        });



    };

        render()
        {
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
                                        <Card.Header style={{textAlign: 'center'}}>Doğrulama</Card.Header>
                                        <Card.Meta>
                                            <Form>
                                                <Form.Field>
                                                    <label>6 Haneli Aktivasyon Kodu</label>
                                                    <Divider clearing={true}
                                                             hidden
                                                    >

                                                    </Divider>
                                                    <Input iconPosition='left'
                                                           placeholder='Aktivasyon Kodu'
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


                                                    <Button inverted color='blue'
                                                            fluid
                                                            loading={this.state.buttonLoading}
                                                            style={{borderRadius: '7px'}}
                                                            onClick={this.fetchData}

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




}