import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import LawfirmsContainer from "../components/LawfirmsContainer";
import LawyersContainer from "../components/LawyersContainer";
import AptCard from "./../components/AptCard";
import AptForm from "./../components/AptForm";
import { useStore } from "react-redux";

const Home = () => {
  let store = useStore();
  let lawfirms = store.getState();
  return (
    <Box bg="bg200" w="100vw" id="home" align="center">
      <Navbar />
      <HomeCard />
      <LawfirmsContainer />
      {lawfirms.map((item) => {
        return (
          <LawyersContainer
            firm_name={item["firm_name"]}
            firmId={item["id"]}
            key={item["id"]}
          />
        );
      })}

      <AptCard />
      <AptForm />
    </Box>
  );
};

export default Home;

//borderColor="black" borderWidth="1px"
