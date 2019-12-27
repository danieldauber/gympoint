import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Container = styled.SafeAreaView`
  background: #f4f4f4;
  flex: 1;
  height: 100%;
  margin: 10px 10px 20px;
`;

export const ListHelps = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 5 },
})``;

export const Item = styled(TouchableOpacity)`
  border: 1px solid #e4e4e4;
  padding: 15px;
  margin: 10px 0 5px;
  background: #fff;
  border-radius: 5px;
`;
export const HelpHeader = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const CreatedAt = styled.Text`
  color: #666;
  flex: 0.8;
`;

export const Question = styled.Text`
  font-size: 14px;
  line-height: 26px;
  color: #666;
`;

export const AnswerHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Answer = styled.Text`
  font-weight: bold;
  margin-left: 5px;
  color: ${props => (props.answered ? '#42cb59' : '#999')};
`;

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
