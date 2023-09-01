import { Container, Flex, Center, Icon, Text } from "@chakra-ui/react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import { MdArticle, MdPlaylistAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function EditPage() {
  const nav = useNavigate();
  return (
    <Container maxW={"1500px"} display={"flex"}>
      <SideBar />
      <TopBar />
      <Flex
        position={"absolute"}
        maxW={"1468px"}
        padding={"96px 0 0 212px"}
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
              // justifyContent={"center"}
              gap={"0.2rem"}
              padding={"0.3rem"}
              color={"grey"}
              cursor={"pointer"}
              _hover={{ backgroundColor: "white", color: "#51B15C" }}
              width={"12rem"}
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
          {/* edited article */}
          <Flex bgColor={"white"} padding={"2rem 1rem"} height={"100%"}></Flex>
          {/* edited article */}
        </Flex>
      </Flex>
    </Container>
  );
}
