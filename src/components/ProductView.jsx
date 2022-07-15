import React, { useEffect } from 'react'
import { useState } from 'react'
import numberWithCommas from '../sass/utils/numberWithCommas'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Swal from 'sweetalert2'

const ProductView = (props) => {
  const { setSlug, cart, setModalActive } = useGlobalContext()
  const product = props.product

  const [previewImg, setPreviewImg] = useState(product.image01)

  const [color, setColor] = useState(undefined)

  const [size, setSize] = useState(undefined)

  const [quantity, setQuantity] = useState(1)

  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1)
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }
  }

  useEffect(() => {
    setPreviewImg(product.image01)
    setQuantity(1)
    setColor(undefined)
    setSize(undefined)
  }, [product])

  const check = () => {
    if (color === undefined) {
      Swal.fire('Please choose color')
      return false
    }
    if (size === undefined) {
      Swal.fire('Please choose size')
      return false
    }

    return true
  }

  const addToCart = () => {
    if (check()) {
      cart.push({ product, size, quantity, color })
      Swal.fire({
        icon: 'success',
        text: 'Product added to Cart',
      })
      setModalActive(false)
    }
  }

  const GoToCart = () => {
    if (check()) {
      setSlug(product.slug)
      cart.push({ product, size, quantity, color })
      navigate('/cart')
      setModalActive(false)
    }
  }

  const navigate = useNavigate()

  return (
    <div className='container main'>
      <div className='product'>
        <div className='product__images'>
          <div className='product__images__list'>
            <div
              className='product__images__list__item'
              onClick={() => setPreviewImg(product.image01)}
            >
              <img src={product.image01} alt='' />
            </div>
            <div
              className='product__images__list__item'
              onClick={() => setPreviewImg(product.image02)}
            >
              <img src={product.image02} alt='' />
            </div>
          </div>
          <div className='product__images__main'>
            <img src={previewImg} alt='' />
          </div>
          <div className='product-description'>
            <div className='product-description__title'>Product Details</div>
            <div
              className='product-description__content'
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
          </div>
        </div>
        <div className='product__info'>
          <h1 className='product__info__title'>{product.name}</h1>
          <div className='product__info__item'>
            <span className='product__info__item__price'>
              ${numberWithCommas(product.price)}
            </span>
          </div>
          <div className='product__info__item'>
            <div className='product__info__item__title'>Color</div>
            <div className='product__info__item__list'>
              {product.colors.map((item, index) => (
                <div
                  key={index}
                  className={`product__info__item__list__item ${
                    color === item ? 'active' : ''
                  }`}
                  onClick={() => setColor(item)}
                >
                  <div className={`circle  bg-${item}`}></div>
                </div>
              ))}
            </div>
          </div>
          <div className='product__info__item'>
            <div className='product__info__item__title'>Size</div>
            <div className='product__info__item__list'>
              {product.size.map((item, index) => (
                <div
                  key={index}
                  className={`product__info__item__list__item ${
                    size === item ? 'active' : ''
                  }`}
                  onClick={() => setSize(item)}
                >
                  <div className='product__info__item__list__size'> {item}</div>
                </div>
              ))}
            </div>
          </div>
          <div className='product__info__item'>
            <div className='product__info__item__title'>Amount</div>
            <div className='product__info__item__quantity'>
              <div
                className='product__info__item__quantity__btn'
                onClick={() => updateQuantity('minus')}
              >
                <i className='bx bx-minus'></i>
              </div>
              <div className='product__info__item__quantity__input'>
                {quantity}
              </div>
              <div
                className='product__info__item__quantity__btn'
                onClick={() => updateQuantity('plus')}
              >
                <i className='bx bx-plus'></i>
              </div>
            </div>
          </div>
          <div className='product__info__item'>
            <Button onClick={() => addToCart()}>Add to cart</Button>
            <Button onClick={() => GoToCart()}>Buy now</Button>
          </div>
        </div>
      </div>
      <div className='product-description mobile'>
        <div className='product-description__title'>Product Details</div>
        <div
          className='product-description__content'
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
      </div>
    </div>
  )
}

export default ProductView
