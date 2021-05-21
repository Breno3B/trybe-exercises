import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testando o componente ValidEmail', () => {

  it('Testa o componente, caso o email seja valido.', () => {
    const EMAIL_USER = 'email@email.com';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Valido');
    expect(isValid).toBeInTheDocument();
  });
  
  it('Testa o componente, caso o email seja invalido.', () => {
    const EMAIL_USER = 'emailerrado';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

});


