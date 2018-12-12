import React, {Component} from 'react'
import {Header} from "semantic-ui-react";
import {Form} from "semantic-ui-react/dist/commonjs/collections/Form/Form";


export default class ErrorMessage extends Component{


    constructor(props){
        super(props)
    }

    render() {
        return(


                <Header key={this.props.message_key} as={'h4'} color={'red'} textAlign={'center'}>
                    {this.props.message}

                </Header>


        );
    }


}