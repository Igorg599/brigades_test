const brigadesLoaded = (newBrigades) => {
    return {
        type: 'BRIGADES_LOADED',
        payload: newBrigades,
    }
}

const updatenextBrigades = () => {
    return {
        type: 'NEXT_BRIGADES',
    }
}

const updateprevBrigades = () => {
    return {
        type: 'PREV_BRIGADES',
    }
}

const brigadesError = () => {
    return {
        type: 'BRIGADES_ERROR',
    }
}

export {
    brigadesLoaded,
    updatenextBrigades,
    updateprevBrigades,
    brigadesError
};