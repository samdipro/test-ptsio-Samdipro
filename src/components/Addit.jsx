import {
  Flex,
  Icon,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { MdArticle } from "react-icons/md";
import { api } from "../api/api";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModalDelete2 from "./Modals/ModaDelete2";
import Swal from "sweetalert2";

export default function Addit() {
  const nav = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [textareaValue, setTextareaValue] = useState("");
  const [title, setTitle] = useState("");

  async function fetch() {
    try {
      const result = await api.get("articles/" + id);
      // setData(result.data.data);
      setTextareaValue(result.data.data.content);
      setTitle(result.data.data.title);
    } catch (error) {
      console.log(error);
    }
  }

  async function edit() {
    try {
      console.log(id);
      if (id === "new") {
        const result = await api.post("articles", {
          title: title,
          content: textareaValue,
        });
        console.log(result);
        nav("/addit/" + result.data.data.id);
      } else {
        const result = await api.put("articles/" + id, {
          title: title,
          content: textareaValue,
        });
        console.log(result);
      }
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Submited",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(data);
  // console.log({ title, textareaValue });
  useEffect(() => {
    fetch();
  }, []);

  return (
    <Flex bgColor={"white"} padding={"1rem"} height={"100%"} flexDir={"column"}>
      <Flex
        justifyContent={"end"}
        gap={"1rem"}
        padding={"0.2rem 1rem"}
        flexDir={"column"}
        height={"100%"}
      >
        <Flex fontSize={"xl"} fontWeight={"semibold"} height={"10%"}>
          Add / Edit
        </Flex>
        <Flex height={"90%"} flexDir={"column"}>
          <Flex flexDir={"column"}>
            <Text>Title</Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon fontSize={"xl"} color={"grey"} as={MdArticle} />
              </InputLeftElement>
              <Input
                bgColor={"#F7F7F7"}
                maxW={"40%"}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Flex>
          <Flex flexDir={"column"}>
            <Text>Title</Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon fontSize={"sm"} color={"grey"} as={MdArticle} />
              </InputLeftElement>
              <Textarea
                paddingLeft={"2rem"}
                maxW={"70%"}
                bgColor={"#F7F7F7"}
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              />
            </InputGroup>
          </Flex>
          <Flex padding={"1rem 0"} gap={"1rem"}>
            <Button
              bgColor={"#51B15C"}
              _hover={{ backgroundColor: "#51B15C", opacity: "0.8" }}
              onClick={() => edit()}
            >
              Save
            </Button>
            {id !== "new" ? (
              <ModalDelete2 id={id} title={title}></ModalDelete2>
            ) : null}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
