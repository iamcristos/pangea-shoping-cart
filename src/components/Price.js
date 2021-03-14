import React from 'react';

function Price(props) {
    const sum = props.carts.length ? 
    props.carts.reduce((a,b) => {
        return {total: (a.total + (b.total))}
    }) : 0
   
 return (
     <div>
        <p>Subtotal</p>
        <span>{sum.total}</span>
    </div>
 )
}

export default Price;