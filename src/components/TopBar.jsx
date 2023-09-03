import { Box, Image, Flex, Icon, Center, Avatar } from "@chakra-ui/react";
import { BiChevronDown, BiSolidBell } from "react-icons/bi";
import uK from "../assets/united-kingdom.png";
import men from "../assets/man.png";

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
      <Flex width={"100%"} padding={"1rem"} justifyContent={"space-evenly"}>
        <Flex fontSize={"2xl"} fontWeight={"semibold"} width={"65%"}>
          Article
        </Flex>
        <Flex>
          <Flex padding={"0 1rem"} alignItems={"center"} gap={"0.5rem"}>
            <Image height={"1.5rem"} src={uK}></Image>
            <Icon fontSize={"xl"} cursor={"pointer"} as={BiChevronDown}></Icon>
          </Flex>

          <Center cursor={"pointer"}>
            <Icon fontSize={"2xl"} as={BiSolidBell} color={"#51B15C"}></Icon>
          </Center>
        </Flex>
        <Flex alignItems={"center"} gap={"0.2rem"}>
          <Avatar src={men} size={"sm"}></Avatar>
          <Icon fontSize={"xl"} cursor={"pointer"} as={BiChevronDown}></Icon>
        </Flex>
      </Flex>
    </Box>
  );
}
