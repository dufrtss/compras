import { X } from "@phosphor-icons/react";

interface SuccessModalProps {
  closeModal: () => void;
}

export function SuccessModal({ closeModal }: SuccessModalProps) {
  return (
    <>
      <div className="z-0 fixed overflow-auto w-screen h-screen bg-zinc-950 bg-opacity-80">
        <div className="flex flex-col gap-2 items-center justify-center h-screen text-zinc-95">
          <h2 className="text-lg">Pedido de compra realizado com sucesso!</h2>
          <span className="text-sm">
            Parabéns, você realizou um pedido de compra, agora é só aguardar.
          </span>

          <button className="text-cyan-500" onClick={closeModal}>
            <X size={32} />
          </button>
        </div>
      </div>
    </>
  );
}
