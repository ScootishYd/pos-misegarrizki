import { Suspense } from "react";
import NotaPage from "./notaPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading Nota...</div>}>
      <NotaPage />
    </Suspense>
  );
}
