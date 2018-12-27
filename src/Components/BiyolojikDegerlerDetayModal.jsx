import React, {Component} from 'react'
import {Button, Divider, Form, Header, Icon, Modal} from "semantic-ui-react";
import Timekeeper from 'react-timekeeper';
import PickyDateTime from 'react-picky-date-time';
import {
    fetchManagerBiyoloijkDegerlerDelete,
    fetchManagerBiyoloijkDegerlerPatch,
    fetchManagerUserProfileGet
} from "../Networking/ApiFetchService";

export default class BiyolojikDegerlerDetayModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPickyDateTime: true,
            date: '',
            month: '',
            year: '',
            dateFormat24:'',
            name:'Yükleniyor...',
            delBtnLoading:false,
            data:{
                hba1c:'',
                ldl:'',
                hdl:'',
                trigliserid:'',
                tarih:''

            },
            btnLoading:false,
            btnDisabled:false,
        }

    }

    guncelle = () => {

        this.setState({btnLoading:true});
        fetchManagerBiyoloijkDegerlerPatch(this.props.data.id,{

            userid:this.props.data.userid,
            hba1c:this.state.data.hba1c,
            ldl:this.state.data.ldl,
            hdl:this.state.data.hdl,
            trigliserid:this.state.data.trigliserid,
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
                    window.location.href="/biyolojik-degerler";

                }

            }
        });


    };

    sil = () => {

        this.setState({delBtnLoading:true});
        fetchManagerBiyoloijkDegerlerDelete(this.props.data.id,res=>{

            if ((typeof res).toString() === "undefined") {

                // route login
                this.setState({btnLoading:false});

            }else{

                if (res.status >= 400 && res.status < 500){



                } else if (res.status >=200 && res.status < 300) {


                    window.location.href="/biyolojik-degerler";

                }

            }


        });

    };


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

    render() {
        return (
            <Modal defaultOpen onClose={this.props.callBDuzenle}>

                <Modal.Header style={{backgroundColor:'#00c549',color:'white'}}>Biyolojik Değer Detay</Modal.Header>
                <Modal.Content  scrolling>


                    <Modal.Description>

                        <Header as={'h2'}>{this.state.name}</Header>
                        <Divider/>

                        <Form>
                            <Form.Group>
                                <Form.Input label='HBA1C'
                                            placeholder='Hba1c'
                                            defaultValue={this.props.data.hba1c}
                                            onChange={this.handleHBA1CValue}
                                            width={4} />

                                <Form.Input label='LDL'
                                            placeholder='Ldl'
                                            defaultValue={this.props.data.ldl}
                                            onChange={this.handleLDLValue}
                                            width={4} />

                            </Form.Group>
                            <Form.Group>
                                <Form.Input label='HDL'
                                            placeholder='Hdl'
                                            defaultValue={this.props.data.hdl}
                                            onChange={this.handleHDLValue}
                                            width={4} />

                                <Form.Input label='Trigliserid'
                                            placeholder='Trigliserid'
                                            defaultValue={this.props.data.trigliserid}
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
                    <Button  colored={true} compact color={'red'}
                             loading={this.state.delBtnLoading}
                             onClick={this.sil}>
                        <Icon name='trash alternate' /> Sil
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