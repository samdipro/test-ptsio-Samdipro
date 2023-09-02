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
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { api } from "../../api/api";

export default function ModalDelete(props) {
  const { id, title } = props;

  async function hapus() {
    try {
      console.log(id);
      const result = await api.delete("articles/" + id);
      console.log(result);
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
          <ModalHeader>Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Article: {title}</ModalBody>

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
