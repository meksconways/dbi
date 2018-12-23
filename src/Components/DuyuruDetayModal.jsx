import React, {Component} from 'react'

import {Button, Form, Icon, Modal, TextArea} from 'semantic-ui-react'
import {fetchManagerDuyuruDelete, fetchManagerDuyuruPatch} from "../Networking/ApiFetchService";

export default class DuyuruDetayModal extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:{},
            isSameText:true,
            announcement:this.props.data.announcement
        }
    }



    duyuruSil = () =>{
        fetchManagerDuyuruDelete(this.state.data.id,res=>{
            if ((typeof res).toString() === "undefined") {

                // route login

            }else{

                if (res.status >= 400 && res.status < 500){


                } else if (res.status >=200 && res.status < 300) {
                    window.location.href="/duyurular";
                }

            }

        });


    };

    handleText =(e,v)=>{
        this.setState({announcement:v.value});
        if(this.props.data.announcement!==v.value){
            this.setState({isSameText:false});
        }else{
            this.setState({isSameText:true});
        }
    };

    duyuruDuzenle = () =>{

        fetchManagerDuyuruPatch(this.state.data.id,{announcement: this.state.announcement},res =>{

            console.log(res);

            if ((typeof res).toString() === "undefined") {

                // route login

            }else{

                if (res.status >= 400 && res.status < 500){


                } else if (res.status >=200 && res.status < 300) {
                    window.location.href="/duyurular";
                }

            }


        });

    };

    componentWillMount() {

        this.setState({data:this.props.data})
    }


    render() {
        return (

                <Modal defaultOpen onClose={this.props.call}>
                    <Modal.Header>Duyuru Detay</Modal.Header>
                    <Modal.Content  scrolling>


                        <Modal.Description>
                            <Form>
                                <TextArea onChange={this.handleText}
                                          autoHeight
                                          placeholder='Duyuru Düzenle'
                                          style={{ minHeight: 100 }}
                                          value={this.state.announcement}
                                />
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        {
                            !this.state.isSameText ?
                                <Button style={{backgroundColor:"#109d58",color:"white"}} onClick={this.duyuruDuzenle}>
                                    <Icon name='edit' /> Güncelle
                                </Button>
                                :null
                        }
                        <Button danger color={'red'} onClick={this.duyuruSil}>
                             <Icon name='trash alternate' /> Sil
                        </Button>
                    </Modal.Actions>
                </Modal>

        );
    }





}