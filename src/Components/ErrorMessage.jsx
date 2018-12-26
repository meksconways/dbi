import React, {Component} from 'react'
import {Header} from "semantic-ui-react";



export default class ErrorMessage extends Component{


    constructor(props){
        super(props)
    }

    render() {
        return(


                <Header as={'h5'} color={'red'} textAlign={'center'}>
                    {this.props.message}

                </Header>


        );
    }


}