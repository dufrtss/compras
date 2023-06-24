import { ChangeEvent, FormEvent } from "react";
import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Request } from "./pages/Request";
import { Order } from "./pages/Order";
import { Invoice } from "./pages/Invoice";

interface RouterProps {
  products: {
    id: number;
    name: string;
    amount: number;
  }[];
  newProductName?: string;
  newProductAmount?: number;
  handleSetNewProductName?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSetNewProductAmount?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCreateNewProduct?: (event: FormEvent) => void;
  deleteProduct: (productToDelete: number) => void;
}

export function Router({
  products,
  newProductName,
  newProductAmount,
  handleSetNewProductName,
  handleSetNewProductAmount,
  handleCreateNewProduct,
  deleteProduct,
}: RouterProps) {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route
          path="/"
          element={
            <Request
              products={products}
              newProductName={newProductName}
              newProductAmount={newProductAmount}
              handleSetNewProductName={handleSetNewProductName}
              handleSetNewProductAmount={handleSetNewProductAmount}
              handleCreateNewProduct={handleCreateNewProduct}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route path="/order" element={<Order />} />
        <Route path="/invoice" element={<Invoice />} />
      </Route>
    </Routes>
  );
}
