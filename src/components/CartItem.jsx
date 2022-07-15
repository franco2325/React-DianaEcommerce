import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'

const CartItem = (props) => {
  const [item, setItem] = useState(props.item)
  const [quantity, setQuantity] = useState(props.item.quantity)

  useEffect(() => {
    setItem(props.item)
    setQuantity(props.item.quantity)
  }, [props.item])

  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1)
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }
  }

  return (
    <div className='cart__item'>
      <div className='cart__item__image'>
        <img src={item.product.image01} alt='' />
      </div>
      <div className='cart__item__info'>
        <div className='cart__item__info__name'>
          <Link to={`/catalog/${item.product.slug}`}>
            {`${item.product.name} 
            
            ${item.color.charAt(0).toUpperCase() + item.color.slice(1)} Color
            Size ${item.size.toUpperCase()}`}
          </Link>
          <div className='cart__item__info__name__total'>
            <p>Total to pay: ${quantity * item.product.price}</p>
          </div>
        </div>
        <div className='cart__item__info__price'>
          Price: ${Number(item.product.price)}
        </div>
        <div className='cart__item__info__quantity'>
          <div className='product__info__item__quantity'>
            <pre>Quantity: </pre>
            <div className='product__info__item__quantity__btn'>
              <i
                className='bx bx-minus'
                onClick={() => updateQuantity('minus')}
              ></i>
            </div>
            <div className='product__info__item__quantity__input'>
              {quantity}
            </div>
            <div className='product__info__item__quantity__btn'>
              <i
                className='bx bx-plus'
                onClick={() => updateQuantity('plus')}
              ></i>
            </div>
          </div>
        </div>
        <div className='cart__item__info__del'>
          <Button size='xs' onClick={() => ''}>
            <i className='bx bxs-trash bx-burst'></i>{' '}
            {/* Cant filter the product - Eliminate a single item */}
          </Button>{' '}
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object,
}

export default CartItem
