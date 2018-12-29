import React, {Component} from 'react'

import {Button, Grid, Card, Icon} from "semantic-ui-react";
import {fetchManagerFeedbacksDelete} from "../Networking/ApiFetchService";



export default class FeedBacksGridItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            buttonLoading:false
        }
    }


    deleteFeedback = () =>{

        console.log('btn click');

      this.setState({buttonLoading:true});

      fetchManagerFeedbacksDelete(this.props.data.id,res=>{

          if ((typeof res).toString() === "undefined") {

              // route login
              this.setState({deleteLoading:false});

          }else{

              if (res.status >= 400 && res.status < 500){

                  this.setState({deleteLoading:false});

              } else if (res.status >=200 && res.status < 300) {

                  this.setState({deleteLoading:false});
                  window.location.href="/feedbacks";
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
                            <Card.Header><Icon name={"modx"} color={'teal'} size={"huge"}/></Card.Header>

                        </Card.Content>
                        <Card.Content>
                            <Card.Header as={'h3'}>Geri Bildirim ID &nbsp; {this.props.data.id}</Card.Header>
                            <Card.Meta extra style={{color:'#212121'}}>{this.props.data.feedback}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Meta style={{color:'#393939'}}>Oluşturulma Tarihi: &nbsp; {this.props.data.created_at}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <Button color='red' fluid
                                    loading={this.state.buttonLoading}
                                    onClick={this.deleteFeedback}

                            >

                                <Icon name={'trash alternate'}


                                />Kaldır</Button>


                        </Card.Content>
                    </Card>
                </Grid.Column>

        );
    }


}