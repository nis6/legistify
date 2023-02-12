import { Box, Heading, Flex, Image, Button, Spacer } from "@chakra-ui/react";
import svg from "../assets";
import { useMediaQuery } from "@chakra-ui/react";

const HomeCard = () => {
  const [matchMobileWidth] = useMediaQuery("(max-width: 800px)");
  let direction;
  if (matchMobileWidth) direction = "column";
  else direction = "row";
  return (
    <Flex
      p="2rem"
      justify="space-around"
      gap="3rem"
      mb="5rem"
      mt="5rem"
      direction={direction}
    >
      <Box>
        <Button borderRadius="1rem 1rem 0rem 1rem" size="xl">
          Find Your Attorney
        </Button>
        <br />
        <br />
        <Heading as="h1" fontWeight="semibold">
          One Stop solution to find the best legal Attorney.
        </Heading>
        <br />
        <Heading as="h4" size="md" fontWeight="normal">
          Compare all law firms and select the best attorney to solve your legal
          issues.
        </Heading>
      </Box>
      <Box>
        <Image src={svg.main_illustration2} />
      </Box>
      <Box>
        <Heading as="h1" fontWeight="semibold">
          Manage enterprise legal operations the hassle free way.
        </Heading>
        <br />
        <Heading as="h4" size="md" fontWeight="normal">
          A Management Tool for your Law Firm.
        </Heading>
        <br />
        <Button size="xl">Register Your Firm</Button>
      </Box>
    </Flex>
  );
};

export default HomeCard;
