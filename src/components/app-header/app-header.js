import React, {Component} from 'react';
import './app-header.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import {updatenextBrigades, brigadesLoaded, updateprevBrigades, brigadesError} from '../../actions';
import { connect } from 'react-redux';
import WithBrigadesService from '../hoc/with-brigades-service';

class AppHeader extends Component {

    offConnectionBrigades = () => {
        const {GetBrigades} = this.props;
        GetBrigades.getBrigadesItems()
            .then(res => {
                let result = [];
                result = res.filter(item => item.connection_state === 0);
                return this.props.brigadesLoaded(result)
                        
            })
            .catch(() => this.props.brigadesError());
    }

    onConnectionBrigades = () => {
        const {GetBrigades} = this.props;
        GetBrigades.getBrigadesItems()
            .then(res => {
                let result = [];
                result = res.filter(item => item.connection_state === 1);
                return this.props.brigadesLoaded(result);
            })
            .catch(() => this.props.brigadesError());
    }

    oneBrigades = () => {
        const {GetBrigades} = this.props;
        GetBrigades.getBrigadesItems()
            .then(res => {
                let result = [];
                result = res.filter(item => item.department.name === "Лукойл");
                return this.props.brigadesLoaded(result);
            })
            .catch(() => this.props.brigadesError());
    }

    twoBrigades = () => {
        const {GetBrigades} = this.props;
        GetBrigades.getBrigadesItems()
            .then(res => {
                let result = [];
                result = res.filter(item => item.department.name === "Роснефть");
                return this.props.brigadesLoaded(result);
            })
            .catch(() => this.props.brigadesError());
    }

    threeBrigades = () => {
        const {GetBrigades} = this.props;
        GetBrigades.getBrigadesItems()
            .then(res => {
                let result = [];
                result = res.filter(item => item.department.name === "Газпром нефть");
                return this.props.brigadesLoaded(result);
            })
            .catch(() => this.props.brigadesError());
    }

    allBrigades = () => {
        const {GetBrigades} = this.props;
        GetBrigades.getBrigadesItems()
            .then(res =>  this.props.brigadesLoaded(res))
            .catch(() => this.props.brigadesError());
    }

    nextBrigades = () => {

        return this.props.updatenextBrigades();
    }

    prevBrigades = () => {

        return this.props.updateprevBrigades();
    }

    render() {
        return (
            <>
                <div className="app_header">
                    <Button onClick = {(e) => {
                            e.preventDefault();
                            this.allBrigades();
                        } } variant="success" >Все БРИГАДЫ</Button>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            По состоянию связи
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick = {(e) => {
                            e.preventDefault();
                            this.offConnectionBrigades();
                        } } variant="success">Нет связи</Dropdown.Item>
                            <Dropdown.Item onClick = {(e) => {
                            e.preventDefault();
                            this.onConnectionBrigades();
                        } } variant="success">На связи</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Подразделения
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick = {(e) => {
                            e.preventDefault();
                            this.oneBrigades();
                        } } variant="success">Лукойл</Dropdown.Item>
                            <Dropdown.Item onClick = {(e) => {
                            e.preventDefault();
                            this.twoBrigades();
                        } } variant="success">Роснефть</Dropdown.Item>
                            <Dropdown.Item onClick = {(e) => {
                            e.preventDefault();
                            this.threeBrigades();
                        } } variant="success">Газпром нефть</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div> 
                <div className="app_header_btn">
                    <Button onClick = {(e) => {
                            e.preventDefault();
                            this.prevBrigades();
                        } }variant="dark">Назад</Button>{' '}
                    <Button onClick = {(e) => {
                            e.preventDefault();
                            this.nextBrigades();
                        } } variant="dark">Вперед</Button>{' '}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.arr
    }
};

const mapDispatchToProps = {
    updatenextBrigades,
    brigadesLoaded,
    updateprevBrigades,
    brigadesError
}

export default WithBrigadesService()(connect(mapStateToProps, mapDispatchToProps)(AppHeader));