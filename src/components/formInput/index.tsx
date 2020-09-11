import React from 'react';
import { TextInput } from 'react-native-paper';
import { Props } from './types';
import { styles } from './styles';

export const FormInput: React.FC<Props> = (props) => {
  const { labelName, ...rest } = props;

  return (
    <TextInput
      label={labelName}
      style={styles.input}
      numberOfLines={1}
      {...rest}
    />
  );
};
