import data from './lawfirm_db.json';

let lawfirms = data.lawfirms;

console.log("This is data inside reducer", data)
const AppointmentReducer = (state = lawfirms, action) => {
    let newArr = [...lawfirms]

    // console.log("checking destructuring : ", newArr[0].lawyers[1].appointments);

    if (action.type === 'appointment/add') {
        newArr[action.payload.firmId].lawyers[action.payload.lawyerId].appointments.push({ action.payload.new_appointment });
        newArr[action.payload.firmId].lawyers[action.payload.lawyerId].slot_counter--;
        return newArr;
    }
    if (action.type === 'appointment/dlt') {
        newArr[action.payload.firmId].lawyers[action.payload.lawyerId].appointments = newArr[action.payload.firmId].lawyers[action.payload.lawyerId].appointments.filter(apt => apt.aptId !== action.payload.new_appointment.aptId)
        return newArr;
    }

    return state;
}

export default AppointmentReducer;




// import axios from "axios";

// async function requestData() {

//     let dataPromise = fetch(`${process.env.PUBLIC_URL}/lawfirm_db.json`)
//         .then((r) => r.json())
//         .then((data) => {
//             return data;
//         })
//     return dataPromise.data;

// }