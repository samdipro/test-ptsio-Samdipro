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

export default function ModalDelete() {
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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>content</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
