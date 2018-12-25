import React, {Component} from 'react'
import {Button, Form, Icon, Modal, TextArea} from "semantic-ui-react";
import {fetchManagerDuyuruPost} from "../Networking/ApiFetchService";



export default class DuyuruEkleModal extends Component{


    constructor(props) {
        super(props);
        this.state = {
            disabled : true,
            announcement:'',
            buttonLoading: false
        }
    }

    handleText = (e,v) =>{

        this.setState({announcement:v.value});
        if (v.value.trim().length > 3){
            this.setState({disabled:false});
        } else{
            this.setState({disabled:true});
        }


    };

    duyuruEkle = () => {

        this.setState({buttonLoading:true});

        fetchManagerDuyuruPost({announcement: this.state.announcement},res =>{

            if ((typeof res).toString() === "undefined") {

                // route login
                this.setState({buttonLoading:false});

            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({buttonLoading:false});

                } else if (res.status >=200 && res.status < 300) {
                    this.setState({buttonLoading:false});
                    window.location.href="/duyurular";
                }

            }

        });




    };


    render() {
        return (

                <Modal defaultOpen onClose={this.props.closeCall}>
                    <Modal.Header>Duyuru Ekle</Modal.Header>
                    <Modal.Content  scrolling>


                        <Modal.Description>
                            <Form>
                                <TextArea onChange={this.handleText}
                                          autoHeight
                                          placeholder='Duyuru Metni'
                                          style={{ minHeight: 100 }}
                                          value={this.state.announcement}
                                />
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button  colored compact color={'teal'}
                                 disabled={this.state.disabled}
                                 loading={this.state.buttonLoading}
                                onClick={this.duyuruEkle}>
                            <Icon name='add' /> Duyuru Ekle
                        </Button>

                    </Modal.Actions>
                </Modal>

        );
    }


}