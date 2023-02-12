import { Flex, Heading } from "@chakra-ui/react";
import LawyerCard from "./LawyerCard";

const LawyersContainer = () => {
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
      variant="centerFlex"
    >
      <Heading as="h1" fontWeight="semibold">
        Law Firm
      </Heading>
      <Flex direction="column" gap="2rem">
        <LawyerCard />
        <LawyerCard />
      </Flex>
    </Flex>
  );
};

export default LawyersContainer;
