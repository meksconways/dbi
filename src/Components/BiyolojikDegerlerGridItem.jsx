import React, {Component} from 'react'
import {Button, Card, Grid, Header, Icon} from 'semantic-ui-react'
import DuyuruDetayModal from "./DuyuruDetayModal";
import BiyolojikDegerlerDetayModal from "./BiyolojikDegerlerDetayModal";

export default class BiyolojikDegerlerGridItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisibility : false
        }

    }


    handleModalClose = () =>{

        this.setState({modalVisibility:false});

    };

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
                    <Card.Content>
                        <Button compact color='green' content='Detay'
                                fluid onClick={() => this.setState({modalVisibility:true})}
                        />
                    </Card.Content>
                    {this.state.modalVisibility ? <BiyolojikDegerlerDetayModal data={this.props.data}
                                                                    callBDuzenle={this.handleModalClose}
                        />

                        : null}

                </Card>
            </Grid.Column>
        );
    }


}