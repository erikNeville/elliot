import * as React from "react";

import { createCustomContext } from "./createCustomContext";

type MenuProviderProps = {
  children: React.ReactNode;
};

type MenuContextType = {
  menuState: boolean;
  setMenuState: (value: boolean) => void;
};

export const [useMenuState, CustomContextProvider] = createCustomContext<
  MenuContextType
>();

export const MenuStateProvider = ({ children }: MenuProviderProps) => {
  const [menuState, setMenuState] = React.useState(false);

  React.useEffect(() => {
    const currentMenuState = false;
    setMenuState(currentMenuState);
  }, []);

  return (
    <CustomContextProvider value={{ menuState, setMenuState }}>
      {children}
    </CustomContextProvider>
  );
};
