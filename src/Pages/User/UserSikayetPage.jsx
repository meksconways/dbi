import React, {Component} from 'react'
import HeaderNameItem from "../../Components/HeaderNameItem";
import {Button, Form, Modal, Segment, TextArea} from "semantic-ui-react";
import {fetchUserSikayetPost} from "../../Networking/ApiFetchService";

export default class UserSikayetPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            complaint:'',
            btnDisabled:true,
            btnLoading:false,
            modalsize:'miny',
            modalVisibility:false,
        }
    }


    handleText = (e) => {

        this.setState({complaint:e.target.value});
        if (this.state.complaint.length > 2){
            this.setState({btnDisabled:false});
        } else{
            this.setState({btnDisabled:true});
        }

    };
    componentWillMount() {
        document.title = 'Şikayet Et • Diyabetli Birey İzlem';
    }

    sikayetEt = () => {

        this.setState({btnLoading:true});
        fetchUserSikayetPost({

            complaint:this.state.complaint

        },res => {
            if ((typeof res).toString() === "undefined") {

                // route login
                this.setState({buttonLoading:false});

            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({buttonLoading:false});

                } else if (res.status >=200 && res.status < 300) {
                    this.setState({buttonLoading:false});
                    this.setState({modalVisibility:true});
                }

            }


        });

    };

    render() {
        return (
            <div>
                <HeaderNameItem title={'Şikayet Et'}/>

                <Segment basic style={{marginLeft:'1em',marginRight:'1em'}} >
                    <Form>
                        <TextArea onChange={this.handleText}
                                  autoHeight
                                  placeholder='Şikayet Metni'
                                  style={{ minHeight: 200 }}
                        />

                        <Button style={{marginTop:'1em'}} color={'red'}
                                colored={true}
                                disabled={this.state.btnDisabled}
                                loading={this.state.btnLoading}
                                onClick={this.sikayetEt}
                        >
                            Gönder</Button>

                    </Form>

                    <Modal size={this.state.size} open={this.state.modalVisibility} onClose={this.modalClose}>
                        <Modal.Content>
                            <p>Şikayetiniz Gönderildi</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button positive content='Tamam'
                                    onClick={() => {window.location.href = "/user-complaint"}}
                            />
                        </Modal.Actions>
                    </Modal>


                </Segment>


            </div>
        );
    }

}