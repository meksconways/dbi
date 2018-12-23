import React, {Component} from 'react'
import HeaderNameItem from "../../Components/HeaderNameItem";
import {Button} from "semantic-ui-react";
import FaqsItem from "../../Components/FaqsItem";
import {fetchManagerFaqsGet} from "../../Networking/ApiFetchService";
import DuyuruEkleModal from "../../Components/DuyuruEkleModal";
import FaqsEkleModal from "../../Components/FaqsEkleModal";


export default class ManagerFaqsPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            faqsEkleModal:false
        }
    }

    getFaqs = () =>{

        fetchManagerFaqsGet(res =>{

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
        document.title = 'Sıkça Sorulan Sorular • Diyabetli Birey İzlem';
        this.getFaqs();
    }

    handleFaqsEkleModalClose = () => {

        this.setState({faqsEkleModal:false})


    };

    onClickFaqsEkle = () =>{

        this.setState({faqsEkleModal:true})

    };

    render(){
        return(
            <div>
                <HeaderNameItem title={"Sıkça Sorulan Sorular"}/>
                <Button compact color='teal' style={{marginLeft:'2em'}} onClick={this.onClickFaqsEkle}
                >SSS Ekle</Button>
                {
                    this.state.faqsEkleModal ?  <FaqsEkleModal closeCall={this.handleFaqsEkleModalClose}/> : null
                }

                {this.state.data.length > 0 ?
                    this.state.data.map((m,i)=> {

                        return <FaqsItem data={m}/>

                    })
                    :null}

            </div>
        );
    }
}