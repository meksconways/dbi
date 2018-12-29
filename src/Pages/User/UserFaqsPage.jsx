import React, {Component} from 'react'
import {fetchUserFaqsGet} from "../../Networking/ApiFetchService";
import HeaderNameItem from "../../Components/HeaderNameItem";
import UserSSSPageItem from "../../Components/user/UserSSSPageItem";

export default class UserFaqsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }

    }
    componentWillMount() {
        document.title = 'Sıkça Sorulan Sorular • Diyabetli Birey İzlem';
        this.getFaqs();
    }

    getFaqs = () => {

        fetchUserFaqsGet(res => {

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
                <HeaderNameItem title={"Sıkça Sorulan Sorular"}/>

                {this.state.data.length > 0 ?
                    this.state.data.map((m)=> {

                        return <UserSSSPageItem data={m}/>

                    })
                    :null}

            </div>
        );
    }

}