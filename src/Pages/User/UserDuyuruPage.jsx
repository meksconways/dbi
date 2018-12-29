import React, {Component} from 'react'
import {fetchUserDuyuruGet} from "../../Networking/ApiFetchService";
import HeaderNameItem from "../../Components/HeaderNameItem";
import UserDuyuruGridItem from "../../Components/user/UserDuyuruGridItem";
import {Grid} from "semantic-ui-react";

export default class UserDuyuruPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }


    componentWillMount() {
        document.title = 'Duyurular • Diyabetli Birey İzlem';
        this.getDuyurular();
    }

    getDuyurular = () => {

        fetchUserDuyuruGet(res => {

            console.log(res);

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
                <HeaderNameItem title={"Duyurular"}/>
                <Grid
                    style={{paddingTop:'2em',paddingLeft:'2em',paddingRight:'2em',paddingBottom:'2em'}}>
                    <Grid.Row textAlign={'center'} >

                        {this.state.data.length > 0 ?
                            this.state.data.map((m)=> {

                                return <UserDuyuruGridItem data={m}/>

                            })
                            :null}
                    </Grid.Row>

                </Grid>
            </div>
        );
    }

}