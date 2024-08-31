import IconLogo from "@/assets/icons/icon-logo.svg?react";
import IconMoon from "@/assets/icons/icon-moon.svg?react";
import { FontDropdown } from "@/components/FontDropdown";
import { Toggle } from "@/components/Toggle";
import { Font } from "@/constants/font";
import { useState } from "react";

import headerClasses from "./Header.module.scss";

export const Header = () => {
  const [font, setFont] = useState(Font.SansSerif);

  return (
    <header className={headerClasses["Header"]}>
      <IconLogo className={headerClasses["Header__logo"]} />

      <div className={headerClasses["Header__action-group"]}>
        <FontDropdown font={font} onFontSelect={setFont} />

        <div className={headerClasses["Header__theme-group"]}>
          <Toggle />
          <IconMoon />
        </div>
      </div>
    </header>
  );
};
