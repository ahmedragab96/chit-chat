import { TextStyle, ViewStyle, StyleProp } from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';

export interface Props {
  title: string;
  modeValue: 'text' | 'outlined' | 'contained' | undefined;
  mode?: 'text' | 'outlined' | 'contained';
  dark?: boolean;
  compact?: boolean;
  color?: string;
  loading?: boolean;
  icon?: IconSource;
  disabled?: boolean;
  children?: React.ReactNode;
  uppercase?: boolean;
  accessibilityLabel?: string;
  onPress?: () => void;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  theme?: ReactNativePaper.Theme;
  testID?: string;
}
