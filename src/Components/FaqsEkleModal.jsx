import React, {Component} from 'react'
import {Button, Divider, Form, Icon, Modal, TextArea} from "semantic-ui-react";
import {fetchManagerFaqsPost} from "../Networking/ApiFetchService";


export default class FaqsEkleModal extends Component{

    constructor(props) {
        super(props);
        this.state = {
            buttonDisabled : true,
            data:{
              question:'',
              answer:''
            },
            buttonLoading: false
        }
    }

    handleQuestionText = (e,v) =>{

        this.setState({
            data:{
                question: v.value,
                answer: this.state.data.answer
            }
        });

        if (this.state.data.question.trim().length > 2 && this.state.data.answer.trim().length > 2) {
            this.setState({buttonDisabled:false})
        }else{
            this.setState({buttonDisabled:true})
        }


    };

    handleAnswerText = (e,v) =>{

        this.setState({
            data:{
                question: this.state.data.question,
                answer: v.value
            }
        });

        if (this.state.data.question.trim().length > 2 && this.state.data.answer.trim().length > 2) {
            this.setState({buttonDisabled:false})
        }else{
            this.setState({buttonDisabled:true})
        }
    };

    addFaq = () =>{

        this.setState({buttonLoading:true});

        fetchManagerFaqsPost(this.state.data,res =>{

            if ((typeof res).toString() === "undefined") {

                // route login
                this.setState({buttonLoading:false});

            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({buttonLoading:false});

                } else if (res.status >=200 && res.status < 300) {
                    this.setState({buttonLoading:false});
                    window.location.href="/sss";
                }

            }

        });


    };


    render() {
        return (
            <Modal defaultOpen onClose={this.props.closeCall}>
                <Modal.Header>Sıkça Sorulan Soru Ekle</Modal.Header>
                <Modal.Content  scrolling>

                    <Modal.Description>
                        <Form>
                                <TextArea onChange={this.handleQuestionText}
                                          autoHeight
                                          placeholder='Soru Metni'
                                          style={{ minHeight: 100 }}
                                          value={this.state.data.question}
                                />
                        </Form>

                        <Divider hidden={'true'}/>

                        <Form>
                                <TextArea onChange={this.handleAnswerText}
                                          autoHeight
                                          placeholder='Cevap Metni'
                                          style={{ minHeight: 100 }}
                                          value={this.state.data.answer}
                                />
                        </Form>

                    </Modal.Description>





                </Modal.Content>
                <Modal.Actions>
                    <Button  colored compact color={'teal'}
                             disabled={this.state.buttonDisabled}
                             loading={this.state.buttonLoading}
                             onClick={this.addFaq}>
                        <Icon name='add' /> Oluştur
                    </Button>

                </Modal.Actions>
            </Modal>
        );
    }



}