import { Container, Flex } from "@chakra-ui/react";

export default function TopBar() {
  return (
    <Container
      maxW={"1260px"}
      height={"94px"}
      top={"0"}
      zIndex={"2"}
      bgColor={"white"}
    >
      <Flex align="center" justify="center">
        TopBar
      </Flex>
    </Container>
  );
}
