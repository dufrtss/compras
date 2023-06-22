import { Pencil, Trash } from "@phosphor-icons/react";

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
				<div className='flex gap-2'>
					<button className='outline-none rounded-sm focus:outline-cyan-600 hover:text-cyan-600 transition-colors'>
						<Pencil size={16} />
					</button>
					<button className='outline-none rounded-sm focus:outline-cyan-600 hover:text-cyan-600 transition-colors'>
						<Trash size={16} />
					</button>
				</div>
			</div>
		</>
	);
}
