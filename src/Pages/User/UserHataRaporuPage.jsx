import React, {Component} from 'react'
import {Button, Form, Modal, Segment, TextArea} from "semantic-ui-react";
import {fetchUserErrorReportsPost} from "../../Networking/ApiFetchService";
import HeaderNameItem from "../../Components/HeaderNameItem";


export default class UserHataRaporuPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            report:'',
            btnDisabled:true,
            btnLoading:false,
            modalsize:'miny',
            modalVisibility:false,
        }
    }

    handleText = (e) => {

        this.setState({report:e.target.value});
        if (this.state.report.length > 2){
            this.setState({btnDisabled:false});
        } else{
            this.setState({btnDisabled:true});
        }

    };

    componentWillMount() {
        document.title = 'Hata Raporu Gönder • Diyabetli Birey İzlem';
    }

    hataRaporuGonder = () => {

        this.setState({btnLoading:true});
        fetchUserErrorReportsPost({

            report:this.state.report

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


        })

    };

    modalClose = () => {
      this.setState({modalVisibility:false});
    };

    render() {
        return (
            <div>
                <HeaderNameItem title={'Hata Raporu Gönder'}/>

                <Segment basic style={{marginLeft:'1em',marginRight:'1em'}} >
                    <Form>
                        <TextArea onChange={this.handleText}
                                  autoHeight
                                  placeholder='Hata Raporu Metni'
                                  style={{ minHeight: 200 }}
                                />

                        <Button style={{marginTop:'1em'}} color={'red'}
                                colored={true}
                                disabled={this.state.btnDisabled}
                                loading={this.state.btnLoading}
                                onClick={this.hataRaporuGonder}
                        >
                            Gönder</Button>

                    </Form>

                    <Modal size={this.state.size} open={this.state.modalVisibility} onClose={this.modalClose}>
                        <Modal.Content>
                            <p>Hata Raporu Gönderildi</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button positive content='Tamam'
                            onClick={() => {window.location.href = "/user-errorreport"}}
                            />
                        </Modal.Actions>
                    </Modal>


                </Segment>


            </div>
        );
    }


}