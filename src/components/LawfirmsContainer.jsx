import { Flex, Heading } from "@chakra-ui/react";
import LawfirmCard from "./LawfirmCard";

const LawfirmsContainer = () => {
  return (
    <Flex
      h="max-content"
      direction="column"
      gap="3rem"
      align="center"
      justify="center"
      borderRadius="1rem"
      w="95%"
      p="1rem"
      m="0.8rem"
      mt="2rem"
      bg="grey100"
      variant="centerFlex"
    >
      <Heading as="h1" fontWeight="semibold">
        Registered Law Firms
      </Heading>
      <Flex wrap="wrap" align="center" justify="center">
        <LawfirmCard />
        <LawfirmCard />
        <LawfirmCard />
      </Flex>
    </Flex>
  );
};

export default LawfirmsContainer;
