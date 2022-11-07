import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const MainContent = () => {
  return (
    <Stack direction={["column", "row"]} className="mainContent">
      <VStack className="contentContainer">
        {/* <HStack className="socialLinks">
          <a href="#">
            <FaGoogle />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            {" "}
            <FaLinkedin />
          </a>
        </HStack> */}
        <Text>
          Hi I am <Text>Inderjeet</Text>
        </Text>
        <Heading>A Front-end Developer</Heading>
        <Text>
          Checkout my cool projects and hire me to make your business go online
          online
        </Text>
        <HStack>
          <Button>Hire Me</Button>
          <Button>Resume</Button>
        </HStack>
      </VStack>
      <Box className="imageContainer">Image</Box>
    </Stack>
  );
};

export default MainContent;
