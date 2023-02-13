import { Box, Flex, Image, Link, Text, Button } from "@chakra-ui/react";
import svg from "../assets";
import { useState } from "react";
import AptForm from "./AptForm";

const LawyerCard = (props) => {
  const [toggleForm, setToggle] = useState(false);

  console.log("lawfirmIndex from lawyercard: ", props.lawfirmIndex);

  function onClose() {
    setToggle(false);
  }

  return (
    <Flex
      direction="column"
      p="1rem"
      align="start"
      justify="start"
      gap="0.4rem"
      borderBottom="solid 1px black"
    >
      <Flex align="center" justify="space-between" gap="2rem" w="100%" pb="0.5rem">
        <Box align="start">
          <Image src={svg.lawyer} boxSize="200px" />
          <Text fontWeight="semibold">{props.name}</Text>
          <Text color="rust">{props.speciality}</Text>
        </Box>
        <Flex direction="column" gap="0.5rem" align="end">
          <Button size="sm" variant="secondary">
            Check History
          </Button>
          {props.slot_counter !== 0 ? (
            <Button onClick={() => setToggle(!toggleForm)}>Book Appointment</Button>
          ) : (
            <Button bg="rust" variant="signup">
              Unavailable
            </Button>
          )}
          <AptForm
            showModal={toggleForm}
            onClose={onClose}
            lawyerId={props.id}
            lawfirmIndex={props.lawfirmIndex}
          />

          <Flex align="end" pr="1rem" gap="0.8rem">
            <Text size="md" fontWeight="semibold" color="grey200">
              60 min.
            </Text>
            <Image src={svg.hourglass} boxSize="50px" />
            <Text size="md" fontWeight="semibold">
              ₹{props.price}/
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text align="start" fontSize="md">
        {props.about}
      </Text>
    </Flex>
  );
};

export default LawyerCard;
