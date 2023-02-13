import { Flex, Heading, Link } from "@chakra-ui/react";
import LawfirmCard from "./LawfirmCard";
import { useStore } from "react-redux";

const LawfirmsContainer = () => {
  let store = useStore();
  let lawfirms = store.getState();
  console.log("lawfirm inside lawfirmscontainer: ", lawfirms);
  return (
    <Flex
      id="lawfirmContainerId"
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
        {lawfirms.map((item) => (
          <LawfirmCard
            firm_name={item["firm_name"]}
            firmId={item["id"]}
            key={item["id"]}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default LawfirmsContainer;
