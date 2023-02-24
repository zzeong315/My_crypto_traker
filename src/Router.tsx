import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './router/Coin';
import Coins from './router/Coins';

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Coins />}/>
        <Route path={`${process.env.PUBLIC_URL}/:coinId/*`} element={<Coin />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
