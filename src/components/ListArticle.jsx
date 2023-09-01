import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Center,
  Icon,
} from "@chakra-ui/react";
import ModalDelete from "./Modals/ModalDelete";
import { MdEditSquare } from "react-icons/md";
import { api } from "../api/api";
import { useEffect, useState } from "react";

export default function ListArticle() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(7);

  async function fetch() {
    try {
      const params = {
        page: page,
        page_size: total,
      };
      const result = await api.get("articles", { params });
      setData(result.data.data.articles);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(data);
  useEffect(() => {
    fetch();
  }, []);

  return (
    <Flex bgColor={"white"} padding={"2rem 1rem"}>
      <TableContainer width={"100%"}>
        <Table variant="simple">
          <Thead style={{ backgroundColor: "#EEF7EF" }}>
            <Tr>
              <Th>Date</Th>
              <Th>Title</Th>
              <Th>Content</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((val) => {
              const createdAtDate = new Date(val.created_at);
              return (
                <Tr>
                  <Td>{createdAtDate.toLocaleString("id-ID")}</Td>
                  <Td>{val.title}</Td>
                  <Td>{val.content}</Td>
                  <Td>
                    <Flex gap={"0.5rem"}>
                      <Center
                        padding={"0.2rem"}
                        cursor={"pointer"}
                        bgColor={"#CF8812"}
                        borderRadius={"100%"}
                      >
                        <Icon
                          fontSize={"1.3rem"}
                          color={"white"}
                          as={MdEditSquare}
                        ></Icon>
                      </Center>
                      <ModalDelete></ModalDelete>
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          <Flex gap={"3rem"}>
            <Flex>total</Flex>
            <Flex gap={"1rem"}>
              <Flex>prev</Flex>
              <Flex>1</Flex>
              <Flex>2</Flex>
              <Flex>...</Flex>
              <Flex>last</Flex>
              <Flex>next</Flex>
            </Flex>
          </Flex>
        </Table>
      </TableContainer>
    </Flex>
  );
}
