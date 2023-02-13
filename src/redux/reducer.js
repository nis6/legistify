import data from './lawfirm_db.json';
let lawfirms = data.lawfirms;
// console.log("This is data inside reducer", data)
const AppointmentReducer = (state = lawfirms, action) => {

    let id1 = action.payload.lawfirmIndex;
    let id2 = action.payload.lawyerIndex

    if (action.type === 'appointment/add') {

        return [
            ...state,

            state[id1] = {

                ...state[id1],

                state[id1].lawyers : [

                            ...state[id1].lawyers,

                state[id1].lawyers[id2] = {

                    ...state[id1].lawyers[id2],

                    state[id1].lawyers[id2].appointments: [
                                ...state[id1].lawyers[id2].appointments,
                    action.payload.new_appointment
                                    ]

    }
                            ] 


                        }
        ]
    }

}














// const AppointmentReducer = (state = lawfirms, action) => {
//     const newArr = [...state]

//     if (action.type === 'appointment/add') {
//         console.log("checking destructuring newArr: ", newArr);
//         let aptArr = newArr[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex].appointments
//         aptArr.push(action.new_appointment);
//         newArr[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex].appointments = aptArr
//         newArr[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex].slot_counter--;
//         return [
//             ...state,
//             newArr
//         ];
//     }
//     if (action.type === 'appointment/dlt') {
//         let aptArr = newArr[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex].appointments
//         aptArr.filter(apt => apt.aptId !== action.payload.unwanted_appointment.aptId)
//         newArr[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex].appointments = aptArr;
//         newArr[action.payload.lawfirmIndex].lawyers[action.payload.lawyerIndex].slot_counter++;
//         return newArr;
//     }

//     return state;
// }

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