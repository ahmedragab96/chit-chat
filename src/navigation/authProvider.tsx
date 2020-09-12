import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

type AuthContextProps = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = (props: Props) => {
  const [user, setUser] = useState(null);

  const login = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  const register = async (email: string, password: string) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
