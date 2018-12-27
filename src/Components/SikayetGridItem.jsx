import React, {Component} from 'react'

import {Button, Card, Grid, Icon} from 'semantic-ui-react'
import {fetchManagerSikayetDelete} from "../Networking/ApiFetchService";


export default class SikayetGridItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            buttonLoading:false
        }

    }


    deleteSikayet = () =>{

        this.setState({buttonLoading:true});

        fetchManagerSikayetDelete(this.props.data.id,res =>{

            if ((typeof res).toString() === "undefined") {

                // route login
                this.setState({buttonLoading:false});

            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({buttonLoading:false});

                } else if (res.status >=200 && res.status < 300) {

                    this.setState({buttonLoading:false});

                    window.location.href="/sikayetler";
                }

            }


        });



    };


    render() {
        return (
            <Grid.Column
                computer={4} tablet={8} mobile={16}
                style={{paddingBottom:'2em'}}

            >
                <Card fluid >

                    <Card.Content>
                        <Card.Header><Icon name={"flag"} color={'grey'} size={"huge"}/></Card.Header>

                    </Card.Content>

                    <Card.Content>
                        <Card.Header  >Şikayet ID &nbsp; {this.props.data.id}</Card.Header>
                        <Card.Meta extra style={{color:'#212121'}}>{this.props.data.complaint}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Card.Meta style={{color:'#c54545'}}>Oluşturulma Tarihi: &nbsp; {this.props.data.created_at}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Button color='red' fluid onClick={this.deleteSikayet}
                                loading={this.state.buttonLoading}><Icon name={'trash alternate'}/>Kaldır</Button>

                    </Card.Content>
                </Card>
            </Grid.Column>
        );
    }


}