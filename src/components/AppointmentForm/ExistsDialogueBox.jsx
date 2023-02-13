import { Overlay } from "./AptFormElements";
import { Flex, CloseButton, Image, Text, Heading, Button } from "@chakra-ui/react";
import svg from "../../assets";

const ExistsDialogueBox = ({ lawyerData, emptyOut, onClose }) => {
  return (
    <Overlay>
      <Flex
        direction="column"
        gap="1rem"
        align="center"
        justify="center"
        width="50vw"
        p="1rem 4rem"
        m="1rem"
        borderRadius="1rem"
        bg="rust"
        position="relative"
      >
        <CloseButton
          position="absolute"
          top="0.5rem"
          right="0.5rem"
          p="0"
          m="0"
          zIndex="20"
          onClick={() => {
            emptyOut();
            onClose();
          }}
        />
        <Flex>
          <Image src={svg.lawyer} boxSize="70px" />
          <Image src={svg.person} boxSize="70px" />
        </Flex>
        <Text as="h3" size="md">
          This email id already exists.
        </Text>
        <Heading as="h3" size="md">
          You already have an appointment with {lawyerData.name} :)
        </Heading>
        <Button onClick={() => onClose()} variant="formButton">
          Okay!
        </Button>
      </Flex>
    </Overlay>
  );
};

export default ExistsDialogueBox;
