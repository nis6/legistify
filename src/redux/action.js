//ACTION CREATORS : returns an ACTION OBJECT (simple js objects), with optional payload
// these are passed to dispatch function as result value (function call not the function name)

export function set_appointment(lawfirmIndex, lawyerId, new_appointment) {
    return {
        type: 'appointment/add',
        payload: {
            lawfirmIndex, lawyerId, new_appointment
        }
    }
}

export function dlt_appointment(lawfirmIndex, lawyerId, unwanted_appointment) {
    return {
        type: 'appointment/dlt',
        payload: {
            lawfirmIndex, lawyerId, unwanted_appointment
        }
    }
}