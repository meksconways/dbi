import React, {Component} from 'react'
import {Button, Divider, Form, Icon, Modal, TextArea} from "semantic-ui-react";
import {fetchManagerFaqsDelete, fetchManagerFaqsPatch} from "../Networking/ApiFetchService";

export default class FaqsDetayModal extends Component{

    constructor(props) {
        super(props);
        this.state = {
            buttonDisabled : true,
            data:{
                question:'',
                answer:''
            },
            buttonLoading: false,
            deleteLoading:false

        }

    }

    faqSil = () =>{

        this.setState({deleteLoading:true});
        fetchManagerFaqsDelete(this.props.data.id,res =>{

            if ((typeof res).toString() === "undefined") {

                // route login
                this.setState({deleteLoading:false});

            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({deleteLoading:false});

                } else if (res.status >=200 && res.status < 300) {

                    this.setState({deleteLoading:false});
                    window.location.href="/sss";
                }

            }


        });

    };

    faqDuzenle=()=>{

        this.setState({buttonLoading:true});

        fetchManagerFaqsPatch(this.props.data.id,this.state.data,res =>{

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

    componentWillMount() {
        this.setState({
            data:{

                question: this.props.data.question,
                answer: this.props.data.answer

            }});
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

    render() {
        return (
            <Modal defaultOpen onClose={this.props.closeFaqDetay}>
                <Modal.Header>Sıkça Sorulan Soru Detay</Modal.Header>
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
                    <Button  colored compact color={'red'} loading={this.state.deleteLoading}
                             onClick={this.faqSil}>
                        <Icon name='trash' /> Sil
                    </Button>

                    <Button  colored compact color={'blue'}
                             disabled={this.state.buttonDisabled}
                             loading={this.state.buttonLoading}
                             onClick={this.faqDuzenle}>
                        <Icon name='edit' /> Güncelle
                    </Button>

                </Modal.Actions>
            </Modal>
        );
    }


}