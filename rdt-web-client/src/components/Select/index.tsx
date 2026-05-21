import { useId, useState, useRef, useEffect, useMemo } from "react";
import { AltArrowDown } from "@solar-icons/react";

export interface SelectOption<T extends string | number> {
  label: string;
  value: T;
}

export interface SelectProps<T extends string | number> {
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  placeholder?: string;
  className?: string;
}

export const Select = <T extends string | number>({
  label,
  options,
  value,
  onChange,
  placeholder = "Selecione",
  className,
}: SelectProps<T>) => {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const selected = useMemo(() => {
    return options?.find((opt) => opt.value === value);
  }, [options, value]);

  const filteredOptions = useMemo(() => {
    return options?.filter((opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase()),
    );
  }, [options, search]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!open) setSearch("");
  }, [open]);

  return (
    <div ref={ref} className={`${className} flex flex-col gap-1.5 relative`}>
      {label && (
        <label htmlFor={id} className="text-xs font-medium text-base-title">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`
          text-sm border border-[#C9A97A4D] bg-[#C9A97A0D]
          px-4 py-2.5 rounded-lg h-10 w-full
          text-left text-base-title
          flex items-center justify-between
          ${open ? "border-base-hover bg-[#C9A97A1A]" : ""}
          transition-colors
        `}
      >
        <span
          className={`${selected ? "text-base-title" : "text-[#7A4E2D80]"}`}
        >
          {selected?.label || placeholder}
        </span>

        <AltArrowDown
          size={20}
          color="var(--color-base-subtitle)"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="
            absolute top-full mt-1 w-full z-10
            border border-[#C9A97A4D]
            bg-[#F5E9D6]
            rounded-lg shadow-sm
            overflow-hidden
          "
        >
          <div className="px-2 py-1 border-b border-[#C9A97A33]">
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar..."
              className="
                w-full bg-transparent outline-none
                text-sm px-2 py-1.5 rounded-md
                placeholder:text-[#7A4E2D80]
                text-base-title
              "
            />
          </div>

          {/* Options */}
          <div className="max-h-48 overflow-y-auto">
            {filteredOptions?.length ? (
              filteredOptions?.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange?.(opt.value);
                    setOpen(false);
                  }}
                  className={`
                    w-full text-left px-4 py-2 text-sm
                    transition-colors
                    ${
                      value === opt.value
                        ? "bg-[#C9A97A1A] text-base-title"
                        : "text-base-text"
                    }
                    hover:bg-[#C9A97A1A]
                  `}
                >
                  {opt.label}
                </button>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-[#7A4E2D80]">
                Nenhum resultado
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
