import { CheckIcon, CircleXIcon } from "lucide-react";
import { Button } from "../Button";

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
          <Button
            autoFocus
            variant="ghost"
            onClick={handleCancel}
            icon={<CircleXIcon size={18} />}
          >
            Cancelar
          </Button>
          <Button
            variant="default"
            onClick={onConfirm}
            icon={<CheckIcon size={18} />}
          >
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  );
}
