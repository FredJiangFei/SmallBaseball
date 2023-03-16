import React from 'react';
import { Button, Modal } from 'native-base';

type PropType = {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: any;
};

const SbConfirm: React.FC<PropType> = (props) => {
  const { isOpen, onClose, title, content } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header fontSize="4xl" fontWeight="bold">
          {title}
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button mr="1" onPress={onClose} w={20}>
            Cancel
          </Button>
          <Button onPress={onClose} w={20}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default SbConfirm;
