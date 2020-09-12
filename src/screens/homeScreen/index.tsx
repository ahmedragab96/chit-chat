import React, { useContext } from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import { styles } from './styles';
import { FormButton } from '../../components/formButton';
import { AuthContext } from '../../navigation/authProvider';

export default function HomeScreen() {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Title>Home Screen</Title>
      <Title>All chat rooms will be listed here</Title>
      <FormButton
        modeValue="contained"
        title="Logout"
        onPress={() => logout!()}
      />
    </View>
  );
}
