import React from 'react'
import AddToCart from './AddToCart'
import styles from "./ProductCard.module.css"

const ProductCard = () => {
  return (
    <div className={styles.cardContainer}>

      <div className='p-5 text-purple-800 font-bold text-lg'>
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>


      <AddToCart />
    </div>
  )
}

export default ProductCard