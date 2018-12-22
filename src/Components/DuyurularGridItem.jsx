import React, {Component} from 'react'

import { Card, Icon, Image,Grid } from 'semantic-ui-react'
import DuyuruDetayModal from "./DuyuruDetayModal";


export default class DuyurularGridItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            duyuruDetayVisibility:false
        }
    }

    handleModalClose = () =>{

        this.setState({duyuruDetayVisibility:false})

    };

    handleModelDelete() {



    }

    render() {
        return (

            <Grid.Column computer={4} tablet={8} mobile={16}
                         style={{paddingBottom:'2em'}}>
                <Card fluid >

                    <Card.Content>
                        <Card.Header>Duyuru</Card.Header>
                        <Card.Meta style={{color:'#212121'}} >{this.props.data.announcement}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Card.Meta style={{color:'#109d58'}}>Oluşturulma Tarihi: &nbsp; {this.props.data.created_at}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <a onClick={() => this.setState({duyuruDetayVisibility:true})}>
                            <Icon name='announcement' />
                            Duyuruyu Gör
                        </a>
                    </Card.Content>
                </Card>
                {this.state.duyuruDetayVisibility ? <DuyuruDetayModal data={this.props.data}
                                                                      call={this.handleModalClose}
                                                                      />

                                                                        : null}
            </Grid.Column>






        );
    }

}