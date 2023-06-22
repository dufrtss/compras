import { useState } from "react";

import { Product } from "./components/Product.tsx";

import "./global.css";

function App() {
	const [products, setProducts] = useState([
		{
			id: 1,
			name: "Cabos de rede",
			amount: 4,
			price: 54.0,
		},
		{
			id: 2,
			name: "Switch 6 portas",
			amount: 1,
			price: 94.0,
		},
	]);

	return (
		<>
			<div className='flex flex-col  items-center justify-center bg-gray-950 h-52 gap-8'>
				<h2 className=''>Módulo Compras</h2>

				<div className='flex justify-center items-center gap-2'>
					<input
						className='px-4 py-3 w-72 bg-zinc-700 rounded-md border-2 border-zinc-600 outline-none focus:outline-cyan-600 transition-colors'
						type='text'
						id='product'
						placeholder='Cadastre um novo produto'
					/>

					<input
						className='px-4 py-3 w-32 bg-zinc-700 rounded-md border-2 border-zinc-600 outline-none focus:outline-cyan-600 transition-colors'
						type='number'
						id='amount'
						min={0}
						placeholder='Unidades'
					/>

					<input
						className='px-4 py-3 w-32 bg-zinc-700 rounded-md border-2 border-zinc-600 outline-none focus:outline-cyan-600 transition-colors'
						type='number'
						id='price'
						min={0}
						placeholder='Valor'
					/>

					<button className='px-4 py-3 w-24 font-semibold rounded-md bg-cyan-500 hover:bg-cyan-400 outline-none focus:outline-cyan-500 transition-colors'>
						Add
					</button>
				</div>
			</div>

			<div className='flex flex-col items-center justify-center gap-4 p-4'>
				<div className='grid grid-flow-col grid-cols-6 py-2 px-5 w-7/12 outline-none'>
					<span>ID</span>
					<span className='col-span-3'>Produto</span>
					<span>Unidades</span>
					<span>Valor</span>
					<span>Ações</span>
				</div>

				{products.map((product) => {
					return (
						<Product
							key={product.id}
							id={product.id}
							name={product.name}
							amount={product.amount}
							price={product.price}
						/>
					);
				})}
			</div>
		</>
	);
}

export default App;
