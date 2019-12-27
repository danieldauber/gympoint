import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import { Container, Form, FormInput, SubmitButton } from './styles';

import { helpRequest } from '~/store/modules/help/actions';

function HelpForm({ isFocused, navigation }) {
  const [question, setQuestion] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const nav = useSelector(state => state.help.nav);

  function handleSubmit() {
    const help = {
      question,
      user,
    };

    dispatch(helpRequest(help));
  }

  useEffect(() => {
    if (nav) {
      navigation.navigate('HelpList');
    }
  }, [nav, navigation]);

  return (
    <Container>
      <Form>
        <FormInput
          placeholder="Inclua seu pedido de auxílio"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={question}
          onChangeText={setQuestion}
          multiline
          name="question"
          numberOfLines={30}
          textAlignVertical="top"
        />
        <SubmitButton onPress={handleSubmit}>Enviar Pedido</SubmitButton>
      </Form>
    </Container>
  );
}

HelpForm.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});

export default withNavigationFocus(HelpForm);
