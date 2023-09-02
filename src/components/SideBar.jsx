import { Box, Flex } from "@chakra-ui/react";

export default function SideBar() {
  return (
    <Box
      // height={"100%"}
      width={"240px"}
      left={"0"}
      top={"0"}
      zIndex={"2"}
      bgColor={"white"}
    >
      <Flex align="center" justify="center">
        Sidebar
      </Flex>
    </Box>
  );
}
