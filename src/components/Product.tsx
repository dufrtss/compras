interface ProductProps {
	id: number;
	name: string;
	amount: number;
	price: number;
}

export function Product({ id, name, amount, price }: ProductProps) {
	return (
		<>
			<div className='grid grid-flow-col grid-cols-6 py-4 px-5 w-7/12 bg-zinc-700 outline-none rounded-md border-2 border-zinc-600'>
				<span>{id}</span>
				<span className='col-span-3'>{name}</span>
				<span>{amount}</span>
				<span>{price}</span>
				<span>Delete</span>
			</div>
		</>
	);
}
