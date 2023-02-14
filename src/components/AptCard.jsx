import { Flex, Image, Text, Box } from "@chakra-ui/react";
import svg from "../assets";

const AptCard = ({ name, email, date, time }) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      borderRadius="1.5rem"
      bg="bg200"
      height="200px"
      width="100%"
      m="1rem"
      border="solid 1px black"
      p="2rem"
    >
      <Flex align="center" justify="center">
        <Image src={svg.person} boxSize="150px" />
        <Box textAlign="start">
          <Text fontWeight="semibold">{name}</Text>
          <Text color="black">{email}</Text>
        </Box>
      </Flex>
      <Flex direction="column" align="end" justify="space-between">
        <Flex direction="column" align="end" justify="end" gap="0.5rem">
          <Image src={svg.calender} boxSize="50px" />
          <Text fontWeight="semibold">{date}</Text>
          <Text color="rust" fontWeight="semibold">
            {time}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AptCard;
