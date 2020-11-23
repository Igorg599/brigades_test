import React from 'react';
import BrigadesServiceContext from '../brigades-service-context/brigades-service-context';

const WithBrigadesService = () => (Wrapped) => { 
    return (props) => {  
        return (
            <BrigadesServiceContext.Consumer>
                {
                    (GetBrigades) => {
                        return <Wrapped {...props} GetBrigades = {GetBrigades}/>
                    }
                }
            </BrigadesServiceContext.Consumer>
        )
    }
};

export default WithBrigadesService;