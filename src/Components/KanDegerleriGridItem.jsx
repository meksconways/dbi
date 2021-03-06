import React, {Component} from 'react'
import {Button, Card, Grid, Header, Icon} from 'semantic-ui-react'
import KanDegeriDetayModal from "./KanDegeriDetayModal";


export default class KanDegerleriGridItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            modalVisibility:false
        }
    }


    handleModalClose = () =>{
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
                            <Card.Header><Icon name={"heartbeat"} color={'red'} size={"huge"}/></Card.Header>

                        </Card.Content>
                        <Card.Content>
                            <Header as={'h4'}>Açlık Kan Şeker Değeri:&nbsp;{this.props.data.aclik_kan_seker_deger}</Header>
                            <Header as={'h4'}>Tokluk Kan Şeker Değeri:&nbsp;{this.props.data.tokluk_kan_seker_deger}</Header>
                            <Header as={'h4'}>Nabız:&nbsp;{this.props.data.nabiz}</Header>
                            <Header as={'h4'}>Tansiyon:&nbsp;{this.props.data.tansiyon}</Header>
                            <Header as={'h4'}>Tarih:&nbsp;{this.props.data.tarih}</Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Meta style={{color:'#00b5ad'}}>Oluşturulma Tarihi: &nbsp; {this.props.data.created_at}</Card.Meta>
                        </Card.Content>
                        <Card.Content>
                            <Button compact color='red' content='Detay'
                                    fluid onClick={() => this.setState({modalVisibility:true})}
                            />
                        </Card.Content>

                        {this.state.modalVisibility ?
                        <KanDegeriDetayModal data={this.props.data} call={this.handleModalClose}/>
                        :
                            null
                        }

                    </Card>
                </Grid.Column>



        );
    }


};