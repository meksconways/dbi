import React, {Component} from 'react'
import {fetchManagerSSSGet, fetchUsers} from "../../Networking/ApiFetchService";
import {Grid} from "semantic-ui-react";
import UserGridItem from "../../Components/UserGridItem";
import DuyurularGridItem from "../../Components/DuyurularGridItem";



export default class DuyurularPage extends Component{



    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            data:[]
        }
    }

    getSSS = () =>{

        fetchManagerSSSGet(res=>{

            console.log(res);

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
        this.getSSS()
    }

    render() {
        return (
            <Grid
                style={{paddingTop:'2em',paddingLeft:'2em',paddingRight:'2em',paddingBottom:'2em'}}>

                <Grid.Row textAlign={'center'} >
                    {this.state.data.length > 0 ?
                        this.state.data.map((m,i)=> {

                            return <DuyurularGridItem data={m}/>

                        })

                        :null}
                </Grid.Row>



            </Grid>
        );
    }

}