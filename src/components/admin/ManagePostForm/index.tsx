"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";

export function ManagePostForm() {
  const [content, setContent] = useState("");

  return (
    <form className="mb-16 flex flex-col gap-6">
      <InputText labelText="Nome" />
      <InputText labelText="Nome" />
      <InputCheckbox labelText="Nome" />
      <InputCheckbox labelText="Nome" />
      <MarkdownEditor
        labelText="Conteúdo"
        setValueAction={setContent}
        value={content}
        textAreaName="content"
      />
      <Button type="submit" variant="default">
        Enviar
      </Button>
    </form>
  );
}
