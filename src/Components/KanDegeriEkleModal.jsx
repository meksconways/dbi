import React, {Component} from 'react'
import {Button, Form, Icon, Modal} from "semantic-ui-react";
import Timekeeper from 'react-timekeeper';
import PickyDateTime from 'react-picky-date-time';
import {fetchManagerKanDegerleriPost} from "../Networking/ApiFetchService";

export default class KanDegeriEkleModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id:this.props.data.userid,
            btnLoading:false,
            btnDisabled:true,
            data:{
                aclik_kan_seker_deger:'',
                tokluk_kan_seker_deger:'',
                nabiz:'',
                tansiyon:'',
                tarih:''

            },

            showPickyDateTime: true,
            date: '',
            month: '',
            year: '',
            hour: '',
            minute: '',
            second: '',
            meridiem: 'PM',
            dateFormat24:''


        }

    }


    getDate = () => {
        const date = new Date();
        const output = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) +
            '-' + ("0" + date.getDate()).slice(-2) + ' ' + ("0"+date.getHours()) + ':' + date.getMinutes();
        return output;

    };


    componentWillUnmount() {

        // memory leak ten kaçındık :)
        this.setState(null);

    }

    componentWillMount() {
        const date = new Date();

        this.setState({year:date.getFullYear()});
        this.setState({month:("0" + (date.getMonth() + 1)).slice(-2)});
        this.setState({date:("0" + date.getDate()).slice(-2)});



        let hour = date.getHours();

        if (hour.toString().length < 2){
            hour = '0'+hour
        }

        let minute = date.getMinutes();

        if (minute.toString().length < 2){
            minute = '0'+minute
        }

        this.setState({dateFormat24:hour+':'+minute});

        this.setState({hour:hour});
        this.setState({minute:minute});


    }

    kanDegeriEkle = () =>{


        this.setState({btnLoading:true});

        fetchManagerKanDegerleriPost({

            userid:this.state.user_id,
            aclik_kan_seker_deger: this.state.data.aclik_kan_seker_deger,
            tokluk_kan_seker_deger: this.state.data.tokluk_kan_seker_deger,
            nabiz: this.state.data.nabiz,
            tansiyon: this.state.data.tansiyon,
            tarih:this.state.data.tarih


        },res => {

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


    render() {
        return (
            <Modal defaultOpen onClose={this.props.call}>

                <Modal.Header>Kan Değeri Ekle</Modal.Header>
                <Modal.Content  scrolling>


                    <Modal.Description>
                        <Form>
                            <Form.Group>
                                <Form.Input label='Açlık Kan Şeker Değeri'
                                            placeholder='Açlık Kan Şeker Değeri'
                                            onChange={this.handleAclikDeger}
                                            width={4} />

                                <Form.Input label='Tokluk Kan Şeker Değeri'
                                            placeholder='Tokluk Kan Şeker Değeri'
                                            onChange={this.handleToklukDeger}
                                            width={4} />

                            </Form.Group>
                            <Form.Group>
                                <Form.Input label='Nabız'
                                            placeholder='Nabız'
                                            onChange={this.handleNabizDeger}
                                            width={4} />

                                <Form.Input label='Tansiyon'
                                            placeholder='Tansiyon'
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
                    <Button  colored={true} compact color={'teal'}
                             disabled={this.state.btnDisabled}
                             loading={this.state.btnLoading}
                             onClick={this.kanDegeriEkle}>
                        <Icon name='add' /> Oluştur
                    </Button>

                </Modal.Actions>


            </Modal>
        );
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
        this.setState({ year: year, month: month, date: date });
    }

    onResetDate(res) {
        const { date, month, year } = res;
        this.setState({ year: year, month: month, date: date });
    }

    onTimeChange(res){



        let hour = res.hour;

        if (hour.toString().length < 2){

            hour = '0'+hour;
        }

        console.log(hour);

        let minute = res.minute;
        if (minute.toString().length < 2){
            minute = '0'+minute;
        }

        this.setState({ hour: hour });
        this.setState({ minute: minute});
    }






}