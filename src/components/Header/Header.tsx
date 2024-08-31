import IconLogo from "@/assets/icons/icon-logo.svg?react";
import IconMoon from "@/assets/icons/icon-moon.svg?react";
import { FontDropdown } from "@/components/FontDropdown";
import { Toggle } from "@/components/Toggle";
import { Font } from "@/constants/font";
import { Theme } from "@/constants/theme";
import { type FC } from "react";

import headerClasses from "./Header.module.scss";

export type HeaderProps = {
  font: Font;
  theme: Theme;
  onFontSelect: (font: Font) => void;
  onThemeChange: (theme: Theme) => void;
};

export const Header: FC<HeaderProps> = ({
  font,
  theme,
  onFontSelect,
  onThemeChange,
}) => {
  const isDarkTheme = theme === Theme.Dark;

  const toggleTheme = () => {
    onThemeChange(isDarkTheme ? Theme.Light : Theme.Dark);
  };

  return (
    <header className={headerClasses["Header"]}>
      <IconLogo className={headerClasses["Header__logo"]} />

      <div className={headerClasses["Header__action-group"]}>
        <FontDropdown font={font} onFontSelect={onFontSelect} />

        <div className={headerClasses["Header__theme-group"]}>
          <Toggle checked={isDarkTheme} onChange={toggleTheme} />
          <IconMoon />
        </div>
      </div>
    </header>
  );
};
