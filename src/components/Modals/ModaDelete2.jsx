import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Icon,
  Center,
  Flex,
} from "@chakra-ui/react";
import { api } from "../../api/api";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function ModalDelete2(props) {
  const nav = useNavigate();
  const { id, title } = props;

  async function hapus() {
    try {
      console.log(id);
      await api.delete("articles/" + id);
      return nav("/");
    } catch (error) {
      console.log(error);
    }
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="red">
        Delete
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex alignItems={"center"} gap={"1rem"}>
              <Center
                bgColor={"#F7F7F7"}
                borderRadius={"100%"}
                padding={"1rem"}
              >
                <Icon color={"red"} as={BsTrash}></Icon>
              </Center>
              Delete Article
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete{" "}
            <span style={{ fontWeight: "bold" }}>{title}</span>? You can’t undo
            this action.
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={() => hapus()}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
