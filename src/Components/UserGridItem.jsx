import React, {Component} from 'react'
import { Card, Icon, Image,Grid } from 'semantic-ui-react'


export default class UserGridItem extends Component{


    constructor(props){
        super(props)
    }


    render() {
        return (

            <Grid.Column computer={4} tablet={8} mobile={16}
                         style={{paddingBottom:'2em'}}>
                <Card fluid >

                    <Card.Content>
                        <Card.Header>{this.props.data.name_surname}</Card.Header>
                        <Card.Meta>{this.props.data.email}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            Profili Gör
                        </a>
                    </Card.Content>
                </Card>
            </Grid.Column>





        );
    }


}

