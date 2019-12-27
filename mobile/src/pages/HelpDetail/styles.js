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

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
