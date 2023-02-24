// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

describe('Testando o fetch inicial e após o clique do botão', () => {
  it('fetches a joke', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke),
    });
  
    render(<App />);
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://icanhazdadjoke.com/',
      { headers: { Accept: 'application/json' } },
    );
  });
  
  it('fetches a new joke when button is clicked', async () => {
    const joke1 = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    const joke2 = {
      id: 'R7UfaahVfFd',
      joke: 'My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.',
      status: 200
    }
  
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke1),
    });
  
    render(<App />);
    const renderedJoke1 = await screen.findByText(joke1.joke);
    expect(renderedJoke1).toBeInTheDocument();
    expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    
    const button = screen.getByRole('button');
  
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke2),
    });
  
    userEvent.click(button);
  
    const renderedJoke2 = await screen.findByText(joke2.joke);
    expect(renderedJoke2).toBeInTheDocument();
    expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument()
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });
})