import { Box, Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import svg from "../../assets";
import { useState } from "react";
import { useSelector } from "react-redux";
import HistoryApts from "../HistoryApts";
import ProfileButtons from "./ProfileButtons";

const LawyerCard = ({ lawyerIndex, lawfirmIndex }) => {
  const [toggleForm, setToggle] = useState(false);
  const [toggleHistory, setToggleHistory] = useState(false);

  const lawyerData = useSelector(
    (state) => state[lawfirmIndex].lawyers[lawyerIndex]
  );

  function onClose() {
    setToggle(false);
  }
  function onToggleForm() {
    setToggle(!toggleForm);
  }
  function onToggleHistory() {
    setToggleHistory(!toggleHistory);
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
        <ProfileButtons
          onClose={onClose}
          onToggleForm={onToggleForm}
          onToggleHistory={onToggleHistory}
          lawfirmIndex={lawfirmIndex}
          lawyerData={lawyerData}
          lawyerIndex={lawyerIndex}
          toggleForm={toggleForm}
        />
      </Flex>
      <Text align="start" fontSize="md">
        {lawyerData.about}
      </Text>
      {toggleHistory ? (
        <HistoryApts lawfirmIndex={lawfirmIndex} lawyerIndex={lawyerIndex} />
      ) : (
        ""
      )}
    </Flex>
  );
};

export default LawyerCard;
