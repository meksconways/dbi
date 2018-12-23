import React, {Component} from 'react'
import {Dropdown, Input, Menu,} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";


export default class ManagerTopMenu extends Component {
    render() {


        return (
            <div >
                <Menu inverted stackable attached>

                    <Menu.Item>

                            <img src='https://react.semantic-ui.com/logo.png' />

                    </Menu.Item>

                    <Menu.Item header>
                        <NavLink to={""}>
                            Diyabetli Birey İzlem
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item
                        >
                        <NavLink to={"/"}>Kullanıcılar</NavLink>
                    </Menu.Item>

                    <Menu.Item name='Duyurular' >
                        <NavLink to={"/duyurular"}>
                            Duyurular
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item
                        name='SSS'
                        >

                        <NavLink to={"/sss"}>SSS</NavLink>
                    </Menu.Item>

                    <Menu.Item
                        name='Şikayetler'
                       >

                        <NavLink to={"/sikayetler"}>Sikayetler</NavLink>
                    </Menu.Item>

                    <Menu.Item
                        name='Profilim'
                        >

                        <NavLink to={""}>Profilim</NavLink>
                    </Menu.Item>

                </Menu>
            </div>
        );
    }

}
