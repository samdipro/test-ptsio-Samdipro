import { Container, Flex } from "@chakra-ui/react";

export default function SideBar() {
  return (
    <Container
      height={"100vh"}
      width={"240px"} // Set a fixed width for the sidebar
      left={"0"}
      top={"0"}
      zIndex={"2"}
      bgColor={"white"}
    >
      <Flex align="center" justify="center">
        Sidebar
      </Flex>
    </Container>
  );
}
