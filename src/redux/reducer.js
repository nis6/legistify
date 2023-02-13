import { createReducer, current } from '@reduxjs/toolkit'
import data from './lawfirm_db.json';
import set_appointment from './action';

let lawfirms = data.lawfirms;

const AppointmentReducer = createReducer(lawfirms, (builder) => {
    builder
        .addCase(set_appointment, (lawfirms, action) => {
            let lawyer = lawfirms[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex]
            lawyer.appointments.push(action.payload.new_appointment)
            lawyer.slot_counter = lawyer.slot_counter.filter(item => item !== action.payload.new_appointment.time)

            console.log('this is lawfirms after reducer: ', current(lawfirms))

        }
        )
})

export default AppointmentReducer;