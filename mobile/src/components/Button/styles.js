import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity)`
  height: 46px;
  background: #ee4e62;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
