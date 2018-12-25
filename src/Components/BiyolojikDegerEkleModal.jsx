import React, {Component} from 'react'
import {Button, Form, Icon, Modal} from "semantic-ui-react";
import Timekeeper from 'react-timekeeper';
import PickyDateTime from 'react-picky-date-time';
import {fetchManagerBiyoloijkDegerlerPost} from "../Networking/ApiFetchService";

export default class BiyolojikDegerEkleModal extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user_id:this.props.data.userid,
            btnLoading:false,
            btnDisabled:true,
            data:{
                hba1c:'',
                ldl:'',
                hdl:'',
                trigliserid:'',
                tarih:''

            },
            showPickyDateTime: true,
            date: '',
            month: '',
            year: '',
            dateFormat24:''
        }
    }

    biyolojikDegerEkle = () => {

        this.setState({btnLoading:true});

        fetchManagerBiyoloijkDegerlerPost({
            userid:this.state.user_id,
            hba1c:this.state.data.hba1c,
            ldl:this.state.data.ldl,
            hdl:this.state.data.hdl,
            trigliserid:this.state.data.trigliserid,
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
                    window.location.href="/biyolojik-degerler";

                }

            }


        });


    };


    render() {
        return (
            <Modal defaultOpen onClose={this.props.callB}>

                <Modal.Header>Biyolojik Değer Ekle</Modal.Header>
                <Modal.Content  scrolling>


                    <Modal.Description>
                        <Form>
                            <Form.Group>
                                <Form.Input label='HBA1C'
                                            placeholder='Hba1c'
                                            onChange={this.handleHBA1CValue}
                                            width={4} />

                                <Form.Input label='LDL'
                                            placeholder='Ldl'
                                            onChange={this.handleLDLValue}
                                            width={4} />

                            </Form.Group>
                            <Form.Group>
                                <Form.Input label='HDL'
                                            placeholder='Hdl'
                                            onChange={this.handleHDLValue}
                                            width={4} />

                                <Form.Input label='Trigliserid'
                                            placeholder='Trigliserid'
                                            onChange={this.handleTrigliseridValue}
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
                                            onChange={this.handleDateValue}
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
                             onClick={this.biyolojikDegerEkle}>
                        <Icon name='add' /> Oluştur
                    </Button>

                </Modal.Actions>


            </Modal>
        );
    }

    handleHBA1CValue = (e) =>{

        this.setState({data:{
                hba1c:e.target.value,
                ldl:this.state.data.ldl,
                hdl:this.state.data.hdl,
                trigliserid:this.state.data.trigliserid,
                tarih:this.state.year+'-'
                    +this.state.month+'-'+
                    this.state.date+' '+
                    this.state.dateFormat24
            }});




    };

    handleLDLValue = (e) =>{
        this.setState({data:{
                hba1c:this.state.data.hba1c,
                ldl:e.target.value,
                hdl:this.state.data.hdl,
                trigliserid:this.state.data.trigliserid,
                tarih:this.state.year+'-'
                    +this.state.month+'-'+
                    this.state.date+' '+
                    this.state.dateFormat24
            }});

    };


    handleHDLValue = (e) =>{

        this.setState({data:{
                hba1c:this.state.data.hba1c,
                ldl:this.state.data.ldl,
                hdl:e.target.value,
                trigliserid:this.state.data.trigliserid,
                tarih:this.state.year+'-'
                    +this.state.month+'-'+
                    this.state.date+' '+
                    this.state.dateFormat24
            }});



    };

    handleTrigliseridValue= (e) => {

        this.setState({data:{
                hba1c:this.state.data.hba1c,
                ldl:this.state.data.ldl,
                hdl:this.state.data.hdl,
                trigliserid:e.target.value,
                tarih:this.state.year+'-'
                    +this.state.month+'-'+
                    this.state.date+' '+
                    this.state.dateFormat24
            }});


    };

    handleDateValue = () =>{
        this.setState({data:{
                hba1c:this.state.data.hba1c,
                ldl:this.state.data.ldl,
                hdl:this.state.data.hdl,
                trigliserid:this.state.data.trigliserid,
                tarih:this.state.year+'-'
                    +this.state.month+'-'+
                    this.state.date+' '+
                    this.state.dateFormat24
            }});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.data !== this.state.data){
            if (this.state.data.hba1c.length > 0 &&
                this.state.data.ldl.length > 0 &&
                this.state.data.hdl.length > 0 &&
                this.state.data.trigliserid.length > 0 &&
                this.state.data.tarih.length > 15
            ){

                this.setState({btnDisabled:false});

            }else{
                this.setState({btnDisabled:true});
            }
        }



    }

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

}