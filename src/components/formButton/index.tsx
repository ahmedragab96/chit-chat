import React from 'react';
import { Button, DefaultTheme } from 'react-native-paper';
import { styles } from './styles';
import { Props } from './types';

export const FormButton: React.FC<Props> = (props: Props) => {
  const { title, modeValue, ...rest } = props;
  return (
    <Button
      mode={modeValue}
      theme={DefaultTheme}
      {...rest}
      style={styles.button}
      contentStyle={styles.buttonContainer}
    >
      {title}
    </Button>
  );
};
