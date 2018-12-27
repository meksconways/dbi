import React, {Component} from 'react'
import {Button, Divider, Form, Header, Icon, Modal} from "semantic-ui-react";
import Timekeeper from 'react-timekeeper';
import PickyDateTime from 'react-picky-date-time';
import {
    fetchManagerKanDegerleriDelete,
    fetchManagerKanDegerleriPatch,
    fetchManagerUserProfileGet
} from "../Networking/ApiFetchService";

export default class KanDegeriDetayModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id:this.props.data.userid,
            btnLoading:false,
            btnDisabled:false,
            delBtnLoading:false,
            data:{
                aclik_kan_seker_deger:'',
                tokluk_kan_seker_deger:'',
                nabiz:'',
                tansiyon:'',
                tarih:''

            },
            name:'Yükleniyor...',
            showPickyDateTime: true,
            date: '',
            month: '',
            year: '',
            dateFormat24:''
        }
    }

    render() {
        return (
            <Modal defaultOpen onClose={this.props.call}>

                <Modal.Header style={{backgroundColor:'#f00000',color:'white'}}>
                    <Icon name={"heartbeat"}/>
                    Kan Değeri Detay</Modal.Header>
                <Modal.Content  scrolling>


                    <Modal.Description>

                        <Header as={'h2'}>{this.state.name}</Header>
                        <Divider/>
                        <Form>
                            <Form.Group>
                                <Form.Input label='Açlık Kan Şeker Değeri'
                                            placeholder='Açlık Kan Şeker Değeri'
                                            onChange={this.handleAclikDeger}
                                            defaultValue={this.props.data.aclik_kan_seker_deger}
                                            width={4} />

                                <Form.Input label='Tokluk Kan Şeker Değeri'
                                            placeholder='Tokluk Kan Şeker Değeri'
                                            defaultValue={this.props.data.tokluk_kan_seker_deger}
                                            onChange={this.handleToklukDeger}
                                            width={4} />

                            </Form.Group>
                            <Form.Group>
                                <Form.Input label='Nabız'
                                            placeholder='Nabız'
                                            defaultValue={this.props.data.nabiz}
                                            onChange={this.handleNabizDeger}
                                            width={4} />

                                <Form.Input label='Tansiyon'
                                            placeholder='Tansiyon'
                                            defaultValue={this.props.data.tansiyon}
                                            onChange={this.handleTansiyonDeger}
                                            width={4} />

                            </Form.Group>

                            <Form.Group
                            >
                                <PickyDateTime
                                    size="s"// 'xs', 's', 'm', 'l'
                                    mode={0} //0: calendar only, 1: calendar and clock, 2: clock only; default is 0
                                    locale={`tr-tr`}// 'en-us' or 'zh-cn'; default is en-us
                                    show={true} //default is false
                                    onClose={() => this.setState({ showPickyDateTime: true })}
                                    onYearPicked={res => this.onYearPicked(res)}
                                    onMonthPicked={res => this.onMonthPicked(res)}
                                    onDatePicked={res => this.onDatePicked(res)}
                                    onResetDate={res => this.onResetDate(res)}
                                    onResetDefaultDate={res => this.onResetDefaultDate(res)}
                                    style={{marginRight:'2em'}}
                                />


                                <Timekeeper

                                    style={{marginLeft:'2em'}}
                                    onChange={(res) => this.onFormattedDateChanged(res)}
                                    config={{
                                        TIMEPICKER_BACKGROUND: 'white',
                                        FONT_FAMILY: '"Open Sans", sans-serif',
                                        CLOCK_WRAPPER_BACKGROUND : '#fafafa'
                                    }}

                                />

                                <Form.Input label='Tarih'
                                            placeholder='Tarih'
                                            width={4}
                                            transparent={true}
                                            onChange={this.handleDateDeger}
                                            value={this.state.year+'-'
                                            +this.state.month+'-'+
                                            this.state.date+' '+
                                            this.state.dateFormat24}
                                />


                            </Form.Group>

                        </Form>

                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button  colored={true} compact color={'red'}
                             loading={this.state.delBtnLoading}
                             onClick={this.sil}>
                        <Icon name='trash alternate'/> Sil
                    </Button>

                    <Button  colored={true} compact color={'green'}
                             disabled={this.state.btnDisabled}
                             loading={this.state.btnLoading}
                             onClick={this.guncelle}>
                        <Icon name='add' /> Güncelle
                    </Button>

                </Modal.Actions>


            </Modal>
        );
    }


    getUser = () => {

        fetchManagerUserProfileGet(this.props.data.userid,res => {

            if ((typeof res).toString() === "undefined") {

                // route login
                this.setState({btnLoading:false});

            }else{

                if (res.status >= 400 && res.status < 500){



                } else if (res.status >=200 && res.status < 300) {

                    this.setState({name:res.data.data.name_surname})

                }

            }


        });

    };
    componentWillMount() {
        this.setState({data:this.props.data});


        this.getUser();
        const tarih = this.props.data.tarih;

        this.setState({year: tarih.substr(0,4)});
        this.setState({month:tarih.substr(5,2)});
        this.setState({date:tarih.substr(8,2)});
        this.setState({dateFormat24:tarih.substr(11,5)});
    }
    guncelle = () =>{

        this.setState({btnLoading:true});
        fetchManagerKanDegerleriPatch(this.props.data.id,{
            userid:this.state.user_id,
            aclik_kan_seker_deger: this.state.data.aclik_kan_seker_deger,
            tokluk_kan_seker_deger: this.state.data.tokluk_kan_seker_deger,
            nabiz: this.state.data.nabiz,
            tansiyon: this.state.data.tansiyon,
            tarih:this.state.year+'-'+this.state.month+'-'+this.state.date+
                ' '+this.state.dateFormat24
        },res=>{

            if ((typeof res).toString() === "undefined") {

                // route login
                this.setState({btnLoading:false});

            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({btnLoading:false});

                } else if (res.status >=200 && res.status < 300) {
                    this.setState({btnLoading:false});
                    window.location.href="/kan-degerleri";

                }

            }


        });

    };

    sil = () => {

        this.setState({delBtnLoading:true});
        fetchManagerKanDegerleriDelete(this.props.data.id,res=>{

            if ((typeof res).toString() === "undefined") {

                // route login
                this.setState({btnLoading:false});

            }else{

                if (res.status >= 400 && res.status < 500){

                    this.setState({btnLoading:false});

                } else if (res.status >=200 && res.status < 300) {
                    this.setState({btnLoading:false});
                    window.location.href="/kan-degerleri";

                }

            }


        });

    };


    componentWillUnmount() {

        // memory leak olmaması için
        this.setState(null);

    }

    handleAclikDeger = (e) =>{

        this.setState({data:{
                aclik_kan_seker_deger:e.target.value,
                tokluk_kan_seker_deger:this.state.data.tokluk_kan_seker_deger,
                nabiz:this.state.data.nabiz,
                tansiyon:this.state.data.tansiyon,
                tarih:this.state.year+'-'
                    +this.state.month+'-'+
                    this.state.date+' '+
                    this.state.dateFormat24
            }});




    };
    handleToklukDeger = (e) =>{
        this.setState({data:{
                aclik_kan_seker_deger:this.state.data.aclik_kan_seker_deger,
                tokluk_kan_seker_deger:e.target.value,
                nabiz:this.state.data.nabiz,
                tansiyon:this.state.data.tansiyon,
                tarih:this.state.year+'-'
                    +this.state.month+'-'+
                    this.state.date+' '+
                    this.state.dateFormat24
            }});


    };
    handleNabizDeger = (e) =>{

        this.setState({data:{
                aclik_kan_seker_deger:this.state.data.aclik_kan_seker_deger,
                tokluk_kan_seker_deger:this.state.data.tokluk_kan_seker_deger,
                nabiz:e.target.value,
                tansiyon:this.state.data.tansiyon,
                tarih:this.state.year+'-'
                    +this.state.month+'-'+
                    this.state.date+' '+
                    this.state.dateFormat24
            }});



    };
    handleTansiyonDeger = (e) => {

        this.setState({data:{
                aclik_kan_seker_deger:this.state.data.aclik_kan_seker_deger,
                tokluk_kan_seker_deger:this.state.data.tokluk_kan_seker_deger,
                nabiz:this.state.data.nabiz,
                tansiyon:e.target.value,
                tarih:this.state.year+'-'
                    +this.state.month+'-'+
                    this.state.date+' '+
                    this.state.dateFormat24
            }});


    };
    handleDateDeger = () =>{
        this.setState({data:{
                aclik_kan_seker_deger:this.state.data.aclik_kan_seker_deger,
                tokluk_kan_seker_deger:this.state.data.tokluk_kan_seker_deger,
                nabiz:this.state.data.nabiz,
                tansiyon:this.state.data.tansiyon,
                tarih:this.state.year+'-'
                    +this.state.month+'-'+
                    this.state.date+' '+
                    this.state.dateFormat24
            }});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.data !== this.state.data){
            if (this.state.data.aclik_kan_seker_deger.length > 0 &&
                this.state.data.tokluk_kan_seker_deger.length > 0 &&
                this.state.data.nabiz.length > 0 &&
                this.state.data.tansiyon.length > 0 &&
                this.state.data.tarih.length > 15
            ){

                this.setState({btnDisabled:false});

            }else{
                this.setState({btnDisabled:true});
            }
        }



    }


    onFormattedDateChanged = (res) =>{

        this.setState({dateFormat24:res.formatted24});

    };

    onYearPicked(res) {
        const { year } = res;
        this.setState({ year: year});
    }

    onMonthPicked(res) {
        const { month, year } = res;
        this.setState({ year: year, month: month});
    }

    onDatePicked(res) {
        const { date, month, year } = res;
        this.setState({ year: year, month: month,date:date });
    }

    onResetDate(res) {
        const { date, month, year } = res;
        this.setState({ year: year, month: month,date:date });
    }


}