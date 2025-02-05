import { configureStore } from '@reduxjs/toolkit'

import products from './productSlice'
import categories from './categoriesSlice'
import cart from './cartSlice'

export default configureStore ({
    reducer: {
        products: products,
        categories: categories,
        cart: cart
    }
})