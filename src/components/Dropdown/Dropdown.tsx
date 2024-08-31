import IconArrowDown from "@/assets/icons/icon-arrow-down.svg?react";
import { useToggle } from "@/hooks/useToggle";
import { useEffect, useMemo, useRef, type FocusEventHandler } from "react";

import dropdownClasses from "./Dropdown.module.scss";
import classNames from "classnames";

export type DropdownOption<T> = {
  label: React.ReactNode;
  value: T;
};

export type DropdownProps<T> = {
  value: T;
  options: DropdownOption<T>[];
  onSelect: (value: T) => void;
  optionClassName?: (value: T) => string;
};

export const Dropdown = <T,>({
  value,
  options,
  onSelect,
  optionClassName,
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
      className={dropdownClasses["Dropdown"]}
      ref={dropdownRef}
      onBlur={closeOnBlur}
    >
      <button
        className={dropdownClasses["Dropdown__toggle"]}
        onClick={toggleIsOpen}
      >
        {activeLabel}
        <IconArrowDown className={dropdownClasses["Dropdown__toggle-icon"]} />
      </button>

      {isOpen && (
        <ul className={dropdownClasses["Dropdown__menu"]}>
          {options.map(({ label, value }, index) => (
            <li key={index}>
              <button
                className={classNames(
                  dropdownClasses["Dropdown__menu-button"],
                  optionClassName?.(value)
                )}
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
