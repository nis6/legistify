import { Flex, Heading } from "@chakra-ui/react";
import LawyerCard from "./LawyerCard";
import { useSelector } from "react-redux";

const LawyersContainer = ({ firm_name, firmId }) => {
  let lawfirms = useSelector((state) => state);
  let lawfirmIndex = lawfirms.findIndex((item) => item.id === firmId);

  console.log("lawyersContainer Number: ", lawfirmIndex);
  return (
    <Flex
      h="max-content"
      direction="column"
      bg="bg100"
      gap="3rem"
      align="center"
      justify="center"
      borderRadius="1rem"
      w="95%"
      p="1rem"
      m="0.8rem"
      mt="2rem"
      variant="centerFlex"
      id={`${firmId}`}
    >
      <Heading as="h1" fontWeight="semibold">
        {firm_name}
      </Heading>
      <Flex direction="column" gap="2rem">
        {lawfirms[lawfirmIndex].lawyers.map((item) => {
          return (
            <LawyerCard
              key={item["id"]}
              id={item["id"]}
              name={item["name"]}
              speciality={item["speciality"]}
              about={item["about"]}
              price={item["price"]}
              slot_counter={item["slot_counter"]}
              appointments={item["appointments"]}
              lawfirmIndex={lawfirmIndex}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default LawyersContainer;
