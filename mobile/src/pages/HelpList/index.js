import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';
import Background from '~/components/Background';
import Logo from '~/components/Logo';

import {
  Container,
  Title,
  List,
  CheckinButton,
  CheckinButtonText,
} from './styles';

function HelpList({ navigation }) {
  const [checkins, setCheckins] = useState('');

  return (
    <Background>
      <Container>
        <CheckinButton onPress={() => navigation.navigate('HelpForm')}>
          <CheckinButtonText>Novo pedido de auxílio</CheckinButtonText>
        </CheckinButton>
      </Container>
    </Background>
  );
}

HelpList.navigationOptions = ({ navigation }) => ({
  headerLeft: null,
});

export default withNavigationFocus(HelpList);
