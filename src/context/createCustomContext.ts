import * as React from "react";

export function createCustomContext<ContextType>() {
  const customContext = React.createContext<ContextType | undefined>(undefined);
  function useCustomContext() {
    const c = React.useContext(customContext);
    if (!c) {
      throw new Error(
        "useCustomContext must be inside a Provider with a value.",
      );
    }
    return c;
  }
  return [useCustomContext, customContext.Provider] as const;
}
