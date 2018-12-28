import React, {Component} from 'react'
import {Grid,} from 'semantic-ui-react'
import {fetchUsers} from "../../Networking/ApiFetchService";
import UserGridItem from "../../Components/UserGridItem";
import HeaderNameItem from "../../Components/HeaderNameItem";


export default class UsersPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            data:[]
        }
    }




    getUsers = () =>{
        this.setState({loading:true});

        fetchUsers(res=>{



            if ((typeof res).toString() === "undefined") {

               // route login

            }else{

                if (res.status >= 400 && res.status < 500){

                    //this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {

                    this.setState({data:res.data.data});

                }

            }
            this.setState({loading:false});

        })

    };



    componentWillMount() {
        document.title = 'Kullanıcılar • Diyabetli Birey İzlem';
        this.getUsers()
    }

    render() {
        return (
            <div>
                <HeaderNameItem title={"Kullanıcılar"}/>
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
            </div>





        );
    }

}