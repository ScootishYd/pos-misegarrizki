import { Suspense } from "react";
import NotaPage from "./NotaPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading Nota...</div>}>
      <NotaPage />
    </Suspense>
  );
}
