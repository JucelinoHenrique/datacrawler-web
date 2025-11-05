"use client";

import { useState } from "react";
import Link from "next/link";
import { FiInfo, FiHome, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

export function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const items = [
    { label: "Início", href: "/", icon: FiHome },
    { label: "Informações do Projeto", href: "/info", icon: FiInfo },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* painel flutuante */}
      {open && (
        <div className="mb-3 w-64 rounded-2xl bg-white/95 p-3 shadow-2xl ring-1 ring-slate-200 backdrop-blur">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Navegação
          </p>
          <div className="flex flex-col gap-1">
            {items.map(({ label, href, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                      active
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* botão principal */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition hover:bg-slate-800"
        aria-label="Abrir menu de informações"
      >
        {open ? <FiX className="h-5 w-5" /> : <FiInfo className="h-5 w-5" />}
      </button>
    </div>
  );
}
