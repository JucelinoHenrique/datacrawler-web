"use client"
import { useState } from "react";

type ScraperOption = {
  id: string;
  label: string;
};

type ScraperFilterProps = {
  options: ScraperOption[];
  onChange?: (id: string) => void;
  initial?: string;
};

export function ScraperFilter({ options, onChange, initial }: ScraperFilterProps) {
  const [selected, setSelected] = useState(initial ?? options[0]?.id ?? "");

  const handleSelect = (id: string) => {
    setSelected(id);
    onChange?.(id); 
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => handleSelect(opt.id)}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
            selected === opt.id
              ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}