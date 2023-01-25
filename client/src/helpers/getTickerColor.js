
const getTickerColor = function (name) {
  switch (name) {
    case 'AAPL':
      return '#666666';
    case 'GOOGL':
      return '#ED161E';
    case 'MSFT':
      return '#737373';
    case 'AMZN':
      return '#C26C03';
    case 'FB':
      return '#4267B2';
    case 'TSLA':
      return '#E31937';
    default:
      return '#fff';
  }
};

export default getTickerColor;
