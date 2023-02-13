import { Flex, Heading, Text } from "@chakra-ui/react";
import AptCard from "./AptCard";
import { useSelector } from "react-redux";

const HistoryApts = ({ lawfirmIndex, lawyerIndex }) => {
  const appointmentsArray = useSelector(
    (state) => state[lawfirmIndex].lawyers[lawyerIndex].appointments
  );

  if (appointmentsArray.length !== 0) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        bg="bg200"
        p="1rem"
        borderRadius="2rem"
        flexGrow={1}
        m="1rem"
        w="100%"
      >
        <Heading as="h4" size="lg">
          Booked Appointments
        </Heading>
        <Flex flexWrap="wrap" justify="center" align="center">
          {appointmentsArray.map((item) => (
            <AptCard
              key={item.id}
              name={item.clientName}
              email={item.email}
              date={item.date}
              time={item.time}
            />
          ))}
        </Flex>
      </Flex>
    );
  } else
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        bg="bg200"
        p="1rem"
        borderRadius="2rem"
        m="1rem"
        w="100%"
      >
        <Heading size="md" color="rust">
          No Appointments yet.
        </Heading>
        <Text size="sm" color="rust">
          Book your slot now!
        </Text>
      </Flex>
    );
};

export default HistoryApts;
