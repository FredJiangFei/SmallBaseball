import React from 'react';
import { Actionsheet } from 'native-base';
import { Action } from '../models/Action';

type PropType = {
  isOpen: boolean;
  onClose: any;
  actions: Action[];
};

const SbMenu: React.FC<PropType> = (props) => {
  const { isOpen, onClose, actions } = props;

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        {actions?.map((item) => (
          <Actionsheet.Item key={item.label} isDisabled={item.disabled} onPress={item.onPress}>
            {item.label}
          </Actionsheet.Item>
        ))}
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default SbMenu;
