import { ChangeEvent, FormEvent, useState } from "react";

import { Product } from "./components/Product.tsx";

import "./global.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 2,
      name: "Cabo de rede",
      amount: 4,
      price: 54.0,
    },
    {
      id: 1,
      name: "Switch 6 portas",
      amount: 1,
      price: 94.0,
    },
  ]);

  const [newProductName, setNewProductName] = useState("");
  const [newProductAmount, setNewProductAmount] = useState(0);

  function handleCreateNewProduct(event: FormEvent) {
    event.preventDefault();

    let newProductId = products.length + 1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id == newProductId) {
        newProductId = newProductId + 1;
      }
    }

    const newProduct = {
      id: newProductId,
      name: newProductName,
      amount: newProductAmount,
      price: newProductAmount * 2,
    };

    setProducts([newProduct, ...products]);
    setNewProductName("");
    setNewProductAmount(0);
  }

  function handleSetNewProductName(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewProductName(event.target.value);
  }

  function handleSetNewProductAmount(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewProductAmount(event.target.valueAsNumber);
  }

  function deleteProduct(productToDelete: number) {
    const productsWithoutDeletedOne = products.filter((product) => {
      return product["id"] != productToDelete;
    });

    setProducts(productsWithoutDeletedOne);
  }

  return (
    <>
      <div className="flex flex-col  items-center justify-center bg-gray-950 h-52 gap-8">
        <div className="flex justify-center gap-4">
          <a className="hover:border-b-2 hover:-mb-2 hover:border-cyan-500 cursor-pointer pointer-events-none opacity-20">
            Pedido de compra
          </a>
          <a className="hover:border-b-2 hover:-mb-2 hover:border-cyan-500 cursor-pointer">
            Solicitação de compra
          </a>
          <a className="hover:border-b-2 hover:-mb-2 hover:border-cyan-500 cursor-pointer pointer-events-none opacity-20">
            Nota fiscal de entrada
          </a>
        </div>

        <form
          onSubmit={handleCreateNewProduct}
          className="flex justify-center items-center gap-2"
        >
          Produto:
          <input
            className="px-4 py-3 w-48 bg-zinc-700 rounded-md border-2 border-zinc-600 outline-none focus:outline-cyan-600 transition-colors"
            type="text"
            id="name"
            placeholder="Nome do produto"
            value={newProductName}
            onChange={handleSetNewProductName}
          />
          Qtde:
          <input
            className="px-4 py-3 w-20 bg-zinc-700 rounded-md border-2 border-zinc-600 outline-none focus:outline-cyan-600 transition-colors"
            type="number"
            id="amount"
            min={0}
            placeholder="Unidades"
            value={newProductAmount}
            onChange={handleSetNewProductAmount}
          />
          <button
            type="submit"
            className="px-4 py-3 w-24 font-semibold rounded-md bg-cyan-500 hover:bg-cyan-400 outline-none focus:outline-cyan-500 transition-colors"
          >
            Add
          </button>
        </form>
      </div>

      <div id="productTable" className="flex flex-col items-center justify-center gap-4 p-4">
        <div className="grid grid-flow-col grid-cols-4 py-2 px-5 w-1/2 outline-none">
          <span>ID</span>
          <span className="col-span-2 ml-1">Produto</span>
          <span>Unidades</span>
          <span>Ações</span>
        </div>

        {products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              amount={product.amount}
              onDeleteProduct={deleteProduct}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
