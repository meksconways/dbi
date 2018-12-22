import React, {Component} from 'react'

import { Card, Icon, Image,Grid } from 'semantic-ui-react'


export default class DuyurularGridItem extends Component {

    constructor(props){
        super(props)
    }

    //props.data.id
    //props.data.text
    //props.data.createdat
    //props.data.updatedat

    render() {
        return (

            <Grid.Column computer={4} tablet={8} mobile={16}
                         style={{paddingBottom:'2em'}}>
                <Card fluid >

                    <Card.Content>
                        <Card.Header>Duyuru</Card.Header>
                        <Card.Meta>{this.props.data.announcement}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Card.Meta>Oluşturulma Tarihi: {this.props.data.created_at}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='announcement' />
                            Duyuruyu Gör
                        </a>
                    </Card.Content>
                </Card>
            </Grid.Column>





        );
    }

}