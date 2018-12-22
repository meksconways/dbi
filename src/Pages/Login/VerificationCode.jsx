import React, {Component} from 'react'
import {Button, Card, Divider, Form, Grid, Icon, Input, Segment} from "semantic-ui-react";
import {fetchPhoneSign} from "../../Networking/ApiFetchService";


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

    verifyLogin = () =>{

        this.setState({buttonLoading:true});

        fetchPhoneSign(this.state.data,res=>{

            if ((typeof res).toString() === "undefined") {

                this.setState({errorMessage:["Sunucu ile bağlantı hatası yaşandı"]});

            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {

                    const rootJsonObj = JSON.parse(res.data);

                    console.log(rootJsonObj);



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

                                                    <Button inverted color='blue'
                                                            fluid
                                                            loading={this.state.buttonLoading}
                                                            style={{borderRadius: '7px'}}
                                                            onClick={this.verifyLogin}

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