import React, {Component} from 'react';
import ListItem from '../list-item/list-item';
import './list.scss';
import {connect} from 'react-redux';
import WithBrigadesService from '../hoc/with-brigades-service';
import {brigadesLoaded, updatenextBrigades, brigadesError} from '../../actions/index';
import Error from '../error';
import Spinner from '../spinner';

class List extends Component {
    componentDidMount() {
        this.initialItems();
    }

    initialItems() {
        const {items} = this.props;
        if (items === []) {
            const {GetBrigades} = this.props;
        GetBrigades.getBrigadesItems()
            .then(res => this.props.brigadesLoaded(res))
            .catch(() => this.props.brigadesError());
        }        
    }
        

    render() {
        const {items, loading, error} = this.props;
        const newArr = JSON.parse(JSON.stringify(items));
        if (error){
            return <Error/>
        }
        if (loading) {
            return <Spinner/>
        }
        return (
                <ul className="list">
                    {   
                        newArr.splice(0 , 20).map(item => {
                            return <ListItem key={item.id} item={item}
                            />
                        })
                    }
                </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        items: state.brigades,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    brigadesLoaded,
    updatenextBrigades,
    brigadesError
};

export default WithBrigadesService()(connect(mapStateToProps, mapDispatchToProps)(List));






