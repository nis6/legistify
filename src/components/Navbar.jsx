import { Box, Flex, Button, Link } from "@chakra-ui/react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      h="10vh"
      px="3rem"
      py="2rem"
      m="0"
      gap="1rem"
      align="center"
      justify="space-between"
      flexWrap="wrap"
    >
      <Box>
        <Logo />
      </Box>
      <Flex align="center" justify="space-evenly" gap="3rem">
        <Link href="#">HOME</Link>
        <Link href="#about">ABOUT US</Link>
        <Link href="#contact">CONTACT US</Link>
        <Link style={{ textDecoration: "none" }}>
          <Button variant="signup">SIGN UP</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
