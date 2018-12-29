import React, {Component} from 'react'
import {
    fetchUserLogout,
    fetchUserProfileDelete,
    fetchUserProfileGet,
    fetchUserProfilePost
} from "../../Networking/ApiFetchService";
import HeaderNameItem from "../../Components/HeaderNameItem";
import {Button, Form, Grid, Header, Icon, Segment} from "semantic-ui-react";


export default class UserHomePage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name:'Profilim',
            data: {},
            guncelleBtnLoading:false,
            guncelleBtnDisabled:false,
            logoutBtnLoading:false,
            hesapSilBtnLoading:false

        }
    }

    componentWillMount() {
        this.getUserProfile();
        document.title = this.state.name+' • Diyabetli Birey İzlem';
    }

    handleInputChange = (e) =>{

        this.setState({name:e.target.value});

        if (this.state.name.trim().length > 2){
            this.setState({guncelleBtnDisabled:false})
        } else{
            this.setState({guncelleBtnDisabled:true})
        }

    };

    guncelle = () =>{

        this.setState({guncelleBtnLoading:true});
        fetchUserProfilePost({name_surname:this.state.name},res => {

            if ((typeof res).toString() === "undefined") {

                // route login

            }else{

                if (res.status >= 400 && res.status < 500){

                    //this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {

                    window.location.href = "/";
                }

            }

        });

    };

    logout = () => {

        this.setState({logoutBtnLoading:true});
        fetchUserLogout(res => {

            if ((typeof res).toString() === "undefined") {

                // route login

            }else{

                if (res.status >= 400 && res.status < 500){

                    //this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {

                    localStorage.removeItem('token');
                    localStorage.removeItem('is_admin');
                    window.location.href = "/";
                }

            }

        });

    };

    hesapSil = () => {

        this.setState({hesapSilBtnLoading:true});
        fetchUserProfileDelete(res => {
            if ((typeof res).toString() === "undefined") {

                // route login

            }else{

                if (res.status >= 400 && res.status < 500){

                    //this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {

                    localStorage.removeItem('token');
                    localStorage.removeItem('is_admin');
                    window.location.href = "/";
                }

            }


        });

    };

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
                            <Grid.Row verticalAlign={'middle'} textAlign={'center'} >

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

                                        <Button disabled={this.state.guncelleBtnDisabled}
                                                fluid onClick={this.guncelle} colored color={'green'}
                                                loading={this.state.guncelleBtnLoading}
                                        ><Icon name='edit' />
                                           Güncelle
                                        </Button>


                                        <Button color='red' colored fluid
                                                loading={this.state.logoutBtnLoading}
                                                onClick={this.logout}
                                                style={{marginTop:'1em'}}>
                                            <Icon name='log out' />
                                            Çıkış Yap
                                        </Button>
                                        <Button color='grey' colored fluid
                                                loading={this.state.hesapSilBtnLoading}
                                                onClick={this.hesapSil}
                                                style={{marginTop:'1em'}}>
                                            <Icon name='trash alternate' />
                                            Hesabı Sil
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
                                    <Header as={'h3'} style={{textAlign:'left'}}>Kullanıcı Tipi: &nbsp;Normal Üye</Header>



                                </Grid.Column>


                            </Grid.Row>

                        </Grid>


                    </Segment>
                </div>





            </div>
        );
    }





}