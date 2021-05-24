import React from 'react';
import { render } from '@testing-library/react'
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Testando Mocking Modules', () => {

  afterEach(() => jest.clearAllMocks());

  it('should fetch users', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    global.fetch = jest.fn(()=>
    Promise.resolve({
      json: ()=> Promise.resolve(joke)
    }));
  
    // Alternativa similar
    global.fetch = jest.fn(async () => ({
      json: async () => joke
    }));
  
    const { findByText } = render(<App />);
    await findByText('Whiteboards ... are remarkable.');
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
  });

});

describe('Testando inputs em React', () => {
  
  it.only('Alterando o valor dos campos e testando o valor guardado', () => {
    const { getByTestId } = render(<App />);
    const inputNome = getByTestId('input-nome');
    expect(inputNome).toHaveValue('');
    // fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });
    userEvent.type(inputNome, "Estudante da Trybe");
    expect(inputNome).toHaveValue('Estudante da Trybe');

    const inputEmail = getByTestId('input-email');
    expect(inputEmail).toHaveValue('');
    // fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
    userEvent.type(inputEmail, 'estudante@trybe.com' );
    expect(inputEmail).toHaveValue('estudante@trybe.com');
  });

});