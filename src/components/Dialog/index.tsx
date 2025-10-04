import { CheckIcon, CircleXIcon } from "lucide-react";

type DialogProps = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  disabled?: boolean;
};

export function Dialog({
  title,
  message,
  onCancel,
  onConfirm,
  disabled,
}: DialogProps) {
  function handleCancel() {
    if (disabled) return;
    onCancel();
  }

  return (
    <div
      onClick={handleCancel}
      className="fixed bg-black/35 backdrop-blur-xs inset-0 flex items-center justify-center z-10 shadow-2xl shadow-black"
    >
      <div
        className="bg-slate-100 p-6 rounded-2xl text-black max-w-2xl mx-6 text-center flex flex-col gap-6"
        role="dialog"
        aria-describedby="dialog-text"
        aria-labelledby="dialog-title"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="dialog-title" className="text-xl font-extrabold">
          {title}
        </h3>
        <p id="dialog-text">{message}</p>
        <div className="flex items-center justify-around mt-4">
          <button
            onClick={handleCancel}
            autoFocus
            className="disabled:bg-slate-300 disabled:text-slate-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-slate-200 py-2 px-4 transition hover:bg-slate-300 cursor-pointer rounded"
            disabled={disabled}
          >
            <CircleXIcon size={18} /> Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="disabled:bg-slate-300 disabled:text-slate-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-green-300 py-2 px-4 transition hover:bg-green-400 cursor-pointer rounded"
            disabled={disabled}
          >
            <CheckIcon size={18} />
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
