import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-950 py-7">
        <nav>
          <div className="flex gap-7">
            <NavLink
              className="hover:border-b-2 hover:-mb-2 hover:border-cyan-500 cursor-pointer pointer-events-none opacity-20"
              to="/"
              title="Order"
            >
              Pedido de compra
            </NavLink>
            <NavLink
              className="hover:border-b-2 hover:-mb-2 hover:border-cyan-500 cursor-pointer"
              to="/"
              title="Request"
            >
              Solicitação de compra
            </NavLink>
            <NavLink
              className="hover:border-b-2 hover:-mb-2 hover:border-cyan-500 cursor-pointer pointer-events-none opacity-20"
              to="/"
              title="Invoice"
            >
              Nota fiscal de entrada
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}
