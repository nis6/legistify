import { Flex, Image, Text } from "@chakra-ui/react";
import svg from "../assets";

const AptCard = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      borderRadius="1.5rem"
      bg="bg100"
      h="max-content"
      width="500px"
      m="1rem"
      p="2rem"
    >
      <Flex direction="column" align="start" justify="center" width="100%">
        <Image src={svg.person} boxSize="150px" />
        <Text fontWeight="semibold">Nisha</Text>
        <Text color="black">nishachauhan0950@gmail.com</Text>
      </Flex>
      <Flex align="end" justify="space-between" width="100%" pt="0.5rem">
        <Flex direction="column">
          <Text fontWeight="semibold">Date: 25-02-2022</Text>
          <Text as="mail" color="rust" fontWeight="semibold">
            Time: 9:00 AM- 10:00 AM
          </Text>
        </Flex>
        <Image src={svg.calender} boxSize="50px" />
      </Flex>
    </Flex>
  );
};

export default AptCard;
