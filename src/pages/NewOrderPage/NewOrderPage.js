import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './NewOrderPage.css'
import * as itemsAPI from '../../utilities/items-api'
import Logo from '../../components/Logo/Logo'
import MenuList from '../../components/MenuList/MenuList'
import CategoryList from '../../components/CategoryList/CategoryList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import UserLogOut from '../../components/UserLogOut/UserLogOut'

export default function NewOrderPage({ user, setUser }) {
	const [menuItems, setMenuItems] = useState([])
	const [activeCat, setActiveCat] = useState('')
	const categoriesRef = useRef([])

	useEffect(function () {
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
	}, [])

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
			/>
			<OrderDetail />
		</div>
	)
}
