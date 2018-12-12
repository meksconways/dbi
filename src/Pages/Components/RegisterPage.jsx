import React, {Component} from 'react'
import {
    Card,
    Button,
    Image,
    Segment,
    Container,
    Responsive,
    Grid,
    Form,
    Checkbox,
    Input,
    Icon,
    Divider, Header
} from 'semantic-ui-react'

import Background from '../../images/diabetesbackground.jpeg'
import {NavLink} from "react-router-dom";


export default class RegisterPage extends Component{

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        document.title = 'Giriş Yap • Diyabetli Birey İzlem'
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot)
    }

    render() {
        console.log("renderin içi")
        return(

            <Container fluid>

                <Grid

                    textAlign={'center'}
                    style={{paddingTop:'8em'}}

                >

                    <Grid.Row

                    >
                        <Card>
                            <Card.Content>
                                <Card.Header style={{textAlign:'center'}}>Gaydol</Card.Header>
                                <Card.Meta>
                                    <Form>
                                        <Form.Field>
                                            <label>E-Posta</label>
                                            <Input iconPosition='left' placeholder='Email' type = 'Email'>
                                                <Icon name='at'/>
                                                <input />
                                            </Input>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>İsim ve Soyisim</label>
                                            <Input iconPosition='left' placeholder='İsim ve Soyisim' type = 'text'>
                                                <Icon name='user circle'/>
                                                <input />
                                            </Input>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Parola</label>
                                            <Input iconPosition='left' placeholder='Parola' type ='Password'>
                                                <Icon name='lock' />
                                                <input />
                                            </Input>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Parola Tekrar</label>
                                            <Input iconPosition='left' placeholder='Parola Tekrar' type ='Password'>
                                                <Icon name='lock' />
                                                <input />
                                            </Input>
                                        </Form.Field>

                                        <Divider clearing={true}
                                                 hidden
                                        >

                                        </Divider>

                                        <Button inverted color='blue'
                                                fluid
                                                circular
                                        >
                                            Kaydol
                                        </Button>



                                    </Form>
                                </Card.Meta>

                            </Card.Content>

                        </Card>

                    </Grid.Row>

                    <Segment basic>Zaten bir hesabın mı var ? &nbsp;
                        <NavLink to={'/login'}>
                            <a href = '#'>Giriş Yap</a>
                        </NavLink>


                    </Segment>


                </Grid>
            </Container>



        );
    }

}