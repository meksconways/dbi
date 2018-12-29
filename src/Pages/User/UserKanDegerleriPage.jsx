import React, {Component} from 'react'
import {fetchUserKanDegerleriGet} from "../../Networking/ApiFetchService";
import HeaderNameItem from "../../Components/HeaderNameItem";

import UserKanDegerleriGridItem from "../../Components/user/UserKanDegerleriGridItem";
import {Grid} from "semantic-ui-react";

export default class UserKanDegerleriPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }


    getKanDegerleri = () => {
        fetchUserKanDegerleriGet(res => {

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
        document.title = 'Kan Değerlerim • Diyabetli Birey İzlem';
        this.getKanDegerleri();
    }

    render() {
        return (
            <div>
                <HeaderNameItem title={'Kan Değerleri'}/>
                <Grid
                    style={{paddingTop:'2em',paddingLeft:'2em',paddingRight:'2em',paddingBottom:'2em'}}>
                    <Grid.Row textAlign={'center'} >

                        {this.state.data.length > 0 ?
                            this.state.data.map((m,i)=> {

                                return <UserKanDegerleriGridItem data={m}/>

                            })
                            :null}
                    </Grid.Row>

                </Grid>

            </div>
        );
    }

}