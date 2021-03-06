import React, {Component} from 'react'
import {Card, Grid, Header, Icon} from 'semantic-ui-react'

export default class BiyolojikDegerlerGridItem extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Grid.Column
                computer={4} tablet={8} mobile={16}
                style={{paddingBottom:'2em'}}

            >
                <Card fluid >
                    <Card.Content>
                        <Card.Header><Icon name={"user md"} color={'green'} size={"huge"}/></Card.Header>

                    </Card.Content>
                    <Card.Content>
                        <Header as={'h4'}>HBA1C:&nbsp;{this.props.data.hba1c}</Header>
                        <Header as={'h4'}>LDL:&nbsp;{this.props.data.ldl}</Header>
                        <Header as={'h4'}>HDL:&nbsp;{this.props.data.hdl}</Header>
                        <Header as={'h4'}>TRIGLISERID:&nbsp;{this.props.data.trigliserid}</Header>
                        <Header as={'h4'}>TARİH:&nbsp;{this.props.data.tarih}</Header>
                    </Card.Content>

                    <Card.Content extra>
                        <Card.Meta style={{color:'#00b5ad'}}>Oluşturulma Tarihi: &nbsp; {this.props.data.created_at}</Card.Meta>
                    </Card.Content>

                </Card>
            </Grid.Column>
        );
    }


}