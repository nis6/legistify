import React from "react";
import {
  Box,
  Button,
  Input,
  Select,
  CloseButton,
  Heading,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import set_appointment from "./../redux/action";
import svg from "../assets";

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

  const slotOption = useRef();
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
  const [doesExist, setExist] = useState(false);

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
      //function call:  to the function sent as a prop inside Search
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
      emptyOut();
      setSubmit(true);
    }
  };

  function emptyOut() {
    //Empty out the input fields after submission
    setInputName("");
    setInputDate("");
    setInputSlot("");
    setInputMail("");
  }

  if (doesExist) {
    return ReactDOM.createPortal(
      <Overlay>
        <Flex
          direction="column"
          gap="1rem"
          align="center"
          justify="center"
          width="50vw"
          p="1rem 4rem"
          m="1rem"
          borderRadius="1rem"
          bg="rust"
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
          <Flex>
            <Image src={svg.lawyer} boxSize="70px" />
            <Image src={svg.person} boxSize="70px" />
          </Flex>
          <Text as="h3" size="md">
            This email id already exists.
          </Text>
          <Heading as="h3" size="md">
            You already have an appointment with {lawyerData.name} :)
          </Heading>
          <Button onClick={() => onClose()} variant="formButton">
            Okay!
          </Button>
        </Flex>
      </Overlay>,
      modal
    );
  }

  if (submitClick) {
    return ReactDOM.createPortal(
      <Overlay>
        <Flex
          direction="column"
          gap="1rem"
          align="center"
          justify="center"
          width="50vw"
          p="1rem 4rem"
          m="1rem"
          borderRadius="1rem"
          bg="hazelyellow"
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
          <Flex>
            <Image src={svg.lawyer} boxSize="70px" />
            <Image src={svg.person} boxSize="70px" />
          </Flex>

          <Heading as="h3" size="md">
            You have an appointment with {lawyerData.name}!
          </Heading>
          <Button onClick={() => onClose()} variant="formButton">
            Okay!
          </Button>
        </Flex>
      </Overlay>,
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
