import React, {Component} from 'react'
import {Button, Header, Segment} from "semantic-ui-react";
import DuyuruDetayModal from "./DuyuruDetayModal";
import FaqsDetayModal from "./FaqsDetayModal";

export default class FaqsItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            faqDetayVisibility:false
        }
    }

    handleModalClose = () =>{

        this.setState({faqDetayVisibility:false})

    };

    render() {
        return (
            <div style={{paddingTop:'2em',paddingLeft:'2em',paddingRight:'2em',paddingBottom:'2em',
                borderTopColor:'#000',borderTopWidth:'2px'}}>
                <Header as='h2' style={{textTransform:'capitalize'}}>
                    {this.props.data.question}
                </Header>
                <Segment attached>{this.props.data.answer}</Segment>
                <div style={{marginTop:'1em'}}>
                    <Button compact color='orange' onClick={() => this.setState({faqDetayVisibility:true})}>
                        Düzenle
                    </Button>
                </div>

                {this.state.faqDetayVisibility ? <FaqsDetayModal data={this.props.data}
                                                                      closeFaqDetay={this.handleModalClose}
                    />

                    : null}

            </div>
        );
    }



}
