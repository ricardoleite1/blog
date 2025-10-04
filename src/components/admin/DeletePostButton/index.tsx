"use client";

import { deletePostAction } from "@/actions/delete-post-action";
import { Dialog } from "@/components/Dialog";
import { Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";

export function DeletePostButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  async function handleClick() {
    setShowDialog(true);
  }

  async function handleConfirm() {
    startTransition(async () => {
      const result = await deletePostAction(id);
      setShowDialog(false);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Post deletado com sucesso!");
    });
  }

  return (
    <>
      <button
        disabled={isPending}
        className="disabled:cursor-not-allowed disabled:text-slate-600 text-black cursor-pointer hover:scale-125 hover:text-gray-800"
        onClick={handleClick}
        aria-label="Delete post"
      >
        <Trash2Icon size={20} />
      </button>
      {showDialog && (
        <Dialog
          onCancel={() => setShowDialog(false)}
          onConfirm={handleConfirm}
          disabled={isPending}
          title="Deletar post"
          message="Você tem certeza que deseja excluir este post?"
        />
      )}
    </>
  );
}
