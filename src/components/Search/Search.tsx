import IconSearch from "@/assets/icons/icon-search.svg?react";
import classNames from "classnames";
import { type FC } from "react";

import searchClasses from "./Search.module.scss";

export type SearchProps = {
  isInvalid?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
};

export const Search: FC<SearchProps> = ({
  isInvalid,
  placeholder,
  onChange,
}) => {
  return (
    <div className={searchClasses["Search__container"]}>
      <input
        type="search"
        placeholder={placeholder}
        className={classNames({
          [searchClasses["Search"]]: true,
          [searchClasses["Search--invalid"]]: isInvalid,
        })}
        onChange={({ currentTarget }) => onChange(currentTarget.value)}
      />
      <IconSearch className={searchClasses["Search__icon"]} />
    </div>
  );
};
