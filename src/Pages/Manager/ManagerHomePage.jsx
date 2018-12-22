import React, {Component} from 'react'
import {Dropdown, Input, Menu,} from 'semantic-ui-react'
import UsersPage from "./UsersPage";
import SearchMenuBar from "../../Components/SearchMenuBar";
import HeaderNameItem from "../../Components/HeaderNameItem";


export default class ManagerHomePage extends Component {

    state = {activeItem: 'Kullanıcılar'};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })



    render() {
        const { activeItem } = this.state;

        return (
            <div >
                <Menu inverted stackable>
                    <Menu.Item>
                        <img src='https://react.semantic-ui.com/logo.png' />
                    </Menu.Item>
                    <Menu.Item header>Diyabetli Birey İzlem</Menu.Item>
                    <Menu.Item
                        name='Kullanıcılar'
                        active={activeItem === 'Kullanıcılar'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item name='Duyurular' active={activeItem === 'Duyurular'} onClick={this.handleItemClick} />

                    <Menu.Item
                        name='SSS'
                        active={activeItem === 'SSS'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Şikayetler'
                        active={activeItem === 'Şikayetler'}
                        onClick={this.handleItemClick}
                    />

                    <Menu.Item
                        name='Profilim'
                        active={activeItem === 'Profilim'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item>
                        <Dropdown text='Diğer'>
                            <Dropdown.Menu>
                                <Dropdown.Item text='New' />
                                <Dropdown.Divider />
                                <Dropdown.Item text='Download As...' />
                                <Dropdown.Item text='Publish To Web' />
                                <Dropdown.Item text='E-mail Collaborators' />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item position={'right'}>
                        <Input className='icon' icon='search' placeholder='Kullanıcı Ara...' />
                    </Menu.Item>


                </Menu>



                <HeaderNameItem title={this.state.activeItem}/>

                <UsersPage/>

            </div>
        );
    }


}
