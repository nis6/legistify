import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import LawfirmsContainer from "../components/LawfirmsContainer";
import LawyersContainer from "../components/LawyersContainer";
import AptCard from "./../components/AptCard";
import AptForm from "./../components/AptForm";
import AppointmentReducer from "../redux/reducer";

const Home = () => {
  AppointmentReducer();
  return (
    <Box bg="bg200" w="100vw">
      <Navbar />
      <HomeCard />
      <LawfirmsContainer />
      <LawyersContainer />
      <AptCard />
      <AptForm />
    </Box>
  );
};

export default Home;

//borderColor="black" borderWidth="1px"
