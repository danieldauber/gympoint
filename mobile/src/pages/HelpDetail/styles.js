import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #f4f4f4;
  flex: 1;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Item = styled.View`
  border: 1px solid #e4e4e4;
  padding: 15px;
  margin: 15px;
  background: #fff;
  border-radius: 5px;
`;

export const QuestionItem = styled.View``;

export const Question = styled.Text`
  color: #666;
  margin: 15px 0;
`;

export const QuestionTitle = styled.Text`
  font-weight: bold;
`;

export const QuestionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const CreatedAt = styled.Text``;

export const AnswerItem = styled.View``;
export const Answer = styled.Text`
  color: #666;
  margin: 15px 0;
`;

export const AnswerTitle = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
