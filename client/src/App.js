import './App.css';

import Home from './pages/Home/Home';
import Finance from './pages/Finance/Finance';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

// export const LocationDisplay = () => {
//   const location = useLocation();

//   return <div data-testid='location-display'>{location.pathname}</div>;
// };

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/finances' element={<Finance />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
