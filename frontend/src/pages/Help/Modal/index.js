import React, { useState, useEffect } from 'react';
import { Input } from '@rocketseat/unform';
import { Container, FormElement } from './styles';

export default function Modal({ toggle, help }) {
  const [display, setDisplay] = useState(toggle);

  useEffect(() => {
    setDisplay(toggle);
  }, [toggle]);

  return (
    <Container display={display}>
      <FormElement>
        <h3>PERUNTA DO ALUNO</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pulvinar augue et diam hendrerit faucibus. Vestibulum nec euismod ex.
          Nunc eu pharetra enim, eget tempor urna. Phasellus quis mollis lorem.
          Suspendisse eleifend enim orci, in porttitor nulla tincidunt et. Morbi
          non felis mollis, auctor ante id, ultricies justo. Duis non fringilla
          nisi
        </p>

        <label htmlFor="answer">SUA RESPOSTA</label>
        <Input name="anwser" multiline />
        <button type="submit">Responder aluno</button>
      </FormElement>
    </Container>
  );
}
