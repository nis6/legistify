import React from "react";
import { Box, Button, Input, Select, CloseButton } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import set_appointment from "../../redux/action";
import disablePastDates from "./disablePastDate";
import { Overlay } from "./AptFormElements";
import ExistsDialogueBox from "./ExistsDialogueBox";
import SubmitDialogueBox from "./SubmitDialogueBox";

const modal = document.getElementById("modal");

const AptForm = ({ showModal, onClose, lawyerIndex, lawfirmIndex }) => {
  const lawyerData = useSelector(
    (state) => state[lawfirmIndex].lawyers[lawyerIndex]
  );

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
  const [doesExist, setExist] = useState(false);

  //To disable past dates
  let maxDate = disablePastDates();

  useEffect(() => {
    if (inputName !== "") setError(false);
  }, []);

  function emptyOut() {
    setInputName("");
    setInputDate("");
    setInputSlot("");
    setInputMail("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let index = lawyerData.appointments.findIndex((item) => item.email == inputMail);

    if (
      inputName === "" ||
      inputMail === "" ||
      inputSlot === "" ||
      inputDate === ""
    ) {
      setError(true);
    } else if (index !== -1) {
      setExist(true);
    } else if (lawyerData.appointments.length === 0 || index === -1) {
      setExist(false);
      let payload = {
        lawfirmIndex,
        lawyerIndex,
        new_appointment: {
          id: lawyerData.id + inputSlot,
          clientName: inputName,
          email: inputMail,
          date: inputDate,
          time: inputSlot,
        },
      };
      dispatch(set_appointment(payload));
      //Empty out the input fields after submission
      emptyOut();
      setSubmit(true);
    }
  };

  if (doesExist) {
    return ReactDOM.createPortal(
      <ExistsDialogueBox
        lawyerData={lawyerData}
        onClose={onClose}
        emptyOut={emptyOut}
      />,
      modal
    );
  }

  if (submitClick) {
    return ReactDOM.createPortal(
      <SubmitDialogueBox
        lawyerData={lawyerData}
        onClose={onClose}
        emptyOut={emptyOut}
      />,
      modal
    );
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Box
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
              {lawyerData.slot_counter.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>

            <Button type="submit" variant="formButton">
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </Overlay>,
    modal
  );
};

export default AptForm;
