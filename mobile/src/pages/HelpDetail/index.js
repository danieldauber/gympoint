import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';
import Background from '~/components/Background';

import {
  Container,
  Item,
  Question,
  QuestionItem,
  QuestionHeader,
  CreatedAt,
  Answer,
  AnswerItem,
  AnswerTitle,
  QuestionTitle,
} from './styles';

function HelpDetail({ isFocused, navigation }) {
  const [helpDetail, setHelpDetail] = useState([]);

  const help = navigation.getParam('help');

  useEffect(() => {
    setHelpDetail(help);
  }, [help]);

  return (
    <Container>
      <Item>
        <QuestionItem>
          <QuestionHeader>
            <QuestionTitle>PERGUNTA</QuestionTitle>
            <CreatedAt>{helpDetail.timeDistance}</CreatedAt>
          </QuestionHeader>
          <Question>{helpDetail.question}</Question>
        </QuestionItem>
        <AnswerItem>
          <AnswerTitle>Resposta</AnswerTitle>
          <Answer>{helpDetail.answer}</Answer>
        </AnswerItem>
      </Item>
    </Container>
  );
}

HelpDetail.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});

export default withNavigationFocus(HelpDetail);
