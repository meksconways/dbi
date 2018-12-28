import React, {Component} from 'react'
import {fetchUserProfileGet} from "../../Networking/ApiFetchService";
import HeaderNameItem from "../../Components/HeaderNameItem";
import {Button, Form, Grid, Header, Icon, Segment} from "semantic-ui-react";


export default class UserHomePage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name:'Profilim',
            data: {}
        }
    }

    componentWillMount() {
        this.getUserProfile();
        document.title = this.state.name+' • Diyabetli Birey İzlem';
    }

    render() {
        return (
            <div>
                <HeaderNameItem title={this.state.name}/>


                <div style={{paddingTop:'2em',paddingLeft:'2em',
                    paddingRight:'2em',paddingBottom:'2em'}}>

                    <Segment placeholder loading={this.state.pageLoading}
                    >

                        <Grid
                        >
                            <Grid.Row textAlign={'center'} >

                                <Grid.Column
                                    computer={2} tablet={8} mobile={16}
                                    style={{paddingLeft:'2em',
                                        paddingRight:'2em',paddingBottom:'2em'}}

                                >
                                    <Icon name={'user'} size={'massive'}/>



                                </Grid.Column>

                                <Grid.Column
                                    computer={4} tablet={8} mobile={16}
                                    style={{paddingLeft:'2em',
                                        paddingRight:'2em',paddingBottom:'2em'}}

                                >
                                    <Form>
                                        <Form.Field>
                                            <label style={{textAlign:'left'}}>İsim Soyisim</label>
                                            <input placeholder='İsim Soyisim'
                                                   onChange={this.handleInputChange}
                                                   defaultValue={this.state.data.name_surname}
                                            />
                                        </Form.Field>

                                        <Button animated='vertical' disabled={this.state.updateButtonDisabled}
                                                fluid onClick={this.updateProfile} colored color={'green'}
                                                loading={this.state.updateButtonLoading}
                                        >
                                            <Button.Content visible>Güncelle</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name='edit' />
                                            </Button.Content>
                                        </Button>


                                        <Button color='red' colored fluid
                                                loading={this.state.logoutButtonLoading}
                                                onClick={this.logout}
                                                style={{marginTop:'1em'}}>
                                            <Icon name='log out' />
                                            Çıkış Yap
                                        </Button>
                                    </Form>




                                </Grid.Column>

                                <Grid.Column
                                    computer={4} tablet={8} mobile={16}
                                    style={{paddingLeft:'2em',
                                        paddingRight:'2em',paddingBottom:'2em'}}

                                >
                                    <Header as={'h3'} style={{textAlign:'left'}}>User ID: {this.state.data.userid}</Header>
                                    <Header as={'h3'} style={{textAlign:'left'}}>E-Posta: {this.state.data.email}</Header>
                                    <Header as={'h3'} style={{textAlign:'left'}}>Kullanıcı Tipi: &nbsp;Admin</Header>



                                </Grid.Column>


                            </Grid.Row>

                        </Grid>


                    </Segment>
                </div>





            </div>
        );
    }

    getUserProfile = () => {

        fetchUserProfileGet(res => {

            if ((typeof res).toString() === "undefined") {

                // route login

            }else{

                if (res.status >= 400 && res.status < 500){

                    //this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {

                    this.setState({name:res.data.data.name_surname});
                    this.setState({data:res.data.data});
                    document.title = this.state.name+' • Diyabetli Birey İzlem';


                }

            }

        });

    };



}