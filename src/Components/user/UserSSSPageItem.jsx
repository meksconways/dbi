import React, {Component} from 'react'
import {Header, Segment} from "semantic-ui-react";

export default class FaqsItem extends Component{

    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div style={{paddingTop:'2em',paddingLeft:'2em',paddingRight:'2em',paddingBottom:'2em',
                borderTopColor:'#000',borderTopWidth:'2px'}}>
                <Header as='h2' style={{textTransform:'capitalize'}}>
                    {this.props.data.question}
                </Header>
                <Segment attached>{this.props.data.answer}</Segment>

            </div>
        );
    }



}
