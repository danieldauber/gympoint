import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.SafeAreaView`
  background: #f4f4f4;
  flex: 1;
  height: 100%;
  margin: 10px 10px 20px;
`;

export const CheckInItem = styled.View`
  border: 1px solid #e4e4e4;
  padding: 15px;
  margin: 10px 0 5px;
  background: #fff;
  border-radius: 5px;
  justify-content: space-between;
  flex-direction: row;
`;

export const CheckInId = styled.Text`
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
`;

export const CheckInTime = styled.Text`
  color: #666;
  justify-content: flex-end;
`;

export const CheckInList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 0 },
})``;

export const CheckinButton = styled(TouchableOpacity)`
  background: #ee4e62;
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
