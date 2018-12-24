import React, {Component} from 'react'
import {Card, Icon, Image, Grid, Button} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";


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
                        <Card.Meta style={{color:'#212121'}}>{this.props.data.email}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <NavLink to={"/user/"+this.props.data.userid}>
                            <Icon name='user' />
                            Profili Gör
                        </NavLink>

                    </Card.Content>
                </Card>
            </Grid.Column>





        );
    }


}

