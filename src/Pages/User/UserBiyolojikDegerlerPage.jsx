import React, {Component} from 'react'
import {fetchUserBiyolojikDegerlerGet} from "../../Networking/ApiFetchService";
import HeaderNameItem from "../../Components/HeaderNameItem";

import UserBiyolojikDegerlerGridItem from "../../Components/user/UserBiyolojikDegerlerGridItem";
import {Grid} from "semantic-ui-react";

export default class UserBiyolojikDegerlerPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }

    }

    componentWillMount() {
        document.title = 'Biyolojik Değerlerim • Diyabetli Birey İzlem';
        this.getBiyolojikDegerler();
    }

    getBiyolojikDegerler = () => {

        fetchUserBiyolojikDegerlerGet(res => {

            if ((typeof res).toString() === "undefined") {

                // route login

            }else{

                if (res.status >= 400 && res.status < 500){


                } else if (res.status >=200 && res.status < 300) {
                    this.setState({data:res.data.data});
                }

            }


        });

    };

    render() {
        return (
            <div>
                <HeaderNameItem title={'Biyolojik Değerler'}/>
                <Grid
                    style={{paddingTop:'2em',paddingLeft:'2em',paddingRight:'2em',paddingBottom:'2em'}}>
                    <Grid.Row textAlign={'center'} >

                        {this.state.data.length > 0 ?
                            this.state.data.map((m)=> {

                                return <UserBiyolojikDegerlerGridItem data={m}/>

                            })
                            :null}
                    </Grid.Row>

                </Grid>

            </div>
        );
    }


}