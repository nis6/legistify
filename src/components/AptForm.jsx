import React from "react";
import { Box, Button, Input, Select, CloseButton, Heading } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import set_appointment from "./../redux/action";

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.3);
`;
const modal = document.getElementById("modal");

const AptForm = ({ showModal, onClose, lawyerIndex, lawfirmIndex }) => {
  // const store = useStore();
  // let lawfirms = store.getState();

  // console.log("This is lawfirmIndex in AptForm: ", lawfirmIndex);
  // console.log("This is lawfirms in AptForm: ", lawfirms[lawfirmIndex]);

  //to obtain and subscribe to any change in selected lawyers' data
  const lawyerData = useSelector(
    (state) => state[lawfirmIndex].lawyers[lawyerIndex]
  );
  // console.log("lawyerdata from inside form", lawyerData);

  //to get access to store.dispatch (we have store so no need for it, but for non verbose use)
  let dispatch = useDispatch();

  //local state to manage form data
  //state for input fields
  const [inputName, setInputName] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputSlot, setInputSlot] = useState("");
  const [inputMail, setInputMail] = useState("");
  const [submitClick, setSubmit] = useState(false);

  //state for view management
  const [isError, setError] = useState(false);

  //To disable past dates
  var dtToday = new Date();
  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();
  var maxDate = year + "-" + month + "-" + day;

  useEffect(() => {
    if (inputName !== "") setError(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("reached handleSubmit");
    //function call:  to the function sent as a prop inside Search
    let payload = {
      lawfirmIndex,
      lawyerIndex,
      new_appointment: {
        id: lawyerData.id + lawyerData.slot_counter,
        clientName: inputName,
        email: inputMail,
        date: inputDate,
        time: inputSlot,
      },
    };

    dispatch(set_appointment(payload));
    emptyOut();
    setSubmit(true);
  };

  function emptyOut() {
    //Empty out the input fields after submission
    setInputName("");
    setInputDate("");
    setInputSlot("");
    setInputMail("");
  }

  if (submitClick) {
    return ReactDOM.createPortal(
      <Overlay>
        <Box
          border="black solid 1px"
          width="50vw"
          p="1rem 4rem"
          m="1rem"
          borderRadius="1rem"
          bg="white"
          position="relative"
        >
          <CloseButton
            position="absolute"
            top="0.5rem"
            right="0.5rem"
            p="0"
            m="0"
            zIndex="20"
            onClick={() => {
              emptyOut();
              onClose();
            }}
          />
          <Heading as="h2">You have an appointment with {lawyerData.name}!</Heading>
          <Button onClick={() => onClose()}>Okay!</Button>
        </Box>
      </Overlay>,
      modal
    );
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Box
        border="black solid 1px"
        width="50vw"
        p="1rem 4rem"
        m="1rem"
        borderRadius="1rem"
        bg="white"
        position="relative"
      >
        <CloseButton
          position="absolute"
          top="0.5rem"
          right="0.5rem"
          p="0"
          m="0"
          zIndex="20"
          onClick={() => {
            emptyOut();
            onClose();
          }}
        />
        <form onSubmit={handleSubmit}>
          <FormControl
            isInvalid={isError}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="0.5rem"
          >
            <FormLabel>Appointment Form</FormLabel>
            {!isError ? (
              <FormHelperText>Your is information safe with us.</FormHelperText>
            ) : (
              <FormErrorMessage>Please enter all details.</FormErrorMessage>
            )}

            <Input
              type="text"
              name="Name"
              placeholder="Your full Name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              width="70%"
            />
            <Input
              type="email"
              name="Email"
              placeholder="Your Email Id"
              value={inputMail}
              onChange={(e) => setInputMail(e.target.value)}
              width="70%"
            />
            <Input
              type="date"
              name="Date"
              placeholder="Pick a Date"
              value={inputDate}
              min={maxDate}
              onChange={(e) => setInputDate(e.target.value)}
              width="70%"
            />

            <Select
              variant="outline"
              placeholder="Select a Slot"
              width="70%"
              value={inputSlot}
              onChange={(e) => setInputSlot(e.target.value)}
            >
              <option>10:00 AM - 11:00 AM</option>
              <option>11:00 AM - 12:00 PM</option>
              <option>1:00 PM - 2:00 PM</option>
              <option>2:00 PM - 3:00 PM</option>
              <option>3:00 PM - 4:00 PM</option>
            </Select>

            <Button type="submit">Submit</Button>
          </FormControl>
        </form>
      </Box>
    </Overlay>,
    modal
  );
};

export default AptForm;
