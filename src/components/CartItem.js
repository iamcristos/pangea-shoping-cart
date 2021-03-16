import React from 'react';
import { CartCard, Btn, ControlDiv, CartImage, CartContent } from './Styles';

function CartItem({carts, removeCart, addCart, deleteCart, currencyValue}) {
    return (
        <>
        {carts.length ? carts?.map(cart => (
        <CartCard key={cart.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px'}}>
                <p>{cart.title}</p>
                <div onClick={() => deleteCart(cart)} data-testid="removeCart">X</div>
            </div>
            <CartContent>
                <ControlDiv>
                    <Btn onClick={() => removeCart(cart)} data-testid="deleteCount">-</Btn>
                    <p>{cart.count}</p>
                    <Btn onClick={() => addCart(cart)} data-testid="addCount">+</Btn>
                </ControlDiv>
                <p>{cart.price} {currencyValue}</p>
                <CartImage src={cart.image_url}  alt={cart.title}/>
            </CartContent>
        </CartCard>
        )) : <h1> No Item In the cart</h1> }
        </>
    )
}

export default CartItem;