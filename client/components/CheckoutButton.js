import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

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
          <Button
            variant="contained"
            color="secondary"
            style={{
              background: 'linear-gradient(45deg, #2D8DFF 30%, #9DCAFF 90%)'
            }}
            disabled={!(Array.isArray(cart.products) && cart.products.length)}
          >
            Checkout
          </Button>
        </Link>
      )}
    </div>
  )
}

export default CheckoutButton
