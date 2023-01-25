// AAPL - Apple;
// GOOGL - Alphabet;
// MSFT - Microsoft;
// AMZN - Amazon;
// FB - Facebook;
// TSLA - Tesla;

const getTickerFullName = function (name) {
  switch (name) {
    case 'AAPL':
      return 'Apple';
    case 'GOOGL':
      return 'Alphabet';
    case 'MSFT':
      return 'Microsoft';
    case 'AMZN':
      return 'Amazon';
    case 'FB':
      return 'Facebook';
    case 'TSLA':
      return 'Tesla';
    default:
      return 'Anonymous Company';
  }
};

export default getTickerFullName;
