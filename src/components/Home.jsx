import React from "react";
import { Box, Button, Container, Text } from "@chakra-ui/react";
import "../styles/Home.css";
import Header from "./Header";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <Box w={"100vw"} className="homeContainer">
      <Header />
      <MainContent />
    </Box>
  );
};

export default Home;
