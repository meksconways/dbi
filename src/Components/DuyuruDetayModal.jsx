import React, {Component} from 'react'

import {Button, Header, Icon, Image, Input, Modal} from 'semantic-ui-react'
import {fetchManagerDuyuruDelete} from "../Networking/ApiFetchService";

export default class DuyuruDetayModal extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:{},
        }
    }



    duyuruSil = () =>{

        fetchManagerDuyuruDelete(this.state.data.id,res=>{




            if ((typeof res).toString() === "undefined") {

                // route login

            }else{

                if (res.status >= 400 && res.status < 500){


                } else if (res.status >=200 && res.status < 300) {
                }

            }



        });


    };



    componentWillMount() {
        this.setState({data:this.props.data})
    }



    handleDuyuruInput = () =>{




    };

    render() {
        return (

                <Modal defaultOpen onClose={this.props.call}>
                    <Modal.Header>Duyuru Detay</Modal.Header>
                    <Modal.Content image scrolling>

                       <Icon size='large' name='announcement' wrapped />

                        <Modal.Description>
                            <Input defaultValue = {this.props.data.announcement}
                                   placeholder='Duyuru Düzenle'
                                   type = 'text'
                                   onChange={this.handleDuyuruInput}
                                   id={'txt_email'}>
                                <input />
                            </Input>

                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button primary >
                             <Icon name='edit' /> Düzenle
                        </Button>
                        <Button primary color={'red'} onClick={this.duyuruSil}>
                             <Icon name='delete' /> Sil
                        </Button>
                    </Modal.Actions>
                </Modal>

        );
    }





}