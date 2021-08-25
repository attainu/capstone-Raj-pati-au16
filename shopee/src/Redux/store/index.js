import { createStore,compose , applyMiddleware} from "redux";
import reducers  from "../reducers";
import thunk from 'redux-thunk';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composer(applyMiddleware(thunk)));

export default store;

