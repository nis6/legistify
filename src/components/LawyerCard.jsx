import { Box, Flex, Image, Link, Text, Button } from "@chakra-ui/react";
import svg from "../assets";

const LawyerCard = () => {
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
        <Box>
          <Image src={svg.lawyer} boxSize="200px" />
          <Text fontWeight="semibold">Lawyer's Name</Text>
          <Text color="rust">Business Law</Text>
        </Box>
        <Flex direction="column" gap="0.5rem" align="end">
          <Button size="sm" variant="secondary">
            Check History
          </Button>
          <Button>Book Appointment</Button>
          <Flex align="end" pr="1rem" gap="0.8rem">
            <Text size="md" fontWeight="semibold" color="grey200">
              60 min.
            </Text>
            <Image src={svg.hourglass} boxSize="50px" />
            <Text size="md" fontWeight="semibold">
              ₹10,000
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text fontSize="md">
        If you'd like to truncate the text after a specific number of lines, pass the
        noOfLines prop. This will render an ellipsis . If you'd like to truncate the
        text after a specific number of lines, pass the noOfLines prop. This will
        render an ellipsis . If you'd like to truncate the text after a specific
        number of lines, pass the noOfLines prop. This will render an ellipsis{" "}
      </Text>
    </Flex>
  );
};

export default LawyerCard;
