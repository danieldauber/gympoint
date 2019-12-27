import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  background: #f4f4f4;
  flex: 1;
  height: 100%;
`;

export const Form = styled.View`
  align-self: stretch;
  margin: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  background-color: #fff;
  height: 250px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
