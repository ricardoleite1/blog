"use client"

import { ErrorMessage } from "@/components/ErrorMessage";

export default function NotFound() {
  return (
    <ErrorMessage type="500" message="Ocorreu um erro desconhecido."/>
  );
}
