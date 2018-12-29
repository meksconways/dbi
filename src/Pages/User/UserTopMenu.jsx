import React, {Component} from 'react'
import {Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

export default class UserTopMenu extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Menu stackable attached inverted style={{backgroundColor:'#c54545'}}>



                    <Menu.Item header>
                        <NavLink to={"/"}>
                            Diyabetli Birey İzlem
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item name={'Ana Sayfa'}
                    >
                        <NavLink to={"/"}>Ana Sayfa</NavLink>
                    </Menu.Item>

                    <Menu.Item name='Duyurular' >
                        <NavLink to={"/user-duyurular"}>
                            Duyurular
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item name='Biyolojik Değerlerim' >
                        <NavLink to={"/user-biyolojik-degerler"}>
                            Biyolojik Değerlerim
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item name='Kan Değerlerim' >
                        <NavLink to={"/user-kan-degerleri"}>
                            Kan Değerlerim
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item
                        name='SSS'
                    >
                        <NavLink to={"/user-faqs"}>SSS</NavLink>
                    </Menu.Item>
                    <Menu.Item
                        name='Hata Raporu Gönder'
                    >
                        <NavLink to={"/user-errorreport"}>Hata Raporu Gönder</NavLink>
                    </Menu.Item>

                    <Menu.Item
                        name='Şikayet Et'
                    >
                        <NavLink to={"/user-complaint"}>Şikayet Et</NavLink>
                    </Menu.Item>

                    <Menu.Item
                        name='Geri Bildirim Gönder'
                    >
                        <NavLink to={"/user-feedback"}>Geri Bildirim Gönder</NavLink>
                    </Menu.Item>


                </Menu>
            </div>
        );
    }

}