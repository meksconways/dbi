import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
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
                        <NavLink to={"/"}>
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

                    <Menu.Item name='Biyolojik Değerler' >
                        <NavLink to={"/biyolojik-degerler"}>
                            Biyolojik Değerler
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item name='Kan Değerleri' >
                        <NavLink to={"/kan-degerleri"}>
                            Kan Değerleri
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

                        <NavLink to={"/sikayetler"}>Şikayetler</NavLink>
                    </Menu.Item>

                    <Menu.Item
                        name='Geri Bildirimler'
                    >

                        <NavLink to={"/feedbacks"}>Geri Bildirimler</NavLink>
                    </Menu.Item>

                    <Menu.Item
                        name='Profilim'
                        >

                        <NavLink to={"/manager-profile"}>Profilim</NavLink>
                    </Menu.Item>

                </Menu>
            </div>
        );
    }

}

