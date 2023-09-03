import { Container, Flex, Center, Icon, Text, Box } from "@chakra-ui/react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import { MdArticle, MdPlaylistAdd } from "react-icons/md";
import ListArticle from "../components/ListArticle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomePage() {
  const clickSelector = useSelector((state) => state.click);
  const nav = useNavigate();
  return (
    <Container maxW={"1500px"} display={"flex"} height={"100vh"}>
      <SideBar />
      <TopBar />
      <Flex
        position={"absolute"}
        maxW={"1468px"}
        // padding={clickSelector.click ? "96px 0 0 206px" : "96px 0 0 106px"}
        padding={clickSelector.click ? "96px 0 0 106px" : "96px 0 0 206px"}
        bgColor={"#F7F7F7"}
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
              borderBottom={"2px solid #51B15C"}
              color={"#51B15C"}
              cursor={"pointer"}
              _hover={{ backgroundColor: "white" }}
              width={"12rem"}
              maxH={"4rem"}
            >
              <Center
                border={"2px solid #51B15C"}
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
              gap={"0.2rem"}
              padding={"0.3rem"}
              color={"grey"}
              cursor={"pointer"}
              _hover={{ backgroundColor: "white", color: "#51B15C" }}
              width={"12rem"}
              maxH={"4rem"}
              onClick={() => nav("/addit/new")}
            >
              <Center
                border={"1px solid"}
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
            <ListArticle></ListArticle>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
