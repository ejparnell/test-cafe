<<<<<<< HEAD
// const Order = require('../../models/order');
=======
const Order = require('../../models/order')
>>>>>>> lecture
// const Item = require('../../models/item');

// A cart is the unpaid order for a user
async function cart(req, res) {
<<<<<<< HEAD

=======
	const cart = await Order.getCart(req.user._id)
	res.json(cart)
>>>>>>> lecture
}

// Add an item to the cart
async function addToCart(req, res) {
<<<<<<< HEAD

=======
	const cart = await Order.getCart(req.user._id)

	await cart.addItemToCart(req.params.id)

	res.json(cart)
>>>>>>> lecture
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
<<<<<<< HEAD

=======
	const cart = await Order.getCart(req.user._id)

	await cart.setItemQty(req.body.itemId, req.body.newQty)

	res.json(cart)
>>>>>>> lecture
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
<<<<<<< HEAD

=======
	const cart = await Order.getCart(req.user._id)

	cart.isPaid = true 
	await cart.save()
	
	res.json(cart)
>>>>>>> lecture
}

module.exports = {
	cart,
	addToCart,
	setItemQtyInCart,
	checkout,
}