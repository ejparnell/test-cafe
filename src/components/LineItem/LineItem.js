import './LineItem.css'

<<<<<<< HEAD
export default function LineItem({ lineItem, isPaid }) {
=======
export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
>>>>>>> lecture
	return (
		<div className='LineItem'>
			<div className='flex-ctr-ctr'>{lineItem.item.emoji}</div>
			<div className='flex-ctr-ctr flex-col'>
				<span className='align-ctr'>{lineItem.item.name}</span>
				<span>{lineItem.item.price?.toFixed(2)}</span>
			</div>
			<div className='qty' style={{ justifyContent: isPaid && 'center' }}>
				{!isPaid && (
<<<<<<< HEAD
					<button className='btn-xs' onClick={() => alert('clicked')}>
=======
					<button
						className='btn-xs'
						onClick={() =>
							handleChangeQty(lineItem.item._id, lineItem.qty - 1)
						}>
>>>>>>> lecture
						−
					</button>
				)}
				<span>{lineItem.qty}</span>
				{!isPaid && (
<<<<<<< HEAD
					<button className='btn-xs' onClick={() => alert('clicked')}>
=======
					<button
						className='btn-xs'
						onClick={() =>
							handleChangeQty(lineItem.item._id, lineItem.qty + 1)
						}>
>>>>>>> lecture
						+
					</button>
				)}
			</div>
			<div className='ext-price'>${lineItem.extPrice.toFixed(2)}</div>
		</div>
	)
}
