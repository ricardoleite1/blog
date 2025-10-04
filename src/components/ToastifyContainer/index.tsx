"use client";

import { ToastContainer } from "react-toastify";

export function ToastifyContainer() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      rtl={false}
    />
  );
}
