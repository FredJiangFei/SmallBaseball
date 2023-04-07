import React from 'react';
import {
  FormControl,
  IInputProps,
  Input,
  Stack,
  WarningOutlineIcon,
} from 'native-base';

type PropType = {
  label: string;
  error: any;
  helperText?: string;
};

const SbFormControl: React.FC<IInputProps & PropType> = (props) => {
  const { label, isRequired, isDisabled, error, helperText, ...rest } = props;

  return (
    <FormControl isRequired={isRequired} isInvalid={error} isDisabled={isDisabled}>
      <Stack>
        <FormControl.Label
          _disabled={{
            _text: {
              color: 'gray.400',
              fontWeight: 'bold',
            },
          }}
        >
          {label}
        </FormControl.Label>
        <Input isRequired={isRequired} placeholder={label} {...rest} />
        {helperText && !error && (
          <FormControl.HelperText>{helperText}</FormControl.HelperText>
        )}
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          {error}
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
};

export default SbFormControl;
