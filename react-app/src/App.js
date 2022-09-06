import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/Navigation/User';
import { authenticate } from './store/session';
import HomePage from './components/Home/HomePage';
import ImageUpload from './components/Shop/ImageUpload';
import Product from './components/Product';
import '../src/components/CSS/Fonts.css'
import Shop from './components/Shop';
import Cart from './components/Cart';
import { ModalProvider } from './components/Context/modal'
import ProductsByCategory from './components/Product/ProductsByCategory';
import ShopManager from './components/Shop/ShopManager';
import Purchases from './components/Purchases';

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
          <Route path='/sign-in' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          <Route path='/products/:productId'>
            <Product />
          </Route>
          <Route path='/featured/:category'>
            <ProductsByCategory />
          </Route>
          <ProtectedRoute path='/shop' exact={true} >
            <Shop />
          </ProtectedRoute>
          <ProtectedRoute path='/shop/products' exact={true} >
            <ShopManager />
          </ProtectedRoute>
          <ProtectedRoute path='/purchases' exact={true} >
            <Purchases />
          </ProtectedRoute>
          <Route path='/images'>
            <ImageUpload />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          {/* <ProtectedRoute path='/users' exact={true} >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User />
          </ProtectedRoute> */}
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
