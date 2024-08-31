import IconArrowDown from "@/assets/icons/icon-arrow-down.svg?react";
import { useToggle } from "@/hooks/useToggle";
import { useEffect, useMemo, useRef, type FocusEventHandler } from "react";

import dropdownStyles from "./Dropdown.module.scss";

export type DropdownOption<T> = {
  label: React.ReactNode;
  value: T;
};

export type DropdownProps<T> = {
  value: T;
  options: DropdownOption<T>[];
  onSelect: (value: T) => void;
};

export const Dropdown = <T,>({
  value,
  options,
  onSelect,
}: DropdownProps<T>) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    value: isOpen,
    setValue: setIsOpen,
    toggleValue: toggleIsOpen,
  } = useToggle();

  const { label: activeLabel } = useMemo(
    () => options.find((option) => option.value === value)!,
    [options, value]
  );

  useEffect(() => {
    const dropdown = dropdownRef.current;

    if (!dropdown) {
      return;
    }

    const closeOnOutsideClick = ({ target }: MouseEvent) => {
      if (!(target instanceof Node) || !dropdown.contains(target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", closeOnOutsideClick);

    return () => {
      window.removeEventListener("click", closeOnOutsideClick);
    };
  }, [setIsOpen]);

  const closeOnBlur: FocusEventHandler = ({ currentTarget, relatedTarget }) => {
    if (!currentTarget.contains(relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={dropdownStyles["Dropdown"]}
      ref={dropdownRef}
      onBlur={closeOnBlur}
    >
      <button
        className={dropdownStyles["Dropdown__toggle"]}
        onClick={toggleIsOpen}
      >
        {activeLabel}
        <IconArrowDown className={dropdownStyles["Dropdown__toggle-icon"]} />
      </button>

      {isOpen && (
        <ul className={dropdownStyles["Dropdown__menu"]}>
          {options.map(({ label, value }, index) => (
            <li key={index}>
              <button
                className={dropdownStyles["Dropdown__menu-button"]}
                onClick={() => {
                  setIsOpen(false);
                  onSelect(value);
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
