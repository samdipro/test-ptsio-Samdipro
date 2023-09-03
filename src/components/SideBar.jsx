import {
  Box,
  Flex,
  Icon,
  Center,
  Text,
  Divider,
  Image,
} from "@chakra-ui/react";
import { LuListEnd } from "react-icons/lu";
import { RiArticleFill } from "react-icons/ri";
import react from "../assets/structure.png";

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
      <Flex padding={"2rem"} flexDir={"column"}>
        <Flex padding={"0 1rem 2rem 1rem"} justifyContent={"start"}>
          <Center
            cursor={"pointer"}
            padding={"0.4rem"}
            borderRadius={"100%"}
            bgColor={"#51B15C"}
          >
            <Icon fontSize={"1.5rem"} as={LuListEnd}></Icon>
          </Center>
        </Flex>

        <Flex
          fontSize={"2xl"}
          alignItems={"center"}
          gap={"0.2rem"}
          height={"4rem"}
          padding={"2rem 1rem"}
          fontWeight={"bold"}
          justifyContent={"center"}
        >
          {/* <Icon color={"#5ed3f3"} as={FaReact}></Icon> */}
          <Image height={"2.5rem"} src={react}></Image>
          <Text color={"#51B15C"}> React</Text>
        </Flex>
        <Divider></Divider>
        <Flex
          padding={"2rem 1rem"}
          color={"#51B15C"}
          fontSize={"2xl"}
          alignItems={"center"}
          gap={"0.2rem"}
        >
          <Flex
            borderLeft={"2px solid #51B15C"}
            alignItems={"center"}
            _hover={{ backgroundColor: "#EEF7EF" }}
            padding={"0 0.4rem"}
            cursor={"pointer"}
          >
            <Icon color={"#51B15C"} as={RiArticleFill}></Icon>
            <Text>Article</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
