//ACTION CREATORS : returns an ACTION OBJECT (simple js objects), with optional payload
// these are passed to dispatch function as result value (function call not the function name)
import { createAction } from '@reduxjs/toolkit'




const set_appointment = createAction('appointment/add');

export default set_appointment;

// export function set_appointment({ lawfirmIndex, lawyerIndex, new_appointment }) {
//     return {
//         type: 'appointment/add',
//         payload: {
//             lawfirmIndex, lawyerIndex, new_appointment
//         }
//     }
// }

// export function dlt_appointment({ lawfirmIndex, lawyerIndex, unwanted_appointment }) {
//     return {
//         type: 'appointment/dlt',
//         payload: {
//             lawfirmIndex, lawyerIndex, unwanted_appointment
//         }
//     }
// }