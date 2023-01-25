import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SocketMock from 'socket.io-mock';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Finance from './pages/Finance/Finance';

import {
  phoneNumber,
  address,
  email,
  facebookLink,
  instagramLink,
  googleLink,
} from './static/companyInfo';
import { homeHeading, financesHeading } from './static/texts';

const user = userEvent.setup();
const initialState = {
  tickers: {
    tickers: [
      {
        change: '159.40',
        change_percent: '0.74',
        dividend: '0.23',
        exchange: 'NASDAQ',
        price: '244.40',
        ticker: 'AAPL',
      },
      {
        change: '159.40',
        change_percent: '0.74',
        dividend: '0.23',
        exchange: 'NASDAQ',
        price: '244.40',
        ticker: 'TSLA',
      },
    ],
    disabledTickers: [''],
    numberOfUserTickers: 0,
    starredTickers: [''],
  },
};

const mockStore = configureStore();
let store = mockStore(initialState);

const renderComponent = (component) =>
  render(<Provider store={store}>{component}</Provider>, {
    wrapper: BrowserRouter,
  });

// Test 404 page
test('landing on a bad page', () => {
  const badRoute = '/some/bad/route';
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  expect(screen.getByAltText('Page not found')).toBeInTheDocument();
});

//test home page
test('home page rendering', async () => {
  renderComponent(<Home />);
  expect(screen.getByText(homeHeading)).toBeInTheDocument();
  expect(screen.getByTestId('home-paragraph')).toBeInTheDocument();
  expect(screen.getByTestId('go-to-finances')).toBeInTheDocument();
  await user.click(screen.getByTestId('go-to-finances'));
  expect(global.window.location.pathname).toBe('/finances');
});

// test header
test('header rendering', async () => {
  renderComponent(<Header />);
  expect(screen.getByAltText('Finance App Logo')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Finances' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  await user.click(screen.getByRole('link', { name: 'Home' }));
  expect(global.window.location.pathname).toBe('/');
  await user.click(screen.getByRole('link', { name: 'Finances' }));
  expect(global.window.location.pathname).toBe('/finances');
});

// test footer
test('footer rendering', async () => {
  renderComponent(<Footer />);
  expect(screen.getByText(phoneNumber)).toBeInTheDocument();
  expect(screen.getByText(address)).toBeInTheDocument();
  expect(screen.getByText(email)).toBeInTheDocument();
  expect(screen.getByTitle('instagram-icon')).toBeInTheDocument();
  expect(screen.getByTitle('facebook-icon')).toBeInTheDocument();
  expect(screen.getByTitle('googleplus-icon')).toBeInTheDocument();
  expect(screen.getByTestId('fb-link')).toHaveAttribute('href', facebookLink);
  expect(screen.getByTestId('gplus-link')).toHaveAttribute('href', googleLink);
  expect(screen.getByTestId('instagram-link')).toHaveAttribute(
    'href',
    instagramLink,
  );
});

//test home page
test('home page rendering', async () => {
  renderComponent(<Home />);
  expect(screen.getByText(homeHeading)).toBeInTheDocument();
  expect(screen.getByTestId('home-paragraph')).toBeInTheDocument();
  expect(screen.getByTestId('go-to-finances')).toBeInTheDocument();
  await user.click(screen.getByTestId('go-to-finances'));
  expect(global.window.location.pathname).toBe('/finances');
});

//test finances page
test('finances page rendering', async () => {
  renderComponent(<Finance />);
  expect(screen.getByText(financesHeading)).toBeInTheDocument();
  expect(screen.getByAltText('Finances page banner')).toBeInTheDocument();
});

//test socket connection
it('testing socket connection without server', async () => {
  let socket = new SocketMock();
  socket.on('ticker', function (message) {
    expect(message).toHaveLength(6);
  });
  socket.socketClient.emit('ticker', [
    {
      change: '122.25',
      change_percent: '0.39',
      dividend: '0.11',
      exchange: 'NASDAQ',
      last_trade_time: '2023-01-22T11:36:07.000Z',
      price: '266.02',
      ticker: 'AAPL',
      yield: '1.69',
    },
    {
      change: '122.25',
      change_percent: '0.39',
      dividend: '0.11',
      exchange: 'NASDAQ',
      last_trade_time: '2023-01-22T11:36:07.000Z',
      price: '266.02',
      ticker: 'GOOGL',
      yield: '1.69',
    },
    {
      change: '122.25',
      change_percent: '0.39',
      dividend: '0.11',
      exchange: 'NASDAQ',
      last_trade_time: '2023-01-22T11:36:07.000Z',
      price: '266.02',
      ticker: 'MSFT',
      yield: '1.69',
    },
    {
      change: '122.25',
      change_percent: '0.39',
      dividend: '0.11',
      exchange: 'NASDAQ',
      last_trade_time: '2023-01-22T11:36:07.000Z',
      price: '266.02',
      ticker: 'AMZN',
      yield: '1.69',
    },
    {
      change: '122.25',
      change_percent: '0.39',
      dividend: '0.11',
      exchange: 'NASDAQ',
      last_trade_time: '2023-01-22T11:36:07.000Z',
      price: '266.02',
      ticker: 'FB',
      yield: '1.69',
    },
    {
      change: '122.25',
      change_percent: '0.39',
      dividend: '0.11',
      exchange: 'NASDAQ',
      last_trade_time: '2023-01-22T11:36:07.000Z',
      price: '266.02',
      ticker: 'TSLA',
      yield: '1.69',
    },
  ]);
}, 60_000);
