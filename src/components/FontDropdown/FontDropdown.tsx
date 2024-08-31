import { Dropdown, type DropdownOption } from "@/components/Dropdown";
import { Font } from "@/constants/font";
import { type FC } from "react";

import fontDropdownClasses from "./FontDropdown.module.scss";

const FONT_OPTIONS: DropdownOption<Font>[] = [
  {
    label: "Sans Serif",
    value: Font.SansSerif,
  },
  {
    label: "Serif",
    value: Font.Serif,
  },
  {
    label: "Mono",
    value: Font.Mono,
  },
];

export type FontDropdownProps = {
  font: Font;
  onFontSelect: (font: Font) => void;
};

export const FontDropdown: FC<FontDropdownProps> = ({ font, onFontSelect }) => {
  const generateOptionClassName = (font: Font) =>
    fontDropdownClasses[`FontDropdown__option--${font}`];

  return (
    <Dropdown
      value={font}
      options={FONT_OPTIONS}
      onSelect={onFontSelect}
      optionClassName={generateOptionClassName}
    />
  );
};
