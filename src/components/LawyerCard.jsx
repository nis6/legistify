import { Box, Flex, Image, Link, Text, Button } from "@chakra-ui/react";
import svg from "../assets";
import { useState } from "react";
import AptForm from "./AptForm";
import { useSelector } from "react-redux";

const LawyerCard = ({ lawyerIndex, lawfirmIndex }) => {
  const [toggleForm, setToggle] = useState(false);

  const lawyerData = useSelector(
    (state) => state[lawfirmIndex].lawyers[lawyerIndex]
  );

  // console.log("lawyerIndex from lawyercard: ", lawyerIndex);
  // console.log("lawyerData from lawyercard: ", lawyerData);

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
          <Text fontWeight="semibold">{lawyerData.name}</Text>
          <Text color="rust">{lawyerData.speciality}</Text>
        </Box>
        <Flex direction="column" gap="0.5rem" align="end">
          <Button size="sm" variant="secondary">
            Check History
          </Button>
          {lawyerData.slot_counter !== 0 ? (
            <Button onClick={() => setToggle(!toggleForm)}>Book Appointment</Button>
          ) : (
            <Button bg="rust" variant="signup">
              Unavailable
            </Button>
          )}
          {toggleForm ? (
            <AptForm
              onClose={onClose}
              lawyerIndex={lawyerIndex}
              lawfirmIndex={lawfirmIndex}
            />
          ) : (
            ""
          )}
          <Flex align="end" pr="1rem" gap="0.8rem">
            <Text size="md" fontWeight="semibold" color="grey200">
              60 min.
            </Text>
            <Image src={svg.hourglass} boxSize="50px" />
            <Text size="md" fontWeight="semibold">
              ₹{lawyerData.price}/
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text align="start" fontSize="md">
        {lawyerData.about}
      </Text>
    </Flex>
  );
};

export default LawyerCard;
