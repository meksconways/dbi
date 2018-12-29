import React, {Component} from 'react'
import {Button, Card, Divider, Grid, Icon} from "semantic-ui-react";
import UserDuyuruDetayModal from "./UserDuyuruDetayModal";


export default class UserDuyuruGridItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisibility:false
        }

    }

    componentWillMount() {
        this.setState({data:this.props.data})
    }

    handleModalClose = () => {
        this.setState({modalVisibility:false})
    };



    render() {
        return (
            <Grid.Column
                computer={4} tablet={8} mobile={16}
                style={{paddingBottom:'2em'}}

            >
                <Card fluid >

                    <Card.Content>
                        <Card.Header><Icon name={"announcement"} size={"large"}/></Card.Header>
                        <Divider hidden={true}/>
                        <Card.Meta style={{color:'#212121',whiteSpace:"noWrap",overflow:"hidden",textOverflow:"ellipsis"}} >{this.props.data.announcement}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Card.Meta style={{color:'#00b5ad'}}>Oluşturulma Tarihi: &nbsp; {this.props.data.created_at}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Button compact color='teal' content='Detay'  fluid onClick={() => this.setState({modalVisibility:true})} />

                    </Card.Content>
                    {this.state.modalVisibility ? <UserDuyuruDetayModal data={this.props.data}
                                                                          call={this.handleModalClose}
                        />

                        : null}
                </Card>
            </Grid.Column>
        );
    }


}
