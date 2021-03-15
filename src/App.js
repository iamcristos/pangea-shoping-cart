import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';

import { FETCH_PRODUCTS, FETCH_CURRENCY } from './Query/index';
import Products from './components/Products';
import Modal from './components/Modal';
import Cart from './components/Cart';

// Global Font
import GlobalFont from './fonts/fonts';
import AppSpinner from './components/AppSpinner';

function App() {
  const [ currencyValue, setCurrency ] = useState('USD')
  const [getProducts, { data, loading, error }] = useLazyQuery(FETCH_PRODUCTS, {variables: {currency: currencyValue}});
  const { data: currency, loading: loadingCurrency } = useQuery(FETCH_CURRENCY);
  const [isOpen, setOpen] = useState(false);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  useEffect(() => {
    if(cart.length && !loading) {
      const newCart = cart.map(item => {
          const product = data.products.find(product => (item.id === product.id));
          item.price = product.price;
          item.total = Number(item.count * item.price);
          return item;
      });
      setCart(newCart);
    }
  }, [data])
  const search = (data) => {
    let exists = false;
    const newCart = [...cart].map((item) => {
      if (item.id === data.id) {
        item.count = Number(item.count) + 1;
        item.total = Number(item.count * item.price);
        exists = true;
        return item;
      }
      return item;
    });
    return { exists, newCart };
  };

  const addCart = (item) => {
    const { exists, newCart } = search(item);
    if (exists) {
      setCart(newCart);
      return;
    }
    const temp = [...cart];
    temp.push({ ...item, count: 1, total: item.price });
    setCart(temp);
  };

  const removeCart = (data) => {
    const newCart = cart.map((item) => {
      if (item.id === data.id && item.count > 1) {
        item.count = Number(item.count) - 1;
        item.total = Number(item.count * item.price);
        return item;
      }
      return item;
    });
    setCart(newCart);
  };

  const handleOpen = (data) => {
    addCart(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteCart = ({ id }) => {
    const newCart = [...cart].filter((item) => item.id !== id);
    setCart(newCart);
  };

  const changeCurrency = (e) => {
    const {value} = e.target;
    setCurrency(value);
  }
  return (
    <>
      <GlobalFont />
      {loading && loadingCurrency ? (
        <AppSpinner />
      ) : (
        <Products data={data} handleOpen={handleOpen} addCart={addCart} currencyValue={currencyValue}/>
      )}
      <Modal isOpen={isOpen}>
        <Cart
          addCart={addCart}
          removeCart={removeCart}
          carts={cart}
          handleClose={handleClose}
          deleteCart={deleteCart}
          currency={currency?.currency}
          changeCurrency={changeCurrency}
          currencyValue={currencyValue}
          loading={loading}
        />
      </Modal>
    </>
  );
}

export default App;
