import React, {Component} from 'react'
import HeaderNameItem from "../../Components/HeaderNameItem";
import {fetchManagerUserProfileGet} from "../../Networking/ApiFetchService";
import {Button, Divider, Grid, Header, Icon, Segment} from "semantic-ui-react";


export default class UserProfile extends Component{


    constructor(props) {
        super(props);
        this.state = {
            userData:{},
            userId:this.props.match.params.user_id
        }

    }

    componentWillMount() {

        document.title = this.state.userData.name_surname+' • Diyabetli Birey İzlem';
        this.getUser();
    }

    getUser = () =>{

        fetchManagerUserProfileGet(this.state.userId,res => {




            if ((typeof res).toString() === "undefined") {

                // route login

            }else{

                if (res.status >= 400 && res.status < 500){

                    //this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {

                    this.setState({userData:res.data.data});
                    document.title = this.state.userData.name_surname+' • Diyabetli Birey İzlem';


                }

            }


        });



    };

    render() {
        return (
            <div>
                <HeaderNameItem title={this.state.userData.name_surname}/>
                <div style={{paddingTop:'2em',paddingLeft:'2em',
                    paddingRight:'2em',paddingBottom:'2em'}}>

                    <Segment placeholder loading={this.state.pageLoading}
                    >

                        <Grid
                        >
                            <Grid.Row textAlign={'center'} verticalAlign={'middle'} divided={true} >

                                <Grid.Column
                                    computer={2} tablet={8} mobile={16} textAlign={'center'}
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
                                    <Header as={'h3'} style={{textAlign:'left'}}>
                                        İsim Soyisim: &nbsp;{this.state.userData.name_surname}</Header>
                                    <Header as={'h3'} style={{textAlign:'left'}}>
                                        User ID: &nbsp;{this.state.userData.userid}</Header>
                                    <Header as={'h3'} style={{textAlign:'left'}}>
                                        E-Posta: &nbsp;{this.state.userData.email}</Header>
                                    <Header as={'h3'} style={{textAlign:'left'}}>
                                        Kullanıcı Tipi: &nbsp;Normal Üye</Header>




                                </Grid.Column>

                                <Grid.Column
                                    computer={4} tablet={8} mobile={16}
                                    style={{paddingLeft:'2em',
                                        paddingRight:'2em',paddingBottom:'2em'}}

                                >
                                    <Button color='blue' fluid style={{marginTop:'1em'}}>Kan Değeri Ata</Button>
                                    <Button color='orange' fluid style={{marginTop:'1em'}}>Biyolojik Değer Ata</Button>
                                    <Button color='red' fluid style={{marginTop:'1em'}}>Kullanıcıyı Sil</Button>




                                </Grid.Column>

                            </Grid.Row>

                        </Grid>


                    </Segment>
                </div>

            </div>
        );
    }


}