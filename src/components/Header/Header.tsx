import { type FC } from "react";
import IconLogo from "@/assets/icons/icon-logo.svg?react";
import IconMoon from "@/assets/icons/icon-moon.svg?react";
import { FontDropdown } from "@/components/FontDropdown";
import { Toggle } from "@/components/Toggle";
import { Font } from "@/constants/font";

import headerClasses from "./Header.module.scss";

export type HeaderProps = {
  font: Font;
  onFontSelect: (font: Font) => void;
};

export const Header: FC<HeaderProps> = ({ font, onFontSelect }) => {
  return (
    <header className={headerClasses["Header"]}>
      <IconLogo className={headerClasses["Header__logo"]} />

      <div className={headerClasses["Header__action-group"]}>
        <FontDropdown font={font} onFontSelect={onFontSelect} />

        <div className={headerClasses["Header__theme-group"]}>
          <Toggle />
          <IconMoon />
        </div>
      </div>
    </header>
  );
};
