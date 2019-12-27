import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { checkInRequest } from '~/store/modules/checkin/actions';

import Background from '~/components/Background';

import {
  Container,
  CheckInItem,
  CheckInList,
  CheckinButton,
  CheckinButtonText,
  CheckInId,
  CheckInTime,
} from './styles';

function Checkin({ isFocused }) {
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCheckins() {
      const response = await api.get(`/students/${user}/checkins`);

      const data = response.data.map(checkin => ({
        ...checkin,
        timeDistance: formatDistance(parseISO(checkin.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));

      setCheckins(data);
    }
    setLoading(false);
    getCheckins();
  }, [user, loading]);

  function handleCheckin() {
    dispatch(checkInRequest(user));
    setLoading(true);
  }

  return (
    <Background>
      <Container>
        <CheckinButton onPress={handleCheckin}>
          <CheckinButtonText>Novo Checkin</CheckinButtonText>
        </CheckinButton>
        <CheckInList
          data={checkins}
          keyExtractor={checkin => String(checkin.id)}
          renderItem={({ item: checkin }) => (
            <CheckInItem>
              <CheckInId>Check-in #{checkin.id}</CheckInId>
              <CheckInTime>{checkin.timeDistance}</CheckInTime>
            </CheckInItem>
          )}
        />
      </Container>
    </Background>
  );
}

Checkin.navigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: '#fff',
  },
});

export default withNavigationFocus(Checkin);
