import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import LawfirmsContainer from "../components/LawfirmsContainer";
import LawyersContainer from "../components/LawyersContainer";

const Home = () => {
  return (
    <Box bg="bg200" w="100vw">
      <Navbar />
      <HomeCard />
      <LawfirmsContainer />
      <LawyersContainer />
    </Box>
  );
};

export default Home;

//borderColor="black" borderWidth="1px"
