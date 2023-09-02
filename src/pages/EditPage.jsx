import { Container, Flex, Center, Icon, Text, Box } from "@chakra-ui/react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import { MdArticle, MdPlaylistAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Addit from "../components/Addit";

export default function EditPage() {
  const nav = useNavigate();
  return (
    <Container maxW={"1500px"} display={"flex"} height={"100vh"}>
      <SideBar />
      <TopBar />
      <Flex
        bgColor={"#F7F7F7"}
        position={"absolute"}
        maxW={"1468px"}
        padding={"96px 0 0 206px"}
        width={"100%"}
        height={"100%"}
      >
        <Flex
          flexDir={"column"}
          padding={"1rem 2rem"}
          gap={"1rem"}
          width={"100%"}
        >
          <Flex>
            <Flex
              alignItems={"center"}
              height={"100%"}
              gap={"0.2rem"}
              padding={"0.3rem"}
              color={"grey "}
              cursor={"pointer"}
              _hover={{ backgroundColor: "white", color: "#51B15C" }}
              width={"12rem"}
              maxH={"4rem"}
              onClick={() => nav("/")}
            >
              <Center
                border={"1px solid"}
                borderRadius={"100%"}
                padding={"0.2rem"}
              >
                <Icon fontSize={"1.7rem"} as={MdArticle}></Icon>
              </Center>

              <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text fontSize={"1rem"}>Article</Text>
                <Text fontSize={"0.7rem"}>List Article</Text>
              </Flex>
            </Flex>
            <Flex
              alignItems={"center"}
              // justifyContent={"center"}
              gap={"0.2rem"}
              padding={"0.3rem"}
              borderBottom={"2px solid #51B15C"}
              color={"#51B15C"}
              cursor={"pointer"}
              _hover={{ backgroundColor: "white", color: "#51B15C" }}
              width={"12rem"}
              maxH={"4rem"}
            >
              <Center
                border={"2px solid"}
                borderRadius={"100%"}
                padding={"0.2rem"}
              >
                <Icon fontSize={"1.7rem"} as={MdPlaylistAdd}></Icon>
              </Center>
              <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text fontSize={"1rem"}>Add/Edit</Text>
                <Text fontSize={"0.7rem"}>Detail Article</Text>
              </Flex>
            </Flex>
          </Flex>
          <Box height={"90%"}>
            <Addit />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
