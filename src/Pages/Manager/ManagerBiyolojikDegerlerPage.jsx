import React, {Component} from 'react'
import HeaderNameItem from "../../Components/HeaderNameItem";
import {Grid} from "semantic-ui-react";
import BiyolojikDegerlerGridItem from "../../Components/BiyolojikDegerlerGridItem";
import {fetchManagerBiyoloijkDegerlerGet} from "../../Networking/ApiFetchService";


export default class ManagerBiyolojikDegerlerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }

    }


    getBiyolojikDegerler = () =>{

        fetchManagerBiyoloijkDegerlerGet(res => {

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
        document.title = 'Biyolojik Değerler • Diyabetli Birey İzlem';
        this.getBiyolojikDegerler();
    }

    render() {
        return (
            <div>
                <HeaderNameItem title={'Biyolojik Değerler'}/>
                <Grid
                    style={{paddingTop:'2em',paddingLeft:'2em',paddingRight:'2em',paddingBottom:'2em'}}>
                    <Grid.Row textAlign={'center'} >

                        {this.state.data.length > 0 ?
                            this.state.data.map((m,i)=> {

                                return <BiyolojikDegerlerGridItem data={m}/>

                            })
                            :null}
                    </Grid.Row>

                </Grid>

            </div>
        );
    }


}