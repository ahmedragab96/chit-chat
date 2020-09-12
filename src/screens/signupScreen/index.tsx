import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Title, IconButton, DefaultTheme } from 'react-native-paper';
import { FormInput } from '../../components/formInput';
import { FormButton } from '../../components/formButton';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../navigation/authProvider';

export default function SignupScreen() {
  const { register } = useContext(AuthContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Register to chat</Title>
      <FormInput
        labelName="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={(userEmail) => setEmail(userEmail)}
        theme={DefaultTheme}
      />
      <FormInput
        labelName="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
        theme={DefaultTheme}
      />
      <FormButton
        title="Signup"
        modeValue="contained"
        labelStyle={styles.loginButtonLabel}
        onPress={() => register!(email, password)}
      />
      <IconButton
        icon="keyboard-backspace"
        size={30}
        style={styles.navButton}
        color="#6646ee"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
