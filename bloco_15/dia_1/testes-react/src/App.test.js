import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import App from './App';



describe('Tela de inserção do email', () => {
  it('Verifica se existe campo <Input> com label Email:', () => {
    //Acessar
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
  
    //Manipular
  
    //Testar
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  
  it('Verifica se existem dois botões', () => {
    //Acessar
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button');

    //Manipular

    //Testar
    expect(buttons.length).toBe(2);
  });
  
  it('Verifica se existe botão com id-send do tipo button e valor ENVIAR', () => {
    //Acessar
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-send');

    //Manipular

    //Testar
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');
    expect(btn).toHaveValue('Enviar');
  });

  it('Verificando se o botão e o campo email estão funcionando.', () => {
    const { getByTestId, getByLabelText } = render(<App />);
  
    const EMAIL_USER = 'email@email.com';
  
    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  
    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });

});


// --------------------------------------------------------

/* it.skip('Verifica que...', () => {
  //Acessar (Descontroi os seletores que serão usados no elemento <X /> renderizado, e os usa para associar elementos html a variaveis )
  const { getByTestId } = render(<App />);
  const emailInput = getByTestId('id-email');
  
  //Manipular

  //Testar
  
}); */


/* // Testes original REACT app
it.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// Testes com RTL Movie Card Library CRUD
describe('Testando MovieList', () => {

  
  // Versão com descontrução
  it.skip('Verifica se "Carregando..." está sendo renderizado na tela', () => {
    const {queryByText} = render(<App />);

    expect(queryByText('Carregando...')).toBeDefined();
  });

  // Versão sem descontrução
  it.skip('Verifica se "Carregando..." está sendo renderizado na tela, sem desconstrução', () => {
    render(<App />);

    expect(screen.queryByText('Carregando...')).toBeDefined();
  });

}); */