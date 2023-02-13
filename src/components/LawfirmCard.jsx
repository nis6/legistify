import { Flex, Image, Link } from "@chakra-ui/react";
import svg from "../assets";

const LawfirmCard = ({ firm_name, firmId }) => {
  return (
    <Flex
      direction="column"
      p="2rem"
      align="center"
      justify="center"
      borderRadius="9rem"
      m="1rem"
      bg="bg200"
      width="300px"
      height="300px"
    >
      <Image src={svg.lawbalance} boxSize="100px" />
      <Link textAlign="center" href={`#${firmId}`}>
        {firm_name}
      </Link>
    </Flex>
  );
};

export default LawfirmCard;
