import React from 'react';

const store = React.createContext({
    iteams: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default store;