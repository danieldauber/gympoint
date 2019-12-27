import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';
import Background from '~/components/Background';

import { Container, Title } from './styles';

function HelpDetail({ isFocused }) {
  const [appointments, setApppoinments] = useState([]);

  return (
    <Container>
      <Text>Detalhe</Text>
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
