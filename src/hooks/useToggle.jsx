import { useState } from "react";

export const useToggle = (_value) => {
  const [value, setValue] = useState(_value);
  const toggleValue = (_value = null) => {
    if (_value === null) {
      setValue(!value);
    } else {
      setValue(_value);
    }
  };
  return [value, toggleValue];
};
