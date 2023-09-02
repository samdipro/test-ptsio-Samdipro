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
  Select,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import ModalDelete from "./Modals/ModalDelete";
import {
  MdEditSquare,
  MdAdd,
  MdNavigateNext,
  MdNavigateBefore,
  MdSearch,
} from "react-icons/md";
import { api } from "../api/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListArticle() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(5);
  const [search, serSearh] = useState();
  const nav = useNavigate();

  async function fetch() {
    try {
      const params = {
        page: page,
        page_size: total,
      };
      const result = await api.get("articles", { params });
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function cari() {
    try {
      const params = {
        search: search,
      };
      const result = await api.get("articles", { params });
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(data);
  useEffect(() => {
    fetch();
  }, [total, page]);

  return (
    <Flex bgColor={"white"} padding={"1rem"} height={"100%"} flexDir={"column"}>
      <Flex
        justifyContent={"end"}
        gap={"1rem"}
        padding={"0.2rem 1rem"}
        alignItems={"center"}
      >
        <Flex alignItems={"center"}>
          <Input
            width={"20rem"}
            placeholder="Search"
            type={"text"}
            onChange={(e) => serSearh(e.target.value)}
          ></Input>
          <Button
            variant={"unstyled"}
            _hover={{ opacity: "0.7" }}
            onClick={cari}
          >
            <Icon as={MdSearch} fontSize={"2xl"} />
          </Button>
        </Flex>

        <Button
          bgColor={"#51B15C"}
          _hover={{ bgColor: "#51B15C", opacity: "0.7" }}
          color={"white"}
          display={"flex"}
          alignItems={"center"}
          onClick={() => nav("addit/new")}
        >
          <Icon fontSize={"1.3rem"} as={MdAdd}></Icon>
          Add
        </Button>
      </Flex>
      <TableContainer
        // width={"100%"}
        height={"100%"}
        // overflowY={"hidden"}
        _hover={{ overflowY: "scroll" }}
      >
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
            {data?.articles?.map((val) => {
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
                          onClick={() => nav("/addit/" + val.id)}
                        ></Icon>
                      </Center>
                      <ModalDelete id={val.id} title={val.title} />
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Flex
          justifyContent={"end"}
          gap={"2rem"}
          alignItems={"center"}
          padding={"1rem"}
        >
          <Flex>
            <Select
              height={"2rem"}
              value={total}
              onChange={(e) => {
                setTotal(e.target.value);
                setPage(1);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </Select>
          </Flex>
          <Flex gap={"1rem"} alignItems={"center"}>
            <Button
              height={"2rem"}
              width={"1rem"}
              onClick={() => {
                page > 1 ? setPage(page - 1) : setPage(1);
              }}
            >
              <Icon as={MdNavigateBefore}></Icon>
            </Button>
            <Flex>
              Page:{" "}
              <Text margin={"0 6px"} fontWeight={"bold"}>
                {page}
              </Text>{" "}
              of {data?.page_info.last_page}
            </Flex>
            <Button
              height={"2rem"}
              width={"1rem"}
              onClick={() => {
                page >= data?.page_info.last_page
                  ? setPage(data?.page_info.last_page)
                  : setPage(page + 1);
              }}
            >
              <Icon as={MdNavigateNext}></Icon>
            </Button>
          </Flex>
        </Flex>
      </TableContainer>
    </Flex>
  );
}
