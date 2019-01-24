import { createStore } from 'redux';
import restaurantReducer from '../reducers/restaurantReducer';


const store = createStore(restaurantReducer);
export default store;  
