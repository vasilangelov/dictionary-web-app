export const isSystemDarkTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
