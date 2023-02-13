import data from './lawfirm_db.json';

let lawfirms = data.lawfirms;

// console.log("This is data inside reducer", data)

const AppointmentReducer = (state = lawfirms, action) => {
    let newArr = [...state]

    // console.log("checking destructuring : ", newArr[0].lawyers[1].appointments);

    if (action.type === 'appointment/add') {
        let aptArr = newArr[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex].appointments
        aptArr.push(action.new_appointment);
        newArr[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex].appointments = aptArr
        newArr[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex].slot_counter--;
        return newArr;
    }
    if (action.type === 'appointment/dlt') {
        let aptArr = newArr[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex].appointments
        aptArr.filter(apt => apt.aptId !== action.payload.unwanted_appointment.aptId)
        newArr[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex].appointments = aptArr;
        newArr[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex].slot_counter++;
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