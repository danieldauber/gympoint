import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Input } from '@rocketseat/unform';
import { Container, FormElement, Submit } from './styles';

import { updateHelpRequest } from '~/store/modules/help/actions';

export default function Modal({ toggle, help }) {
  const ref = useRef();
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(toggle);

  const schema = Yup.object().shape({
    answer: Yup.string().required('A resposta é obrigatória'),
  });

  useEffect(() => {
    setDisplay(toggle);
  }, [toggle]);

  function handleAnswer({ answer }) {
    dispatch(
      updateHelpRequest({
        answer,
        id: help.id,
      })
    );
    setDisplay(false);
  }

  return (
    <Container ref={ref} display={display.toString()}>
      <FormElement schema={schema} onSubmit={handleAnswer}>
        <h3>PERGUNTA DO ALUNO</h3>
        <p>{help.question}</p>
        <label htmlFor="answer">SUA RESPOSTA</label>
        <Input name="answer" multiline rows={4} />
        <Submit type="submit">Responder aluno</Submit>
      </FormElement>
    </Container>
  );
}

Modal.propTypes = {
  toggle: PropTypes.bool,
  help: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    question: PropTypes.string,
  }),
};

Modal.defaultProps = {
  toggle: false,
  help: PropTypes.oneOfType([]),
};
