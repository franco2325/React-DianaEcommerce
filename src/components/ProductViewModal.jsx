import React from 'react'
import ProductView from './ProductView'
import productData from '../assets/fake-data/products'
import Button from './Button'
import { useState } from 'react'
import { useEffect } from 'react'
import { useGlobalContext } from '../context'

const ProductViewModal = () => {
  const { slug, modalActive, setModalActive } = useGlobalContext()

  if (modalActive === true) {
    const modal = productData.getProductBySlug(slug)

    return (
      <div className={`product-view__modal active`} id='ModalActive'>
        <div className='product-view__modal__content'>
          <ProductView product={modal} />
          <div className='product-view__modal__content__close'>
            <Button
              size='sm'
              onClick={() =>
                document
                  .getElementById('ModalActive')
                  .classList.remove('active') & setModalActive(false)
              }
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductViewModal
