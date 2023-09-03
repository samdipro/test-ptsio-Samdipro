import {
  Icon,
  Button,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { api } from "../../api/api";

export default function ModalDelete(props) {
  const { id, title, fetch } = props;

  async function hapus() {
    try {
      console.log(id);
      await api.delete("articles/" + id);
      return fetch();
    } catch (error) {
      console.log(error);
    }
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center
        padding={"0.2rem"}
        cursor={"pointer"}
        onClick={onOpen}
        bgColor={"#FF1D1D"}
        borderRadius={"100%"}
      >
        <Icon fontSize={"1.3rem"} color={"white"} as={MdDelete}></Icon>
      </Center>

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
            <Button
              colorScheme="red"
              onClick={() => {
                hapus();
                onClose();
              }}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
