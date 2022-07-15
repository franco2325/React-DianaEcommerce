import React from 'react'
import Helmet from '../components/Helmet'
import { useGlobalContext } from '../context'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import Swal from 'sweetalert2'

const Cart = () => {
  const { cart, EmptyCart } = useGlobalContext()

  return (
    <Helmet title='Cart'>
      <div className='container main'>
        <div className='cart'>
          <div className='cart__info'>
            <div className='cart__info__txt'>
              <p>
                {cart.length > 0
                  ? `You have ${cart.length} products on your cart.`
                  : 'Your cart its empty.'}
              </p>
            </div>
            <div className='cart__info__btn'>
              <Button
                size='block'
                onClick={() => {
                  if (cart.length === 0) {
                    Swal.fire({
                      icon: 'error',
                      text: 'The cart its empty.',
                    })
                  } else {
                    Swal.fire({
                      icon: 'success',
                      text: 'The order was shipped',
                    })
                  }
                }}
              >
                Order
              </Button>
              <Button size='block' onClick={() => EmptyCart()}>
                Empty cart
              </Button>

              <Link to='/catalog'>
                <Button size='block'>Continue Shopping</Button>
              </Link>
            </div>
          </div>
          <div className='cart__list'>
            {cart.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Cart
