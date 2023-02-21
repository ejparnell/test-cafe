import { useState, useEffect, useRef } from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import './NewOrderPage.css'
import * as itemsAPI from '../../utilities/items-api'
=======
import { Link, useNavigate } from 'react-router-dom'
import './NewOrderPage.css'
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
>>>>>>> lecture
import Logo from '../../components/Logo/Logo'
import MenuList from '../../components/MenuList/MenuList'
import CategoryList from '../../components/CategoryList/CategoryList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import UserLogOut from '../../components/UserLogOut/UserLogOut'

export default function NewOrderPage({ user, setUser }) {
	const [menuItems, setMenuItems] = useState([])
	const [activeCat, setActiveCat] = useState('')
<<<<<<< HEAD
	const categoriesRef = useRef([])
=======
	const [cart, setCart] = useState(null)
	const categoriesRef = useRef([])
	const navigate = useNavigate()
>>>>>>> lecture

	useEffect(function () {
		// GET request for items
		async function getItems() {
			const items = await itemsAPI.getAll()

			categoriesRef.current = items.reduce((cats, item) => {
				const cat = item.category.name
				return cats.includes(cat) ? cats : [...cats, cat] 
			}, [])

			setMenuItems(items)
			setActiveCat(categoriesRef.current[0])
		}
		getItems()
<<<<<<< HEAD
	}, [])

=======

		async function getCart() {
			const cart = await ordersAPI.getCart()
			setCart(cart)
		}
		getCart()
	}, [])

	async function handleAddToOrder(itemId) {
		// alert(`add item: ${itemId}`)
		// 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
		const cart = await ordersAPI.addItemToCart(itemId)
		// 2. Update the cart state with the updated cart received from the server
		setCart(cart)
	}

	async function handleChangeQty(itemId, newQty) {
		const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)

		setCart(updatedCart)
	}

	async function handleCheckout() {
		await ordersAPI.checkout()
		navigate('/orders')
	}

>>>>>>> lecture
	// useEffect(function() {
	// 	console.log('useEffect runs when menuItems change')
	// }, [menuItems])

	return (
		<div className='NewOrderPage'>
			<aside>
				<Logo />
				<CategoryList
					categories={categoriesRef.current}
					activeCat={activeCat}
					setActiveCat={setActiveCat}
				/>
				<Link to='/orders' className='button btn-sm'>
					PREVIOUS ORDERS
				</Link>
				<UserLogOut user={user} setUser={setUser} />
			</aside>
			<MenuList
				menuItems={menuItems.filter((item) => item.category.name === activeCat)}
<<<<<<< HEAD
			/>
			<OrderDetail />
=======
				handleAddToOrder={handleAddToOrder}
			/>
			<OrderDetail
				order={cart}
				handleChangeQty={handleChangeQty}
				handleCheckout={handleCheckout}
			/>
>>>>>>> lecture
		</div>
	)
}
