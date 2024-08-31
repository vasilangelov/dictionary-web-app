import { LocalStorageKey } from "@/constants/localStorage";
import { Theme } from "@/constants/theme";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";
import { isSystemDarkTheme } from "@/utils/theme";
import { useCallback, useState } from "react";

export const useTheme = () => {
  const [activeTheme, setActiveTheme] = useState(() => {
    const theme = getLocalStorageItem(LocalStorageKey.Theme);

    if (theme !== undefined) {
      return theme;
    }

    if (isSystemDarkTheme()) {
      return Theme.Dark;
    }

    return Theme.Light;
  });

  const syncSetActiveTheme = useCallback((theme: Theme) => {
    setLocalStorageItem(LocalStorageKey.Theme, theme);
    setActiveTheme(theme);
  }, []);

  return [activeTheme, syncSetActiveTheme] as const;
};
