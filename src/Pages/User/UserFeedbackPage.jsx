import React, {Component} from 'react'
import HeaderNameItem from "../../Components/HeaderNameItem";
import {Button, Form, Modal, Segment, TextArea} from "semantic-ui-react";
import {fetchUserFeedbacksPost} from "../../Networking/ApiFetchService";


export default class UserFeedbackPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feedback:'',
            btnDisabled:true,
            btnLoading:false,
            modalsize:'miny',
            modalVisibility:false,
        }
    }

    handleText = (e) => {

        this.setState({feedback:e.target.value});
        if (this.state.feedback.length > 2){
            this.setState({btnDisabled:false});
        } else{
            this.setState({btnDisabled:true});
        }

    };

    geriBildirimGonder = () => {

        this.setState({btnLoading:true});
        fetchUserFeedbacksPost({

            feedback:this.state.feedback

        }, res => {

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

    componentWillMount() {
        document.title = 'Geri Bildirim Gönder • Diyabetli Birey İzlem';
    }


    render() {
        return (
            <div>
                <HeaderNameItem title={'Geri Bildirim Gönder'}/>

                <Segment basic style={{marginLeft:'1em',marginRight:'1em'}} >
                    <Form>
                        <TextArea onChange={this.handleText}
                                  autoHeight
                                  placeholder='Geri Bildirim Metni'
                                  style={{ minHeight: 200 }}
                        />

                        <Button style={{marginTop:'1em'}} color={'green'}
                                colored={true}
                                disabled={this.state.btnDisabled}
                                loading={this.state.btnLoading}
                                onClick={this.geriBildirimGonder}
                        >
                            Gönder</Button>

                    </Form>

                    <Modal size={this.state.size} open={this.state.modalVisibility} onClose={this.modalClose}>
                        <Modal.Content>
                            <p>Geri Bildirim Gönderildi</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button positive content='Tamam'
                                    onClick={() => {window.location.href = "/user-feedback"}}
                            />
                        </Modal.Actions>
                    </Modal>


                </Segment>


            </div>
        );
    }


}