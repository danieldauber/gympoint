import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Container = styled.SafeAreaView`
  background: #f4f4f4;
  flex: 1;
  height: 100%;
  margin: 10px 10px 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const CheckinButton = styled(TouchableOpacity)`
  background: #e4e;
  border-radius: 4px;
  padding: 13px;
  align-items: center;
`;

export const CheckinButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  align-self: center;
`;
