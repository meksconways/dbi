import React, {Component} from 'react'
import HeaderNameItem from "../../Components/HeaderNameItem";
import {Button, Form, Grid, Header, Icon, Segment} from "semantic-ui-react";
import {fetchManagerProfileGet, fetchManagerProfilePatch} from "../../Networking/ApiFetchService";


export default class ManagerProfile extends Component{

    constructor(props) {
        super(props);
        this.state = {
            pageHeader:'Profilim',
            data:{},
            updateButtonLoading:false,
            logoutButtonLoading:false,
            pageLoading:true,
            nameSurnameInput:'',
            updateButtonDisabled:false

        }

    }

    componentWillMount() {
        document.title = this.state.pageHeader+' • Diyabetli Birey İzlem';
        this.getManagerProfile();
    }

    updateProfile = () =>{

        this.setState({updateButtonLoading:true});
        fetchManagerProfilePatch({name_surname:this.state.nameSurnameInput},res => {

            if ((typeof res).toString() === "undefined") {

                // route login

            }else{

                if (res.status >= 400 && res.status < 500){

                    //this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {

                    window.location.href="/manager-profile";


                }

            }


        });


    };

    getManagerProfile = () => {

        fetchManagerProfileGet(res => {

            if ((typeof res).toString() === "undefined") {

                // route login

            }else{

                if (res.status >= 400 && res.status < 500){

                    //this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {

                    this.setState({pageLoading:false});
                    this.setState({data:res.data.data});
                    this.setState({pageHeader:this.state.data.name_surname});
                    this.setState({nameSurnameInput:this.state.data.name_surname})
                    document.title = this.state.pageHeader+' • Diyabetli Birey İzlem';


                }

            }



        })



    };



    handleInputChange = (e,v) =>{



        this.setState({nameSurnameInput:e.target.value});

        if (this.state.nameSurnameInput.trim().length > 2){
            this.setState({updateButtonDisabled:false})
        } else{
            this.setState({updateButtonDisabled:true})
        }

    };

    render() {
        return (
            <div>
                <HeaderNameItem title={this.state.pageHeader}/>


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
                                    <Icon name={'user secret'} size={'massive'}/>



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


}