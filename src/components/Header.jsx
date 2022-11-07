import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Stack direction={["column", "row"]} className="navbar">
      <Box>
        <Text>Inderjeet</Text>
      </Box>
      <Stack className="navlinks">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </Stack>
    </Stack>
  );
};

export default Header;
