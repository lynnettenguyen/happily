import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import HomePage from './components/Home/HomePage';
import Product from './components/Product';
import '../src/components/CSS/Fonts.css'
import Shop from './components/Shop';
import Cart from './components/Cart';
import { ModalProvider } from './components/Context/modal'
import ProductsByCategory from './components/Product/ProductsByCategory';
import ProductsBySearch from './components/Product/ProductsBySearch';
import ShopManager from './components/Shop/ShopManager';
import Purchases from './components/Purchases';
import NotFound from './components/Navigation/NotFound';
import ProductsByShop from './components/Product/ProductsByShop';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <ModalProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/products/:productId'>
            <Product />
          </Route>
          <Route path='/featured/:category'>
            <ProductsByCategory />
          </Route>
          <Route path='/search/:category'>
            <ProductsBySearch />
          </Route>
          <Route path='/shop/:shopName' exact={true}>
            <ProductsByShop />
          </Route>
          <ProtectedRoute path='/shop' exact={true}>
            <Shop />
          </ProtectedRoute>
          <ProtectedRoute path='/shopManager'>
            <ShopManager />
          </ProtectedRoute>
          <ProtectedRoute path='/purchases'>
            <Purchases />
          </ProtectedRoute>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/' exact={true}>
            <HomePage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
