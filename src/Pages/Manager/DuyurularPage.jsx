import React, {Component} from 'react'
import {fetchManagerDuyuruGet} from "../../Networking/ApiFetchService";
import {Button, Grid} from "semantic-ui-react";
import DuyurularGridItem from "../../Components/DuyurularGridItem";
import HeaderNameItem from "../../Components/HeaderNameItem";
import DuyuruEkleModal from "../../Components/DuyuruEkleModal";


export default class DuyurularPage extends Component{



    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            data:[],
            duyuruEkleModal:false
        }
    }

    getDuyurular = () =>{

        fetchManagerDuyuruGet(res=>{

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

        });

    };

    componentWillMount() {
        document.title = 'Duyurular • Diyabetli Birey İzlem';
        this.getDuyurular()
    }

    handleDuyuruEkleModalClose = () => {

        this.setState({duyuruEkleModal:false})


    };

    onClickDuyuruEkle = () =>{

        this.setState({duyuruEkleModal:true})

    };

    render() {
        return (
            <div>
                <HeaderNameItem title={"Duyurular"}/>
                <Button compact color='teal' style={{marginLeft:'2em'}}
                        onClick={this.onClickDuyuruEkle}

                >Duyuru Ekle</Button>

                {
                    this.state.duyuruEkleModal ?  <DuyuruEkleModal closeCall={this.handleDuyuruEkleModalClose}/> : null
                }

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
            </div>
        );
    }

}