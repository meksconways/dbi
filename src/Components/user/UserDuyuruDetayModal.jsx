import React, {Component} from 'react'

import {Button, Form, Icon, Modal, TextArea} from "semantic-ui-react";

export default class UserDuyuruDetayModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }

    }

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
                                <TextArea
                                    autoHeight
                                    placeholder='Duyuru Detay'
                                    style={{ minHeight: 100 }}
                                    value={this.state.data.announcement}
                                />
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>

                    <Button danger color={'red'} onClick={this.props.call}>
                        <Icon name='power off' /> Kapat
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }


}