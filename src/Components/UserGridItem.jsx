import React, {Component} from 'react'
import {Button, Card, Grid, Icon} from 'semantic-ui-react'
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
                        <Card.Header><Icon name={"user"} color={'blue'} size={"huge"}/></Card.Header>

                    </Card.Content>

                    <Card.Content>
                        <Card.Header>{this.props.data.name_surname}</Card.Header>
                        <Card.Meta style={{color:'#212121'}}>{this.props.data.email}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <NavLink to={"/user/"+this.props.data.userid}>
                            <Button colored={true} color={'blue'} fluid compact>Profili Gör</Button>
                        </NavLink>

                    </Card.Content>
                </Card>
            </Grid.Column>





        );
    }


}

