import { Box, Flex } from "@chakra-ui/react";

export default function TopBar() {
  return (
    <Box
      // maxW={"1260px"}
      width={"100%"}
      height={"94px"}
      top={"0"}
      zIndex={"2"}
      bgColor={"white"}
    >
      <Flex align="center" justify="center">
        TopBar
      </Flex>
    </Box>
  );
}
