import { createReducer, current } from '@reduxjs/toolkit'
import data from './lawfirm_db.json';
import set_appointment from './action';

let lawfirms = data.lawfirms;

const AppointmentReducer = createReducer(lawfirms, (builder) => {
    builder
        .addCase(set_appointment, (lawfirms, action) => {
            console.log('this is action from set_app: ', action)
            // console.log('lawfirms[action.payload.lawfirmIndex].lawyers[action.payload.lawfirmIndex]', lawfirms[action.payload.lawfirmIndex].lawyers[action.payload.lawfirmIndex])
            lawfirms[action.payload.lawfirmIndex].lawyers[action.payload.lawfirmIndex].appointments.push(action.payload.new_appointment)
            lawfirms[action.payload.lawfirmIndex].lawyers[action.payload.lawfirmIndex].slot_counter--
            console.log('this is lawfirms after reducer: ', current(lawfirms))

        }
        )
})

export default AppointmentReducer;