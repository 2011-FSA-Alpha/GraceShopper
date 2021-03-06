/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
//merge
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as Cart} from './Cart'
export {default as AllProducts} from './AllProducts'
export {default as SingleProduct} from './SingleProduct'
export {default as OrderHistory} from './OrderHistory'
export {default as OrderConfirmed} from './OrderConfirmed'
export {default as Home} from './Home'
export {default as FilterBar} from './FilterBar'
export {default as Carousel} from './Carousel'
export {default as NotFound} from './NotFound'
export {default as Footer} from './Footer'
export {default as AdminDashboard} from './AdminDashboard'
export {Login, Signup} from './auth-form'
