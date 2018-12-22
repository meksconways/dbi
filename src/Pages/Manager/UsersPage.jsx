import React, {Component} from 'react'
import {Grid, Menu,} from 'semantic-ui-react'
import {fetchUsers} from "../../Networking/ApiFetchService";
import {Redirect} from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage";
import UserGridItem from "../../Components/UserGridItem";



export default class UsersPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            data:[]
        }
    }




    getUsers = () =>{

        fetchUsers(res=>{

            this.setState({loading:false});

            if ((typeof res).toString() === "undefined") {

               // route login

            }else{

                if (res.status >= 400 && res.status < 500){

                    //this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {

                    this.setState({data:res.data.data});

                }

            }

        })

    };



    componentWillMount() {
        document.title = 'Kullanıcılar • Diyabetli Birey İzlem';
        this.getUsers()
    }

    render() {
        return (
            <Grid
                  style={{paddingTop:'2em',paddingLeft:'2em',paddingRight:'2em',paddingBottom:'2em'}}>

                <Grid.Row textAlign={'center'} >
                    {this.state.data.length > 0 ?
                        this.state.data.map((m,i)=> {

                            return <UserGridItem data={m}/>

                        })

                        :null}
                </Grid.Row>



            </Grid>





        );
    }

}