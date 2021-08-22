const thunk = store => next => action => {
    console.log(action);
    typeof action === 'function' ?
        action(store.dispatch) :
        next(action);
};

export default thunk