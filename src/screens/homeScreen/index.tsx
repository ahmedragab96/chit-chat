import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import { styles } from './styles';
import { FormButton } from '../../components/formButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Title>Home Screen</Title>
      <Title>All chat rooms will be listed here</Title>
      <FormButton modeValue="contained" title="Logout" />
    </View>
  );
}
