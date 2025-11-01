"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type AdminRouteProps = {
  enlace: {
    url: string;
    text: string;
    blank: boolean;
  };
};

export default function AdminRoute({ enlace }: AdminRouteProps) {
  const pathname = usePathname();

  const estaActivo = pathname === enlace.url;

  return (
    <Link
      className={`${
        estaActivo ? "bg-amber-400" : ""
      } font-bold text-lg border-t border-gray-200 p-3 last-of-type:border-b`}
      href={enlace.url}
      target={enlace.blank ? "_blank" : ""}
    >
      {enlace.text}
    </Link>
  );
}
