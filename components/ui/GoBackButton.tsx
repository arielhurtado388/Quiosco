"use client";

import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <button
      className="w-full bg-amber-400 text-center font-bold cursor-pointer lg:w-auto text-lg px-10 py-3"
      onClick={() => router.back()}
    >
      Volver
    </button>
  );
}
