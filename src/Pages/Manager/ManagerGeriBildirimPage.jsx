import React, {Component} from 'react'
import HeaderNameItem from "../../Components/HeaderNameItem";
import {Grid} from "semantic-ui-react";
import {fetchManagerFeedbacksGet} from "../../Networking/ApiFetchService";
import FeedBacksGridItem from "../../Components/FeedBacksGridItem";


export default class ManagerGeriBildirimPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }

    }


    componentWillMount() {

        document.title = 'GeriBildirim • Diyabetli Birey İzlem';
        this.getFeedbacks();

    }

    getFeedbacks = () =>{


        fetchManagerFeedbacksGet(res=> {

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
                <HeaderNameItem title={"Geri Bildirimler"}/>
                <Grid
                    style={{paddingTop:'2em',paddingLeft:'2em',paddingRight:'2em',paddingBottom:'2em'}}>
                    <Grid.Row textAlign={'center'}>

                        {this.state.data.length > 0 ?
                            this.state.data.map((m,i)=> {

                                return <FeedBacksGridItem data={m}/>

                            })
                            :null}
                    </Grid.Row>

                </Grid>

            </div>
        );
    }


}