import { configureStore } from '@reduxjs/toolkit'
import AppointmentReducer from './reducer'

const store = configureStore({ reducer: AppointmentReducer },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;