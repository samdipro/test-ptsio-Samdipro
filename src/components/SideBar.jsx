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
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function SideBar() {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "click",
      payload: {
        click: click,
      },
    });
  }, [click]);
  return (
    <Box
      width={click ? "100px" : "240px"}
      left={"0"}
      top={"0"}
      zIndex={"2"}
      bgColor={"white"}
    >
      <Flex padding={"2rem"} flexDir={"column"}>
        <Flex padding={"0 1rem 2rem 1rem"} justifyContent={"start"}>
          <Center
            cursor={"pointer"}
            _hover={{ opacity: "0.8" }}
            padding={"0.4rem"}
            borderRadius={"100%"}
            bgColor={"#51B15C"}
            onClick={() => setClick(!click)}
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
          display={click ? "none" : "flex"}
        >
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
          display={click ? "none" : "flex"}
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
