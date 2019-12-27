import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import Background from '~/components/Background';

import {
  Container,
  ListHelps,
  Item,
  HelpHeader,
  CreatedAt,
  Answer,
  Question,
  CheckinButton,
  CheckinButtonText,
} from './styles';

function HelpList({ navigation }) {
  const [helps, setHelps] = useState([]);
  const user = useSelector(state => state.auth.user);
  const nav = useSelector(state => state.help.nav);

  useEffect(() => {
    async function getHelps() {
      const response = await api.get(`/students/${user}/help-orders`);

      const data = response.data.map(help => ({
        ...help,
        answered: !!help.answer_at,
        timeDistance: formatDistance(parseISO(help.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));

      setHelps(data);
    }
    getHelps();
  }, [user, nav]);

  return (
    <Background>
      <Container>
        <CheckinButton onPress={() => navigation.navigate('HelpForm')}>
          <CheckinButtonText>Novo pedido de auxílio</CheckinButtonText>
        </CheckinButton>
        <ListHelps
          data={helps}
          keyExtractor={help => String(help.id)}
          renderItem={({ item: help }) => (
            <Item onPress={() => navigation.navigate('HelpDetail', { help })}>
              <HelpHeader>
                <Answer answered={help.answered}>
                  {help.answered
                    ? `${(<Icon name="textsms" size={20} />)} Respondido`
                    : `${(<Icon name="textsms" size={20} />)} Sem resposta`}
                </Answer>
                <CreatedAt>{help.timeDistance}</CreatedAt>
              </HelpHeader>

              <Question>{help.question}</Question>
            </Item>
          )}
        />
      </Container>
    </Background>
  );
}

HelpList.navigationOptions = ({ navigation }) => ({
  headerLeft: null,
});

export default withNavigationFocus(HelpList);
