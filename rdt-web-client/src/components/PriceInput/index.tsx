import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { Input, type InputProps } from "../Input";

export interface PriceInputProps extends Omit<
  InputProps,
  "value" | "onChange"
> {
  value?: number;
  onChange?: (value: number) => void;
}

export const PriceInput = ({
  value,
  onChange,
  onKeyDown,
  placeholder = "00,00",
  ...props
}: PriceInputProps) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const [typedDigits, setTypedDigits] = useState<number[]>([]);

  const fromNumberToDigits = (value: number) => {
    if (!value) {
      return [];
    }

    return String(value)
      .split("")
      .map((digit) => Number(digit));
  };

  const fromDigitsToNumber = (digits: number[]) => {
    if (!digits.length) {
      return 0;
    }

    const lastTwoDigits = digits.slice(-2);
    const rest = digits.slice(0, -2);

    while (lastTwoDigits.length < 2) {
      lastTwoDigits.unshift(0);
    }

    return Number([...rest, ".", ...lastTwoDigits].join(""));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (/^\d$/.test(e.key)) {
      const value = Number(e.key);

      setTypedDigits((prev) => {
        if (prev.length === 0 && value === 0) {
          return prev;
        }

        const newTypedDigits = [...prev, value];

        onChange?.(fromDigitsToNumber(newTypedDigits));

        return newTypedDigits;
      });
    } else if (e.key === "Backspace") {
      setTypedDigits((prev) => {
        const newTypedDigits = prev.slice(0, -1);

        onChange?.(fromDigitsToNumber(newTypedDigits));

        return newTypedDigits;
      });
    }

    onKeyDown?.(e);
  };

  const formattedValue = useMemo(() => {
    if (typeof value !== "number" && !typedDigits.length) {
      return undefined;
    }

    const num = value ?? fromDigitsToNumber(typedDigits);

    return num?.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, [value, typedDigits]);

  useEffect(() => {
    setTypedDigits(fromNumberToDigits(value ?? 0));
  }, [value]);

  return (
    <Input
      {...props}
      ref={ref}
      onKeyDown={handleKeyDown}
      value={formattedValue}
      placeholder={placeholder}
    />
  );
};
