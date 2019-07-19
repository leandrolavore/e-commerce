import React, { Component } from 'react'


export const cartItemsWithQuantity = (cartItems) =>{
    return cartItems.reduce((acc,item)=>{
        const filteredItems = acc.filter(item2 => item2.id === item.id)[0]
        filteredItems !== undefined ? filteredItems.quantity++ : acc.push({...item, quantity: 1})
        return acc

    },[])
}

