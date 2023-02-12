import { Flex, Image, Link } from "@chakra-ui/react";
import svg from "../assets";

const LawfirmCard = () => {
  return (
    <Flex
      direction="column"
      p="2rem"
      align="center"
      justify="center"
      borderRadius="9rem"
      m="1rem"
      bg="bg200"
    >
      <Image src={svg.lawbalance} boxSize="100px" />
      <Link textAlign="center">Name of the Lawfirm</Link>
    </Flex>
  );
};

export default LawfirmCard;
