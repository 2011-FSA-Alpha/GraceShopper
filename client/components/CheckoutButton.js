import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

// This is a dummy button that will eventually lead to a Checkout page to prompt the user for payment details

const CheckoutButton = props => {
  const {cart} = props
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [])

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Link
          to={{
            pathname: '/order-confirmed',
            cartProps: {
              cart: cart
            }
          }}
        >
          <button
            disabled={!(Array.isArray(cart.products) && cart.products.length)}
          >
            Checkout
          </button>
        </Link>
      )}
    </div>
  )
}

export default CheckoutButton
