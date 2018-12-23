import React, {Component} from 'react'
import HeaderNameItem from "../../Components/HeaderNameItem";
import {Grid} from "semantic-ui-react";
import SikayetGridItem from "../../Components/SikayetGridItem";
import {fetchManagerSikayetGet} from "../../Networking/ApiFetchService";


export default class ManagerSikayetPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data : []
        }

    }



    getSikayetler = () =>{

        fetchManagerSikayetGet(res =>{


            if ((typeof res).toString() === "undefined") {

                // route login

            }else{

                if (res.status >= 400 && res.status < 500){

                    //this.setState({errorMessage:res.data.errors})

                } else if (res.status >=200 && res.status < 300) {



                    this.setState({data:res.data.data});


                }

            }


        });


    };

    componentWillMount() {
        document.title = 'Şikayetler • Diyabetli Birey İzlem';
        this.getSikayetler();
    }


    render() {
        return (
            <div>
                <HeaderNameItem title={"Şikayetler"}/>

                <Grid
                    style={{paddingTop:'2em',paddingLeft:'2em',paddingRight:'2em',paddingBottom:'2em'}}>
                    <Grid.Row textAlign={'center'} >

                        {this.state.data.length > 0 ?
                            this.state.data.map((m,i)=> {

                                return <SikayetGridItem data={m}/>

                            })
                            :null}
                    </Grid.Row>

                </Grid>
            </div>
        );
    }


}