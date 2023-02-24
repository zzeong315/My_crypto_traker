import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './router/Coin';
import Coins from './router/Coins';

const Router = () => {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`/`} element={<Coins />}/>
        <Route path={`/:coinId/*`} element={<Coin />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
