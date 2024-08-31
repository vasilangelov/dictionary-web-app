import type { FC, ComponentProps, PropsWithoutRef } from "react";

import toggleClasses from "./Toggle.module.scss";

export type ToggleProps = Omit<
  PropsWithoutRef<ComponentProps<"input">>,
  "type" | "className"
>;

export const Toggle: FC<ToggleProps> = (props) => {
  return (
    <input type="checkbox" className={toggleClasses["Toggle"]} {...props} />
  );
};
