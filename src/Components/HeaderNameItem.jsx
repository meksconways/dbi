import React, {Component} from 'react'
import {Divider, Header} from 'semantic-ui-react'

export default class HeaderNameItem extends Component{


    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div style={{paddingTop:'2em',paddingRight:'2em',paddingLeft:'2em'}}>
                <Header as='h1'>{this.props.title}</Header>
                <Divider></Divider>

            </div>
        );
    }

}
