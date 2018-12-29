import React, {Component} from 'react'
import {fetchManagerErrorReportsGet} from "../../Networking/ApiFetchService";
import HeaderNameItem from "../../Components/HeaderNameItem";

import ManagerErrorReportsGridItem from "../../Components/ManagerErrorReportsGridItem";
import {Grid} from "semantic-ui-react";

export default class ManagerErrorPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }

    }

    componentWillMount() {
        document.title = 'Hata Raporları • Diyabetli Birey İzlem';
        this.getManagerErrorReports();
    }

    getManagerErrorReports = () => {

        fetchManagerErrorReportsGet(res => {

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

    render() {
        return (
            <div>
                <HeaderNameItem title={"Hata Raporları"}/>

                <Grid
                    style={{paddingTop:'2em',paddingLeft:'2em',paddingRight:'2em',paddingBottom:'2em'}}>
                    <Grid.Row textAlign={'center'} >

                        {this.state.data.length > 0 ?
                            this.state.data.map((m)=> {

                                return <ManagerErrorReportsGridItem data={m}/>

                            })
                            :null}
                    </Grid.Row>

                </Grid>
            </div>
        );
    }


}