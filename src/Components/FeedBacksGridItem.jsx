import React, {Component} from 'react'

import {Button, Grid, Card, Icon} from "semantic-ui-react";



export default class FeedBacksGridItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            buttonLoading:false
        }
    }


    //todo delete eklenecek

    render() {
        return (

                <Grid.Column
                    computer={4} tablet={8} mobile={16}
                    style={{paddingBottom:'2em'}}

                >
                    <Card fluid >

                        <Card.Content>
                            <Card.Header  style={{paddingBottom:'1em'}} >Geri Bildirim ID &nbsp; {this.props.data.id}</Card.Header>
                            <Card.Meta extra style={{color:'#212121'}}>{this.props.data.feedback}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Meta style={{color:'#393939'}}>Oluşturulma Tarihi: &nbsp; {this.props.data.created_at}</Card.Meta>
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