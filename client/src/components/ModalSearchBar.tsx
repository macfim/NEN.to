import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  HStack,
} from "@chakra-ui/react";

const ModalSearchBar = ({
  isOpen,
  onClose,
  value,
  onChange,
  handleSubmit,
}: any) => {
  const onSubmit = () => {
    onClose();
    handleSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={onSubmit}>
          <ModalHeader>Search for a movie</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={value} onChange={onChange} />
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button variant="ghost" type="submit">
                Search
              </Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </HStack>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalSearchBar;
